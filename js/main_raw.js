/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

import "./layer1/caller/v1/session_pb.js";
import "./layer1/caller/v1/signaling_pb.js";
import "./layer1/caller/v1/socket/caller_pb.js";

var service_pb = proto.v1.caller.v1;

const startButton = document.getElementById('startButton');
const callButton = document.getElementById('callButton');
const restartButton = document.getElementById('restartButton');
const hangupButton = document.getElementById('hangupButton');
callButton.disabled = true;
hangupButton.disabled = true;
restartButton.disabled = true;
startButton.onclick = start;
callButton.onclick = call;
hangupButton.onclick = hangup;
restartButton.onclick = restart;



const initReqID = 100500;

let startTime;
let callID;

const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');


var url = new URL(document.location.href);
var addr = url.searchParams.get("sockAddr");
if (addr != "" && addr != null) {
    document.getElementById('sockAddr').setAttribute("value", addr)
}

var roomID = url.searchParams.get("room");
if (roomID != "" && roomID != null) {
    document.getElementById('room').setAttribute("value", roomID)
}

var span = document.createElement('span');
span.innerHTML = '----START LOGGING----';
var conteiner = document.getElementById('log').appendChild(span);

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    log("This browser does not support the API yet");
}


function changeStart(enable) {
    if (!enable) {
        startButton.innerHTML = "connected";
        startButton.disabled = true;
    } else {
        startButton.innerHTML = "connect";
        startButton.disabled = false;
    }
}

localVideo.addEventListener('loadedmetadata', function () {
    log(`Local video videoWidth: ${this.videoWidth}px,  videoHeight: ${this.videoHeight}px`);
});

remoteVideo.addEventListener('loadedmetadata', function () {
    log(`Remote video videoWidth: ${this.videoWidth}px,  videoHeight: ${this.videoHeight}px`);
});

remoteVideo.onresize = () => {
    log(`Remote video size changed to ${remoteVideo.videoWidth}x${remoteVideo.videoHeight}`);
    // We'll use the first onsize callback as an indication that video has started
    // playing out.
    if (startTime) {
        const elapsedTime = window.performance.now() - startTime;
        log('Setup time: ' + elapsedTime.toFixed(3) + 'ms');
        startTime = null;
        // Have run these functions again in order to get the getStats() reports
        // with type candidatePair and populate the candidate id
        // elements.
        checkStats(pc1);
    }
};

let localStream;
let pc1;
let socket = WebSocket.prototype;
let stOnce = 0;
let reqID = 0;
let timerPing;
let startPing = 0;

const offerOptions = {
    offerToReceiveAudio: 1,
    offerToReceiveVideo: 1
};

var servers = {
    "iceServers": [
        {"urls": "stun:stun.l.google.com:19302"},
        {"urls": "stun:stun1.l.google.com:19302"},
        {"urls": "stun:stun1.voiceeclipse.net:3478"},
        {"urls": "stun:stun2.l.google.com:19302"},
        {"urls": "stun:stun3.l.google.com:19302"},
        {"urls": "stun:stun4.l.google.com:19302"},
        {"urls": "stun:stunserver.org:3478"},
        {
            'urls': 'turn:turn.bistri.com:80',
            'credential': 'homeo',
            'username': 'homeo'
        },
        {
            'urls': 'turn:192.158.29.39:3478?transport=udp',
            'credential': '28224511:1379330808',
            'username': 'JZEOEt2V3Qb0y27GRntt2u2PAYA='
        },
        {
            'urls': 'turn:turn.anyfirewall.com:443?transport=tcp',
            'credential': 'webrtc',
            'username': 'webrtc'
        }
    ]
};

function log(text, err) {
    console.log(text);
    var newSpan = document.createElement('span');
    newSpan.innerHTML = 'LOG: ' + text;
    if (err) {
        newSpan.classList.add("errorMsg");
    }
    var conteiner = document.getElementById('log');
    conteiner.prepend(document.createElement('br'));
    conteiner.prepend(newSpan);
}

function Ping() {
    log('Send ping');
    var req = new service_pb.Request().setPing(new service_pb.Request.Methods.Ping());
    startPing = new Date();
    socket.send(req.serializeBinary());
}

async function startCapture(resolve) {

    log('Requesting local stream');
    changeStart(false);

    var hasAudio = false;
    var hasVideo = false;
    await navigator.mediaDevices.enumerateDevices()
        .then((devices) => {
            devices.forEach((device) => {
                if (device.kind.toString() === "audioinput") {
                    hasAudio = {
                        echoCancellation: true
                    };
                }
                if (device.kind.toString() === "videoinput") {
                    hasVideo = true;
                }
            });

        })
        .catch(function (err) {
            log(err.name + ": " + err.message, true);
        });


    var constraints = {audio: hasAudio, video: hasVideo};
    await navigator.mediaDevices.getUserMedia(constraints)
        .then(gotStream)
        .catch(e => {
                alert(`getUserMedia() error: ${e.name} : ${e.message}`);
                log(`[error] ${e.name} : ${e.message}`, true);
            }
        );

    resolve();
}

function gotStream(stream) {
    log('Received local stream');

    if (stream.getVideoTracks().length == 0) {
        log('не удалось получить доступ к видео', true);
    } else {
        log(`Using video device: ${stream.getVideoTracks().label}`);
    }

    if (stream.getAudioTracks().length == 0) {
        log('не удалось получить доступ к аудио', true);
    } else {
        log(`Using audio device: ${stream.getAudioTracks()[0].label}`);
    }

    localVideo.srcObject = stream;
    localStream = stream;
}

// Simulate an ice restart.
function restart() {
    restartButton.disabled = true;
    offerOptions.iceRestart = true;
    log('pc1 createOffer restart');
    pc1.createOffer(offerOptions).then(onCreateOfferSuccess, onCreateSessionDescriptionError);
}

function initCall() {
    if (pc1) {
        return
    }

    log('Starting call');
    startTime = window.performance.now();

    pc1 = window.pc1 = new RTCPeerConnection(servers);
    log('Created local peer connection object pc1');
    pc1.onicecandidate = e => onIceCandidate(pc1, e);


    pc1.oniceconnectionstatechange = e => {
        onIceStateChange(pc1, e);
        if (pc1 && pc1.iceConnectionState === 'connected') {
            restartButton.disabled = false;
        }
    };

    pc1.ontrack = gotRemoteStream;

    localStream.getTracks().forEach(track => pc1.addTrack(track, localStream));
    log('Added local stream to pc1');
}


function call() {
    log(`[websocket] send init`);
    var roomID = document.getElementById('room').value;
    var req = new service_pb.Request().setInit(new service_pb.Request.Methods.Init().setToken(roomID));
    req.setId(initReqID);
    sendToServer(req);

    timerPing = setInterval(Ping, 5 * 1000);
}

function onCreateSessionDescriptionError(error) {
    log(`Failed to create session description: ${error.toString()}`, true);
}

function onCreateOfferSuccess(desc) {
    // log(`Offer from pc1\n${desc.sdp}`);
    log('pc1 setLocalDescription start');
    pc1.setLocalDescription(desc).then(() => onSetLocalSuccess(pc1), onSetSessionDescriptionError);

    sendUpdateSDP(desc, proto.v1.caller.v1.SessionDescription.SDP_Type.SDP_TYPE_OFFER);
}

function onSetLocalSuccess(pc) {
    log(`pc1 setLocalDescription complete`);
}

function onSetRemoteSuccess(pc) {
    log(`pc1 setRemoteDescription complete`);
}

function onSetSessionDescriptionError(error) {
    log(`Failed to set session description: ${error.toString()}`, true);
}

function gotRemoteStream(e) {
    if (remoteVideo.srcObject !== e.streams[0]) {
        remoteVideo.srcObject = e.streams[0];
        log('pc1 received remote stream');
    }
}

function onCreateAnswerSuccess(desc) {
    log(`Answer from pc1:\n${desc.sdp}`);
    log('pc1 setLocalDescription start');

    pc1.setLocalDescription(desc).then(() => onSetLocalSuccess(pc1), onSetSessionDescriptionError);

    sendUpdateSDP(desc, proto.v1.caller.v1.SessionDescription.SDP_Type.SDP_TYPE_ANSWER);
}

function onIceCandidate(pc, event) {
    sendUpdateICE(event.candidate);
    // log(`pc1 send ICE candidate:\n${event.candidate ? event.candidate.candidate : '(null)'}`);
}

function onAddIceCandidateSuccess(pc) {
    log(`pc1 addIceCandidate success`);
}

function onAddIceCandidateError(pc, error) {
    log(`pc1 failed to add ICE Candidate: ${error.toString()}`, true);
}

function onIceStateChange(pc, event) {
    if (pc) {
        log(`pc1 ICE state: ${pc.iceConnectionState}`);
        log('ICE state change event: ' + JSON.stringify(event), false);
        // TODO: get rid of this in favor of http://w3c.github.io/webrtc-pc/#widl-RTCIceTransport-onselectedcandidatepairchange
        if (pc.iceConnectionState === 'connected' ||
            pc.iceConnectionState === 'completed') {
            checkStats(pc);
        }
    }
}

function checkStats(pc) {
    pc.getStats(null).then(results => {
        // figure out the peer's ip
        let activeCandidatePair = null;
        let remoteCandidate = null;
        let localCandidate = null;
        // Search for the candidate pair, spec-way first.
        results.forEach(report => {
            if (report.type === 'transport') {
                activeCandidatePair = results.get(report.selectedCandidatePairId);
            }
        });
        // Fallback for Firefox.
        if (!activeCandidatePair) {
            results.forEach(report => {
                if (report.type === 'candidate-pair' && report.state === 'succeeded' && report.selected) {
                    activeCandidatePair = report;
                }
            });
        }
        if (activeCandidatePair.localCandidateId) {
            results.forEach(report => {
                if (report.type === 'local-candidate' && report.id === activeCandidatePair.localCandidateId) {
                    localCandidate = report;
                    document.getElementById('localCandidateId').textContent = localCandidate.id;
                }
            });
        }
        if (activeCandidatePair && activeCandidatePair.remoteCandidateId) {
            callButton.disabled = true;
            hangupButton.disabled = false;

            results.forEach(report => {
                if (report.type === 'remote-candidate' && report.id === activeCandidatePair.remoteCandidateId) {
                    remoteCandidate = report;
                    document.getElementById('remoteCandidateId').textContent = remoteCandidate.id;
                }
            });
        }
        log('remoteCandidate: ' + JSON.stringify(remoteCandidate));

        if (localCandidate && localCandidate.id) {
            document.getElementById('localCandidateId').textContent = localCandidate.id;
        }
        if (remoteCandidate && remoteCandidate.id) {
            document.getElementById('remoteCandidateId').textContent = remoteCandidate.id;
        }
    });
}

function hangup() {
    if (socket) {
        var req = new service_pb.Request().setHangUp(new service_pb.Request.Methods.CancelCall().setSessionId(callID));
        sendToServer(req);

        socket.close(1000, "see you, space cowboy");
    }
    endConnection();
    endCall();
}

function endConnection() {
    socket.close();

    stOnce = 0;
    reqID = 0;

    clearInterval(timerPing);

    changeStart(true);
    hangupButton.disabled = true;
    restartButton.disabled = true;
    callButton.disabled = true;
}

function endCall() {
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;

    log('Ending call');
    if (pc1) {
        pc1.close();
    }
    pc1 = null;
    callButton.disabled = true;
}


// --------------------------------------------------------------------
// -------------------------------------------- SOCKET
//---------------------------------------------------------------------
function start() {
    if (stOnce != 0) {
        return
    }
    stOnce = 1;

    var wss = "ws://";
    if (document.location.protocol === "https:") {
        wss = "wss://";
    }

    let sockAddr = document.getElementById('sockAddr').getAttribute("value");
    // socket = new WebSocket(wss + "10.13.248.16:3325", 'amoProto');
    socket = new WebSocket(wss + sockAddr, 'amoProto');

    socket.binaryType = 'arraybuffer';

    socket.onerror = function (e) {
        alert(`[websocket] error: ${e.name} : ${e.message} `, true);
    };

    socket.onopen = function (e) {
        log("[websocket] Соединение установлено");

        var pr = new Promise(startCapture);

        pr.then(function () {
            // log(`[websocket] send init`);
            // var roomID = document.getElementById('room').value;
            // var req = new service_pb.Request().setInit(new service_pb.Request.Methods.Init().setToken(roomID));
            // sendToServer(req);
            //
            // timerPing = setInterval(Ping, 5 * 1000);
            callButton.disabled = false;
        });
    };

    socket.onmessage = socketMessageHendler;

    socket.onclose = function (event) {
        if (event.wasClean) {
            log(`[websocket] Соединение закрыто, код=${event.code} причина=${event.reason}`, true);
        } else {
            log('[websocket] Соединение закрыто');
        }

        endConnection();
    };

    socket.onerror = function (e) {
        log(`[websocket] error: ${e.name} : ${e.message}`, true);
    };
}


function socketMessageHendler(event) {
    let bf = Buffer.from(new Uint8Array(event.data), 'binary');
    let msg = service_pb.Response.deserializeBinary(bf);

    if (msg.getPong()) {
        var endPing = new Date();
        log('Received pong: ' + ((endPing.getTime() - startPing.getTime()) / 1000) + 's');
        return
    }

    var tmp = msg.cloneMessage();
    log(` RSV <<: [websocket] Данные получены с сервера: ${JSON.stringify(tmp.toObject())}`);

    if (msg.getError()) {
        log("Received error:" + JSON.stringify(msg.getError().toObject()), true);
        return
    }

    // Ответ на Init()
    if (msg.getRtcInfo() && msg.getId() === initReqID) {
        if (msg.getRtcInfo().getSessionInfo()) {
            if (msg.getRtcInfo().getSessionInfo().getInfo()) {
                callID = msg.getRtcInfo().getSessionInfo().getInfo().getSessionId();

                var meta = msg.getRtcInfo().getSessionInfo().getInfo().getOpponentRtcState();
                if (meta) {
                    processRTCupdate(meta);

                if (!meta.getSdp()) {
                        initCall();


                        log('pc1 createOffer start');
                        pc1.createOffer(offerOptions).then(onCreateOfferSuccess, onCreateSessionDescriptionError);
                    }
                }
            }
        }

        return
    }

    if (msg.getCallEnded()) {
        log(`Звонок ${msg.getCallEnded().getSessionId()} завершен, причина: ${msg.getCallEnded().getCause().toString()}`);
        endConnection();
        endCall();
    }

    if (msg.getRtcUpdated()) {
        processRTCupdate(msg.getRtcUpdated().getRtcState());
    }
}

function processRTCupdate(state) {
    var rs = state.toObject();
    var data = null;
    if (rs.sdp) {
        data = JSON.parse(rs.sdp.sdp);
        log('получен sdp пакет');
        switch (rs.sdp.type) {
            case proto.v1.caller.v1.SessionDescription.SDP_Type.SDP_TYPE_OFFER:
                initCall();
                pc1.setRemoteDescription(data).then(() => onSetRemoteSuccess(pc1), onSetSessionDescriptionError);
                log('pc1 createAnswer start');
                pc1.createAnswer().then(onCreateAnswerSuccess, onCreateSessionDescriptionError);
                break;
            case proto.v1.caller.v1.SessionDescription.SDP_Type.SDP_TYPE_ANSWER:
                pc1.setRemoteDescription(data).then(() => onSetRemoteSuccess(pc1), onSetSessionDescriptionError);
                break;
        }
    }

    if (rs.ice && rs.ice.ice) {
        var data2 = JSON.parse(rs.ice.ice);
        log('получен ice пакет');
        pc1.addIceCandidate(data2).then(() => onAddIceCandidateSuccess(pc1), err => onAddIceCandidateError(pc1, err));
    }
}

/**
 * @param {service_pb.Request} req
 */
function sendToServer(req) {
    var tmp = req.cloneMessage();
    var data = req.serializeBinary();
    socket.send(data);
    log(' >> SND: Отправляем на сервер: ' + JSON.stringify(tmp.toObject()));
}

function sendUpdateICE(ice) {
    var request = new service_pb.Request();
    request.setId(reqID++);

    var rtsState = new service_pb.Request.Methods.RTCUpdate();
    rtsState.setSessionId(callID);
    var signaling = new service_pb.Signaling();
    var candidate = new service_pb.ICE_Candidat();

    var str = JSON.stringify(ice);

    candidate.setIce(str);

    signaling.setIce(candidate);
    rtsState.setRtcState(signaling);
    request.setUpdateRtcState(rtsState);

    log('Send ice to opponent');
    sendToServer(request);
}

function sendUpdateSDP(desc, type) {

    var request = new service_pb.Request();
    request.setId(reqID++);

    var rtsState = new service_pb.Request.Methods.RTCUpdate();
    rtsState.setSessionId(callID);
    var signaling = new service_pb.Signaling();
    var sdp = new service_pb.SessionDescription();

    var str = JSON.stringify(desc);

    sdp.setSdp(str);
    sdp.setType(type);

    signaling.setSdp(sdp);
    rtsState.setRtcState(signaling);
    request.setUpdateRtcState(rtsState);

    sendToServer(request);
    log('Send sdp to opponent');
}
