// source: layer1/messages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var layer1_users_pb = require('../layer1/users_pb.js');
goog.object.extend(proto, layer1_users_pb);
var layer1_rpa_v1_rpa_v1_request_pb = require('../layer1/rpa/v1/rpa_v1_request_pb.js');
goog.object.extend(proto, layer1_rpa_v1_rpa_v1_request_pb);
var layer1_notification_pb = require('../layer1/notification_pb.js');
goog.object.extend(proto, layer1_notification_pb);
goog.exportSymbol('proto.v1.Messages', null, global);
goog.exportSymbol('proto.v1.Messages.AffectedHistory', null, global);
goog.exportSymbol('proto.v1.Messages.Chat', null, global);
goog.exportSymbol('proto.v1.Messages.Chat.CRM', null, global);
goog.exportSymbol('proto.v1.Messages.Chat.CRM.CRMCardType', null, global);
goog.exportSymbol('proto.v1.Messages.Chat.ChatCase', null, global);
goog.exportSymbol('proto.v1.Messages.Chat.Empty', null, global);
goog.exportSymbol('proto.v1.Messages.Chat.Forbidden', null, global);
goog.exportSymbol('proto.v1.Messages.Chat.Foreign', null, global);
goog.exportSymbol('proto.v1.Messages.Chat.Group', null, global);
goog.exportSymbol('proto.v1.Messages.Chat.Lead', null, global);
goog.exportSymbol('proto.v1.Messages.Chat.Lead.Status', null, global);
goog.exportSymbol('proto.v1.Messages.Dialog', null, global);
goog.exportSymbol('proto.v1.Messages.Dialog.Flags', null, global);
goog.exportSymbol('proto.v1.Messages.Dialogs', null, global);
goog.exportSymbol('proto.v1.Messages.File', null, global);
goog.exportSymbol('proto.v1.Messages.Flags', null, global);
goog.exportSymbol('proto.v1.Messages.InputChat', null, global);
goog.exportSymbol('proto.v1.Messages.InputChat.CRM', null, global);
goog.exportSymbol('proto.v1.Messages.InputChat.ChatCase', null, global);
goog.exportSymbol('proto.v1.Messages.InputChat.Foreign', null, global);
goog.exportSymbol('proto.v1.Messages.InputChat.Group', null, global);
goog.exportSymbol('proto.v1.Messages.InputChat.Lead', null, global);
goog.exportSymbol('proto.v1.Messages.InputChat.Request', null, global);
goog.exportSymbol('proto.v1.Messages.InputMember', null, global);
goog.exportSymbol('proto.v1.Messages.InputMember.All', null, global);
goog.exportSymbol('proto.v1.Messages.InputMember.Client', null, global);
goog.exportSymbol('proto.v1.Messages.InputMember.Group', null, global);
goog.exportSymbol('proto.v1.Messages.InputMember.Robot', null, global);
goog.exportSymbol('proto.v1.Messages.InputMember.Self', null, global);
goog.exportSymbol('proto.v1.Messages.InputMember.UnionCase', null, global);
goog.exportSymbol('proto.v1.Messages.InputMember.User', null, global);
goog.exportSymbol('proto.v1.Messages.Message', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageCase', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageEmpty', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageRegular', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageRegular.Entity', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageRegular.MediaCase', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageRegular.MediaDocument', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageRegular.MediaPhoto', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.ThumbType', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageRegular.MediaVoice', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageService', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageService.ActionCallEnd', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageService.ActionCallEnd.Cause', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageService.ActionCase', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageService.ActionChatAddParticipant', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageService.ActionChatAddUser', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageService.ActionChatCreate', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageService.ActionChatDeleteUser', null, global);
goog.exportSymbol('proto.v1.Messages.Message.MessageService.ActionChatNameChanged', null, global);
goog.exportSymbol('proto.v1.Messages.MessageReference', null, global);
goog.exportSymbol('proto.v1.Messages.MessageSent', null, global);
goog.exportSymbol('proto.v1.Messages.MessageSentComplex', null, global);
goog.exportSymbol('proto.v1.Messages.MessagesSlice', null, global);
goog.exportSymbol('proto.v1.Messages.MessagesSlice.SearchState', null, global);
goog.exportSymbol('proto.v1.Messages.Peer', null, global);
goog.exportSymbol('proto.v1.Messages.Peer.PearCase', null, global);
goog.exportSymbol('proto.v1.Messages.Peer.PearChat', null, global);
goog.exportSymbol('proto.v1.Messages.Peer.PearUser', null, global);
goog.exportSymbol('proto.v1.Messages.Peer.PeerCRMChat', null, global);
goog.exportSymbol('proto.v1.Messages.Peer.PeerClient', null, global);
goog.exportSymbol('proto.v1.Messages.Peer.PeerLead', null, global);
goog.exportSymbol('proto.v1.Messages.Peer.PeerRequest', null, global);
goog.exportSymbol('proto.v1.Messages.PinnedDialogs', null, global);
goog.exportSymbol('proto.v1.Messages.PinnedDialogsOrder', null, global);
goog.exportSymbol('proto.v1.Messages.PinnedDialogsOrder.PeerOrder', null, global);
goog.exportSymbol('proto.v1.Messages.Push', null, global);
goog.exportSymbol('proto.v1.Messages.ReplyMarkup', null, global);
goog.exportSymbol('proto.v1.Messages.ReplyMarkup.MarkupCase', null, global);
goog.exportSymbol('proto.v1.Messages.ReplyMarkupForm', null, global);
goog.exportSymbol('proto.v1.Messages.ReplyMarkupInlineKeyboard', null, global);
goog.exportSymbol('proto.v1.Messages.ReplyMarkupInlineKeyboardButton', null, global);
goog.exportSymbol('proto.v1.Messages.SearchQuery', null, global);
goog.exportSymbol('proto.v1.Messages.SearchQuery.MessageFilter', null, global);
goog.exportSymbol('proto.v1.Messages.SendMedia', null, global);
goog.exportSymbol('proto.v1.Messages.SendMedia.InputFile', null, global);
goog.exportSymbol('proto.v1.Messages.SendMedia.MediaCase', null, global);
goog.exportSymbol('proto.v1.Messages.SendMedia.UploadedDocument', null, global);
goog.exportSymbol('proto.v1.Messages.SendMedia.UploadedPhoto', null, global);
goog.exportSymbol('proto.v1.Messages.SendMedia.UploadedVoice', null, global);
goog.exportSymbol('proto.v1.Messages.StatedMessage', null, global);
goog.exportSymbol('proto.v1.Messages.Transcription', null, global);
goog.exportSymbol('proto.v1.Messages.UserAction', null, global);
goog.exportSymbol('proto.v1.Messages.UserAction.ActionCase', null, global);
goog.exportSymbol('proto.v1.Messages.UserActionRecordingVoice', null, global);
goog.exportSymbol('proto.v1.Messages.UserActionTyping', null, global);
goog.exportSymbol('proto.v1.Messages.addChatUser', null, global);
goog.exportSymbol('proto.v1.Messages.chatFull', null, global);
goog.exportSymbol('proto.v1.Messages.cleanHistory', null, global);
goog.exportSymbol('proto.v1.Messages.createChat', null, global);
goog.exportSymbol('proto.v1.Messages.deleteChat', null, global);
goog.exportSymbol('proto.v1.Messages.deleteChatUser', null, global);
goog.exportSymbol('proto.v1.Messages.getChatFull', null, global);
goog.exportSymbol('proto.v1.Messages.getConversations', null, global);
goog.exportSymbol('proto.v1.Messages.getConversations.Flags', null, global);
goog.exportSymbol('proto.v1.Messages.getConversations.Type', null, global);
goog.exportSymbol('proto.v1.Messages.getDialogs', null, global);
goog.exportSymbol('proto.v1.Messages.getHistory', null, global);
goog.exportSymbol('proto.v1.Messages.readHistory', null, global);
goog.exportSymbol('proto.v1.Messages.renameChat', null, global);
goog.exportSymbol('proto.v1.Messages.sendMessage', null, global);
goog.exportSymbol('proto.v1.Messages.transcript', null, global);
goog.exportSymbol('proto.v1.Messages.updateDialogNotifySettings', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.displayName = 'proto.v1.Messages';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.getDialogs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.getDialogs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.getDialogs.displayName = 'proto.v1.Messages.getDialogs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.getConversations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.getConversations.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.getConversations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.getConversations.displayName = 'proto.v1.Messages.getConversations';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.getHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.getHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.getHistory.displayName = 'proto.v1.Messages.getHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.readHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.readHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.readHistory.displayName = 'proto.v1.Messages.readHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.cleanHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.cleanHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.cleanHistory.displayName = 'proto.v1.Messages.cleanHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.AffectedHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.AffectedHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.AffectedHistory.displayName = 'proto.v1.Messages.AffectedHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.createChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.createChat.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.createChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.createChat.displayName = 'proto.v1.Messages.createChat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.deleteChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.deleteChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.deleteChat.displayName = 'proto.v1.Messages.deleteChat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.renameChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.renameChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.renameChat.displayName = 'proto.v1.Messages.renameChat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.addChatUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.addChatUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.addChatUser.displayName = 'proto.v1.Messages.addChatUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.deleteChatUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.deleteChatUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.deleteChatUser.displayName = 'proto.v1.Messages.deleteChatUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.Messages.InputMember.oneofGroups_);
};
goog.inherits(proto.v1.Messages.InputMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputMember.displayName = 'proto.v1.Messages.InputMember';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputMember.Robot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputMember.Robot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputMember.Robot.displayName = 'proto.v1.Messages.InputMember.Robot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputMember.Self = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputMember.Self, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputMember.Self.displayName = 'proto.v1.Messages.InputMember.Self';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputMember.All = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputMember.All, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputMember.All.displayName = 'proto.v1.Messages.InputMember.All';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputMember.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputMember.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputMember.Group.displayName = 'proto.v1.Messages.InputMember.Group';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputMember.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputMember.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputMember.User.displayName = 'proto.v1.Messages.InputMember.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputMember.Client = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputMember.Client, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputMember.Client.displayName = 'proto.v1.Messages.InputMember.Client';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.sendMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.sendMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.sendMessage.displayName = 'proto.v1.Messages.sendMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.SendMedia = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.Messages.SendMedia.oneofGroups_);
};
goog.inherits(proto.v1.Messages.SendMedia, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.SendMedia.displayName = 'proto.v1.Messages.SendMedia';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.SendMedia.UploadedPhoto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.SendMedia.UploadedPhoto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.SendMedia.UploadedPhoto.displayName = 'proto.v1.Messages.SendMedia.UploadedPhoto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.SendMedia.UploadedDocument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.SendMedia.UploadedDocument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.SendMedia.UploadedDocument.displayName = 'proto.v1.Messages.SendMedia.UploadedDocument';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.SendMedia.UploadedVoice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.SendMedia.UploadedVoice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.SendMedia.UploadedVoice.displayName = 'proto.v1.Messages.SendMedia.UploadedVoice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.SendMedia.InputFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.SendMedia.InputFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.SendMedia.InputFile.displayName = 'proto.v1.Messages.SendMedia.InputFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.getChatFull = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.getChatFull, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.getChatFull.displayName = 'proto.v1.Messages.getChatFull';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.chatFull = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.chatFull.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.chatFull, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.chatFull.displayName = 'proto.v1.Messages.chatFull';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.MessageSent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.MessageSent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.MessageSent.displayName = 'proto.v1.Messages.MessageSent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Dialogs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.Dialogs.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.Dialogs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Dialogs.displayName = 'proto.v1.Messages.Dialogs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Dialog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Dialog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Dialog.displayName = 'proto.v1.Messages.Dialog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.updateDialogNotifySettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.updateDialogNotifySettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.updateDialogNotifySettings.displayName = 'proto.v1.Messages.updateDialogNotifySettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.MessageReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.MessageReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.MessageReference.displayName = 'proto.v1.Messages.MessageReference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Peer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.Messages.Peer.oneofGroups_);
};
goog.inherits(proto.v1.Messages.Peer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Peer.displayName = 'proto.v1.Messages.Peer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Peer.PearUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Peer.PearUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Peer.PearUser.displayName = 'proto.v1.Messages.Peer.PearUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Peer.PeerClient = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Peer.PeerClient, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Peer.PeerClient.displayName = 'proto.v1.Messages.Peer.PeerClient';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Peer.PearChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Peer.PearChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Peer.PearChat.displayName = 'proto.v1.Messages.Peer.PearChat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Peer.PeerCRMChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Peer.PeerCRMChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Peer.PeerCRMChat.displayName = 'proto.v1.Messages.Peer.PeerCRMChat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Peer.PeerLead = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Peer.PeerLead, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Peer.PeerLead.displayName = 'proto.v1.Messages.Peer.PeerLead';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Peer.PeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Peer.PeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Peer.PeerRequest.displayName = 'proto.v1.Messages.Peer.PeerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.Messages.InputChat.oneofGroups_);
};
goog.inherits(proto.v1.Messages.InputChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputChat.displayName = 'proto.v1.Messages.InputChat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputChat.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputChat.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputChat.Group.displayName = 'proto.v1.Messages.InputChat.Group';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputChat.Foreign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputChat.Foreign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputChat.Foreign.displayName = 'proto.v1.Messages.InputChat.Foreign';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputChat.CRM = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputChat.CRM, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputChat.CRM.displayName = 'proto.v1.Messages.InputChat.CRM';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputChat.Lead = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputChat.Lead, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputChat.Lead.displayName = 'proto.v1.Messages.InputChat.Lead';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.InputChat.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.InputChat.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.InputChat.Request.displayName = 'proto.v1.Messages.InputChat.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Chat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.Messages.Chat.oneofGroups_);
};
goog.inherits(proto.v1.Messages.Chat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Chat.displayName = 'proto.v1.Messages.Chat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Chat.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Chat.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Chat.Group.displayName = 'proto.v1.Messages.Chat.Group';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Chat.Foreign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Chat.Foreign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Chat.Foreign.displayName = 'proto.v1.Messages.Chat.Foreign';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Chat.CRM = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Chat.CRM, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Chat.CRM.displayName = 'proto.v1.Messages.Chat.CRM';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Chat.Forbidden = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Chat.Forbidden, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Chat.Forbidden.displayName = 'proto.v1.Messages.Chat.Forbidden';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Chat.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Chat.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Chat.Empty.displayName = 'proto.v1.Messages.Chat.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Chat.Lead = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Chat.Lead, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Chat.Lead.displayName = 'proto.v1.Messages.Chat.Lead';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.MessagesSlice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.MessagesSlice.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.MessagesSlice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.MessagesSlice.displayName = 'proto.v1.Messages.MessagesSlice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.MessagesSlice.SearchState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.MessagesSlice.SearchState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.MessagesSlice.SearchState.displayName = 'proto.v1.Messages.MessagesSlice.SearchState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.Messages.Message.oneofGroups_);
};
goog.inherits(proto.v1.Messages.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.displayName = 'proto.v1.Messages.Message';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageService = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.Messages.Message.MessageService.oneofGroups_);
};
goog.inherits(proto.v1.Messages.Message.MessageService, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageService.displayName = 'proto.v1.Messages.Message.MessageService';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.Message.MessageService.ActionChatCreate.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.Message.MessageService.ActionChatCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageService.ActionChatCreate.displayName = 'proto.v1.Messages.Message.MessageService.ActionChatCreate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageService.ActionChatAddUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageService.ActionChatAddUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageService.ActionChatAddUser.displayName = 'proto.v1.Messages.Message.MessageService.ActionChatAddUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageService.ActionChatAddParticipant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.displayName = 'proto.v1.Messages.Message.MessageService.ActionChatAddParticipant';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.displayName = 'proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageService.ActionChatDeleteUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.displayName = 'proto.v1.Messages.Message.MessageService.ActionChatDeleteUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageService.ActionChatNameChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageService.ActionChatNameChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageService.ActionChatNameChanged.displayName = 'proto.v1.Messages.Message.MessageService.ActionChatNameChanged';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageService.ActionCallEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageService.ActionCallEnd.displayName = 'proto.v1.Messages.Message.MessageService.ActionCallEnd';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageEmpty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageEmpty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageEmpty.displayName = 'proto.v1.Messages.Message.MessageEmpty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageRegular = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.Message.MessageRegular.repeatedFields_, proto.v1.Messages.Message.MessageRegular.oneofGroups_);
};
goog.inherits(proto.v1.Messages.Message.MessageRegular, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageRegular.displayName = 'proto.v1.Messages.Message.MessageRegular';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.Message.MessageRegular.MediaPhoto.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.Message.MessageRegular.MediaPhoto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageRegular.MediaPhoto.displayName = 'proto.v1.Messages.Message.MessageRegular.MediaPhoto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.displayName = 'proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageRegular.MediaDocument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageRegular.MediaDocument.displayName = 'proto.v1.Messages.Message.MessageRegular.MediaDocument';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageRegular.MediaVoice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageRegular.MediaVoice.displayName = 'proto.v1.Messages.Message.MessageRegular.MediaVoice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Message.MessageRegular.Entity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Message.MessageRegular.Entity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Message.MessageRegular.Entity.displayName = 'proto.v1.Messages.Message.MessageRegular.Entity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.File.displayName = 'proto.v1.Messages.File';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.StatedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.StatedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.StatedMessage.displayName = 'proto.v1.Messages.StatedMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.MessageSentComplex = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.MessageSentComplex, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.MessageSentComplex.displayName = 'proto.v1.Messages.MessageSentComplex';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.SearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.SearchQuery.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.SearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.SearchQuery.displayName = 'proto.v1.Messages.SearchQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.UserAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.Messages.UserAction.oneofGroups_);
};
goog.inherits(proto.v1.Messages.UserAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.UserAction.displayName = 'proto.v1.Messages.UserAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.UserActionTyping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.UserActionTyping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.UserActionTyping.displayName = 'proto.v1.Messages.UserActionTyping';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.UserActionRecordingVoice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.UserActionRecordingVoice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.UserActionRecordingVoice.displayName = 'proto.v1.Messages.UserActionRecordingVoice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.PinnedDialogs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.PinnedDialogs.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.PinnedDialogs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.PinnedDialogs.displayName = 'proto.v1.Messages.PinnedDialogs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.PinnedDialogsOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.PinnedDialogsOrder.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.PinnedDialogsOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.PinnedDialogsOrder.displayName = 'proto.v1.Messages.PinnedDialogsOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.PinnedDialogsOrder.PeerOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.PinnedDialogsOrder.PeerOrder.displayName = 'proto.v1.Messages.PinnedDialogsOrder.PeerOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.transcript = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.transcript, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.transcript.displayName = 'proto.v1.Messages.transcript';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Transcription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Transcription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Transcription.displayName = 'proto.v1.Messages.Transcription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.Push = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.Push, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.Push.displayName = 'proto.v1.Messages.Push';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.ReplyMarkup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.Messages.ReplyMarkup.oneofGroups_);
};
goog.inherits(proto.v1.Messages.ReplyMarkup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.ReplyMarkup.displayName = 'proto.v1.Messages.ReplyMarkup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.Messages.ReplyMarkupInlineKeyboard.repeatedFields_, null);
};
goog.inherits(proto.v1.Messages.ReplyMarkupInlineKeyboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.ReplyMarkupInlineKeyboard.displayName = 'proto.v1.Messages.ReplyMarkupInlineKeyboard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.ReplyMarkupInlineKeyboardButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.ReplyMarkupInlineKeyboardButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.ReplyMarkupInlineKeyboardButton.displayName = 'proto.v1.Messages.ReplyMarkupInlineKeyboardButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.Messages.ReplyMarkupForm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.Messages.ReplyMarkupForm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.Messages.ReplyMarkupForm.displayName = 'proto.v1.Messages.ReplyMarkupForm';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages}
 */
proto.v1.Messages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages;
  return proto.v1.Messages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages}
 */
proto.v1.Messages.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.v1.Messages.Flags = {
  NONE: 0,
  UNREAD: 1,
  OUT: 2,
  RECEIVED: 4,
  DELIVERED: 8,
  READ: 16,
  DELETED: 32,
  EDITED: 64,
  FORWARDED: 128
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.getDialogs.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.getDialogs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.getDialogs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.getDialogs.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lt: jspb.Message.getFieldWithDefault(msg, 4, 0),
    offsetDate: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.getDialogs}
 */
proto.v1.Messages.getDialogs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.getDialogs;
  return proto.v1.Messages.getDialogs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.getDialogs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.getDialogs}
 */
proto.v1.Messages.getDialogs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGt(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffsetDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.getDialogs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.getDialogs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.getDialogs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.getDialogs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getGt();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLt();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getOffsetDate();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string max_id = 1;
 * @return {string}
 */
proto.v1.Messages.getDialogs.prototype.getMaxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.getDialogs} returns this
 */
proto.v1.Messages.getDialogs.prototype.setMaxId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.v1.Messages.getDialogs.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.getDialogs} returns this
 */
proto.v1.Messages.getDialogs.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 gt = 3;
 * @return {number}
 */
proto.v1.Messages.getDialogs.prototype.getGt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.getDialogs} returns this
 */
proto.v1.Messages.getDialogs.prototype.setGt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 lt = 4;
 * @return {number}
 */
proto.v1.Messages.getDialogs.prototype.getLt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.getDialogs} returns this
 */
proto.v1.Messages.getDialogs.prototype.setLt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 offset_date = 5;
 * @return {number}
 */
proto.v1.Messages.getDialogs.prototype.getOffsetDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.getDialogs} returns this
 */
proto.v1.Messages.getDialogs.prototype.setOffsetDate = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.getConversations.repeatedFields_ = [6,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.getConversations.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.getConversations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.getConversations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.getConversations.toObject = function(includeInstance, msg) {
  var f, obj = {
    flags: msg.getFlags_asB64(),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    offsetDate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    byPeer: (f = msg.getByPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    peersList: jspb.Message.toObjectList(msg.getPeersList(),
    proto.v1.Messages.Peer.toObject, includeInstance),
    tabId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    deletedAtList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.getConversations}
 */
proto.v1.Messages.getConversations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.getConversations;
  return proto.v1.Messages.getConversations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.getConversations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.getConversations}
 */
proto.v1.Messages.getConversations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFlags(value);
      break;
    case 2:
      var value = /** @type {!proto.v1.Messages.getConversations.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffsetDate(value);
      break;
    case 4:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setByPeer(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 6:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.addPeers(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabId(value);
      break;
    case 8:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setDeletedAtList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.getConversations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.getConversations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.getConversations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.getConversations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlags_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getOffsetDate();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getByPeer();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getPeersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getTabId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDeletedAtList();
  if (f.length > 0) {
    writer.writePackedUint64(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.v1.Messages.getConversations.Flags = {
  NONE: 0,
  BY_UPDATED_AT: 1,
  READ: 2,
  UNREAD: 4
};

/**
 * @enum {number}
 */
proto.v1.Messages.getConversations.Type = {
  GROUP: 0,
  FOREIGN: 1,
  USER: 2
};

/**
 * optional bytes flags = 1;
 * @return {!(string|Uint8Array)}
 */
proto.v1.Messages.getConversations.prototype.getFlags = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes flags = 1;
 * This is a type-conversion wrapper around `getFlags()`
 * @return {string}
 */
proto.v1.Messages.getConversations.prototype.getFlags_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFlags()));
};


/**
 * optional bytes flags = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFlags()`
 * @return {!Uint8Array}
 */
proto.v1.Messages.getConversations.prototype.getFlags_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFlags()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.v1.Messages.getConversations} returns this
 */
proto.v1.Messages.getConversations.prototype.setFlags = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.v1.Messages.getConversations.Type}
 */
proto.v1.Messages.getConversations.prototype.getType = function() {
  return /** @type {!proto.v1.Messages.getConversations.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.v1.Messages.getConversations.Type} value
 * @return {!proto.v1.Messages.getConversations} returns this
 */
proto.v1.Messages.getConversations.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint64 offset_date = 3;
 * @return {number}
 */
proto.v1.Messages.getConversations.prototype.getOffsetDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.getConversations} returns this
 */
proto.v1.Messages.getConversations.prototype.setOffsetDate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Peer by_peer = 4;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.getConversations.prototype.getByPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 4));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.getConversations} returns this
*/
proto.v1.Messages.getConversations.prototype.setByPeer = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.getConversations} returns this
 */
proto.v1.Messages.getConversations.prototype.clearByPeer = function() {
  return this.setByPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.getConversations.prototype.hasByPeer = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 limit = 5;
 * @return {number}
 */
proto.v1.Messages.getConversations.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.getConversations} returns this
 */
proto.v1.Messages.getConversations.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated Peer peers = 6;
 * @return {!Array<!proto.v1.Messages.Peer>}
 */
proto.v1.Messages.getConversations.prototype.getPeersList = function() {
  return /** @type{!Array<!proto.v1.Messages.Peer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.Peer, 6));
};


/**
 * @param {!Array<!proto.v1.Messages.Peer>} value
 * @return {!proto.v1.Messages.getConversations} returns this
*/
proto.v1.Messages.getConversations.prototype.setPeersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.v1.Messages.Peer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Peer}
 */
proto.v1.Messages.getConversations.prototype.addPeers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.v1.Messages.Peer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.getConversations} returns this
 */
proto.v1.Messages.getConversations.prototype.clearPeersList = function() {
  return this.setPeersList([]);
};


/**
 * optional string tab_id = 7;
 * @return {string}
 */
proto.v1.Messages.getConversations.prototype.getTabId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.getConversations} returns this
 */
proto.v1.Messages.getConversations.prototype.setTabId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated uint64 deleted_at = 8;
 * @return {!Array<number>}
 */
proto.v1.Messages.getConversations.prototype.getDeletedAtList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.v1.Messages.getConversations} returns this
 */
proto.v1.Messages.getConversations.prototype.setDeletedAtList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.getConversations} returns this
 */
proto.v1.Messages.getConversations.prototype.addDeletedAt = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.getConversations} returns this
 */
proto.v1.Messages.getConversations.prototype.clearDeletedAtList = function() {
  return this.setDeletedAtList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.getHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.getHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.getHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.getHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    gt: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lt: jspb.Message.getFieldWithDefault(msg, 3, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    gte: jspb.Message.getFieldWithDefault(msg, 5, ""),
    lte: jspb.Message.getFieldWithDefault(msg, 6, ""),
    offsetDate: jspb.Message.getFieldWithDefault(msg, 7, 0),
    messageId: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.getHistory}
 */
proto.v1.Messages.getHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.getHistory;
  return proto.v1.Messages.getHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.getHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.getHistory}
 */
proto.v1.Messages.getHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGt(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLt(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGte(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLte(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffsetDate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.getHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.getHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.getHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.getHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLt();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getGte();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLte();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOffsetDate();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.getHistory.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.getHistory} returns this
*/
proto.v1.Messages.getHistory.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.getHistory} returns this
 */
proto.v1.Messages.getHistory.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.getHistory.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string gt = 2;
 * @return {string}
 */
proto.v1.Messages.getHistory.prototype.getGt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.getHistory} returns this
 */
proto.v1.Messages.getHistory.prototype.setGt = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string lt = 3;
 * @return {string}
 */
proto.v1.Messages.getHistory.prototype.getLt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.getHistory} returns this
 */
proto.v1.Messages.getHistory.prototype.setLt = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.v1.Messages.getHistory.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.getHistory} returns this
 */
proto.v1.Messages.getHistory.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string gte = 5;
 * @return {string}
 */
proto.v1.Messages.getHistory.prototype.getGte = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.getHistory} returns this
 */
proto.v1.Messages.getHistory.prototype.setGte = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string lte = 6;
 * @return {string}
 */
proto.v1.Messages.getHistory.prototype.getLte = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.getHistory} returns this
 */
proto.v1.Messages.getHistory.prototype.setLte = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 offset_date = 7;
 * @return {number}
 */
proto.v1.Messages.getHistory.prototype.getOffsetDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.getHistory} returns this
 */
proto.v1.Messages.getHistory.prototype.setOffsetDate = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string message_id = 8;
 * @return {string}
 */
proto.v1.Messages.getHistory.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.getHistory} returns this
 */
proto.v1.Messages.getHistory.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.readHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.readHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.readHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.readHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    maxId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    markUnread: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.readHistory}
 */
proto.v1.Messages.readHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.readHistory;
  return proto.v1.Messages.readHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.readHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.readHistory}
 */
proto.v1.Messages.readHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMarkUnread(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.readHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.readHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.readHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.readHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getMaxId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarkUnread();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.readHistory.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.readHistory} returns this
*/
proto.v1.Messages.readHistory.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.readHistory} returns this
 */
proto.v1.Messages.readHistory.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.readHistory.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string max_id = 2;
 * @return {string}
 */
proto.v1.Messages.readHistory.prototype.getMaxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.readHistory} returns this
 */
proto.v1.Messages.readHistory.prototype.setMaxId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool mark_unread = 3;
 * @return {boolean}
 */
proto.v1.Messages.readHistory.prototype.getMarkUnread = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.Messages.readHistory} returns this
 */
proto.v1.Messages.readHistory.prototype.setMarkUnread = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.cleanHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.cleanHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.cleanHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.cleanHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.cleanHistory}
 */
proto.v1.Messages.cleanHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.cleanHistory;
  return proto.v1.Messages.cleanHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.cleanHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.cleanHistory}
 */
proto.v1.Messages.cleanHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.cleanHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.cleanHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.cleanHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.cleanHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.cleanHistory.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.cleanHistory} returns this
*/
proto.v1.Messages.cleanHistory.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.cleanHistory} returns this
 */
proto.v1.Messages.cleanHistory.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.cleanHistory.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.AffectedHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.AffectedHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.AffectedHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.AffectedHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    pts: jspb.Message.getFieldWithDefault(msg, 1, 0),
    unreadCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unreadTotal: jspb.Message.getFieldWithDefault(msg, 3, 0),
    unreadMuted: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mentions: jspb.Message.getFieldWithDefault(msg, 6, 0),
    mentionsTotal: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.AffectedHistory}
 */
proto.v1.Messages.AffectedHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.AffectedHistory;
  return proto.v1.Messages.AffectedHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.AffectedHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.AffectedHistory}
 */
proto.v1.Messages.AffectedHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPts(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnreadCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnreadTotal(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnreadMuted(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMentions(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMentionsTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.AffectedHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.AffectedHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.AffectedHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.AffectedHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPts();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUnreadCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUnreadTotal();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getUnreadMuted();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getMaxId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMentions();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMentionsTotal();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint64 pts = 1;
 * @return {number}
 */
proto.v1.Messages.AffectedHistory.prototype.getPts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.AffectedHistory} returns this
 */
proto.v1.Messages.AffectedHistory.prototype.setPts = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 unread_count = 2;
 * @return {number}
 */
proto.v1.Messages.AffectedHistory.prototype.getUnreadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.AffectedHistory} returns this
 */
proto.v1.Messages.AffectedHistory.prototype.setUnreadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 unread_total = 3;
 * @return {number}
 */
proto.v1.Messages.AffectedHistory.prototype.getUnreadTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.AffectedHistory} returns this
 */
proto.v1.Messages.AffectedHistory.prototype.setUnreadTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 unread_muted = 4;
 * @return {number}
 */
proto.v1.Messages.AffectedHistory.prototype.getUnreadMuted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.AffectedHistory} returns this
 */
proto.v1.Messages.AffectedHistory.prototype.setUnreadMuted = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string max_id = 5;
 * @return {string}
 */
proto.v1.Messages.AffectedHistory.prototype.getMaxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.AffectedHistory} returns this
 */
proto.v1.Messages.AffectedHistory.prototype.setMaxId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 mentions = 6;
 * @return {number}
 */
proto.v1.Messages.AffectedHistory.prototype.getMentions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.AffectedHistory} returns this
 */
proto.v1.Messages.AffectedHistory.prototype.setMentions = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 mentions_total = 7;
 * @return {number}
 */
proto.v1.Messages.AffectedHistory.prototype.getMentionsTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.AffectedHistory} returns this
 */
proto.v1.Messages.AffectedHistory.prototype.setMentionsTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.createChat.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.createChat.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.createChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.createChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.createChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.v1.Messages.InputMember.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.createChat}
 */
proto.v1.Messages.createChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.createChat;
  return proto.v1.Messages.createChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.createChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.createChat}
 */
proto.v1.Messages.createChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.createChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.createChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.createChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.createChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.v1.Messages.createChat.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.createChat} returns this
 */
proto.v1.Messages.createChat.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated InputMember users = 2;
 * @return {!Array<!proto.v1.Messages.InputMember>}
 */
proto.v1.Messages.createChat.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.v1.Messages.InputMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.InputMember, 2));
};


/**
 * @param {!Array<!proto.v1.Messages.InputMember>} value
 * @return {!proto.v1.Messages.createChat} returns this
*/
proto.v1.Messages.createChat.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.v1.Messages.InputMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.InputMember}
 */
proto.v1.Messages.createChat.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.v1.Messages.InputMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.createChat} returns this
 */
proto.v1.Messages.createChat.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.deleteChat.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.deleteChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.deleteChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.deleteChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    chat: (f = msg.getChat()) && proto.v1.Messages.InputChat.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.deleteChat}
 */
proto.v1.Messages.deleteChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.deleteChat;
  return proto.v1.Messages.deleteChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.deleteChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.deleteChat}
 */
proto.v1.Messages.deleteChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.InputChat;
      reader.readMessage(value,proto.v1.Messages.InputChat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.deleteChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.deleteChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.deleteChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.deleteChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.InputChat.serializeBinaryToWriter
    );
  }
};


/**
 * optional InputChat chat = 1;
 * @return {?proto.v1.Messages.InputChat}
 */
proto.v1.Messages.deleteChat.prototype.getChat = function() {
  return /** @type{?proto.v1.Messages.InputChat} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputChat, 1));
};


/**
 * @param {?proto.v1.Messages.InputChat|undefined} value
 * @return {!proto.v1.Messages.deleteChat} returns this
*/
proto.v1.Messages.deleteChat.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.deleteChat} returns this
 */
proto.v1.Messages.deleteChat.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.deleteChat.prototype.hasChat = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.renameChat.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.renameChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.renameChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.renameChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    chat: (f = msg.getChat()) && proto.v1.Messages.InputChat.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.renameChat}
 */
proto.v1.Messages.renameChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.renameChat;
  return proto.v1.Messages.renameChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.renameChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.renameChat}
 */
proto.v1.Messages.renameChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.InputChat;
      reader.readMessage(value,proto.v1.Messages.InputChat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.renameChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.renameChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.renameChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.renameChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.InputChat.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional InputChat chat = 1;
 * @return {?proto.v1.Messages.InputChat}
 */
proto.v1.Messages.renameChat.prototype.getChat = function() {
  return /** @type{?proto.v1.Messages.InputChat} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputChat, 1));
};


/**
 * @param {?proto.v1.Messages.InputChat|undefined} value
 * @return {!proto.v1.Messages.renameChat} returns this
*/
proto.v1.Messages.renameChat.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.renameChat} returns this
 */
proto.v1.Messages.renameChat.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.renameChat.prototype.hasChat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.v1.Messages.renameChat.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.renameChat} returns this
 */
proto.v1.Messages.renameChat.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.addChatUser.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.addChatUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.addChatUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.addChatUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    chat: (f = msg.getChat()) && proto.v1.Messages.InputChat.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.v1.Messages.InputMember.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.addChatUser}
 */
proto.v1.Messages.addChatUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.addChatUser;
  return proto.v1.Messages.addChatUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.addChatUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.addChatUser}
 */
proto.v1.Messages.addChatUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.InputChat;
      reader.readMessage(value,proto.v1.Messages.InputChat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    case 2:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.addChatUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.addChatUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.addChatUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.addChatUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.InputChat.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
};


/**
 * optional InputChat chat = 1;
 * @return {?proto.v1.Messages.InputChat}
 */
proto.v1.Messages.addChatUser.prototype.getChat = function() {
  return /** @type{?proto.v1.Messages.InputChat} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputChat, 1));
};


/**
 * @param {?proto.v1.Messages.InputChat|undefined} value
 * @return {!proto.v1.Messages.addChatUser} returns this
*/
proto.v1.Messages.addChatUser.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.addChatUser} returns this
 */
proto.v1.Messages.addChatUser.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.addChatUser.prototype.hasChat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InputMember user = 2;
 * @return {?proto.v1.Messages.InputMember}
 */
proto.v1.Messages.addChatUser.prototype.getUser = function() {
  return /** @type{?proto.v1.Messages.InputMember} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember, 2));
};


/**
 * @param {?proto.v1.Messages.InputMember|undefined} value
 * @return {!proto.v1.Messages.addChatUser} returns this
*/
proto.v1.Messages.addChatUser.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.addChatUser} returns this
 */
proto.v1.Messages.addChatUser.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.addChatUser.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.deleteChatUser.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.deleteChatUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.deleteChatUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.deleteChatUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    chat: (f = msg.getChat()) && proto.v1.Messages.InputChat.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.v1.Messages.InputMember.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.deleteChatUser}
 */
proto.v1.Messages.deleteChatUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.deleteChatUser;
  return proto.v1.Messages.deleteChatUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.deleteChatUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.deleteChatUser}
 */
proto.v1.Messages.deleteChatUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.InputChat;
      reader.readMessage(value,proto.v1.Messages.InputChat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    case 2:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.deleteChatUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.deleteChatUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.deleteChatUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.deleteChatUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.InputChat.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
};


/**
 * optional InputChat chat = 1;
 * @return {?proto.v1.Messages.InputChat}
 */
proto.v1.Messages.deleteChatUser.prototype.getChat = function() {
  return /** @type{?proto.v1.Messages.InputChat} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputChat, 1));
};


/**
 * @param {?proto.v1.Messages.InputChat|undefined} value
 * @return {!proto.v1.Messages.deleteChatUser} returns this
*/
proto.v1.Messages.deleteChatUser.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.deleteChatUser} returns this
 */
proto.v1.Messages.deleteChatUser.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.deleteChatUser.prototype.hasChat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InputMember user = 2;
 * @return {?proto.v1.Messages.InputMember}
 */
proto.v1.Messages.deleteChatUser.prototype.getUser = function() {
  return /** @type{?proto.v1.Messages.InputMember} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember, 2));
};


/**
 * @param {?proto.v1.Messages.InputMember|undefined} value
 * @return {!proto.v1.Messages.deleteChatUser} returns this
*/
proto.v1.Messages.deleteChatUser.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.deleteChatUser} returns this
 */
proto.v1.Messages.deleteChatUser.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.deleteChatUser.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.Messages.InputMember.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.v1.Messages.InputMember.UnionCase = {
  UNION_NOT_SET: 0,
  MEMBER_SELF: 1,
  MEMBER_USER: 2,
  MEMBER_ALL: 3,
  MEMBER_CLIENT: 4,
  MEMBER_ROBOT: 5,
  MEMBER_GROUP: 6
};

/**
 * @return {proto.v1.Messages.InputMember.UnionCase}
 */
proto.v1.Messages.InputMember.prototype.getUnionCase = function() {
  return /** @type {proto.v1.Messages.InputMember.UnionCase} */(jspb.Message.computeOneofCase(this, proto.v1.Messages.InputMember.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputMember.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberSelf: (f = msg.getMemberSelf()) && proto.v1.Messages.InputMember.Self.toObject(includeInstance, f),
    memberUser: (f = msg.getMemberUser()) && proto.v1.Messages.InputMember.User.toObject(includeInstance, f),
    memberAll: (f = msg.getMemberAll()) && proto.v1.Messages.InputMember.All.toObject(includeInstance, f),
    memberClient: (f = msg.getMemberClient()) && proto.v1.Messages.InputMember.Client.toObject(includeInstance, f),
    memberRobot: (f = msg.getMemberRobot()) && proto.v1.Messages.InputMember.Robot.toObject(includeInstance, f),
    memberGroup: (f = msg.getMemberGroup()) && proto.v1.Messages.InputMember.Group.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputMember}
 */
proto.v1.Messages.InputMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputMember;
  return proto.v1.Messages.InputMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputMember}
 */
proto.v1.Messages.InputMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.InputMember.Self;
      reader.readMessage(value,proto.v1.Messages.InputMember.Self.deserializeBinaryFromReader);
      msg.setMemberSelf(value);
      break;
    case 2:
      var value = new proto.v1.Messages.InputMember.User;
      reader.readMessage(value,proto.v1.Messages.InputMember.User.deserializeBinaryFromReader);
      msg.setMemberUser(value);
      break;
    case 3:
      var value = new proto.v1.Messages.InputMember.All;
      reader.readMessage(value,proto.v1.Messages.InputMember.All.deserializeBinaryFromReader);
      msg.setMemberAll(value);
      break;
    case 4:
      var value = new proto.v1.Messages.InputMember.Client;
      reader.readMessage(value,proto.v1.Messages.InputMember.Client.deserializeBinaryFromReader);
      msg.setMemberClient(value);
      break;
    case 5:
      var value = new proto.v1.Messages.InputMember.Robot;
      reader.readMessage(value,proto.v1.Messages.InputMember.Robot.deserializeBinaryFromReader);
      msg.setMemberRobot(value);
      break;
    case 6:
      var value = new proto.v1.Messages.InputMember.Group;
      reader.readMessage(value,proto.v1.Messages.InputMember.Group.deserializeBinaryFromReader);
      msg.setMemberGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberSelf();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.InputMember.Self.serializeBinaryToWriter
    );
  }
  f = message.getMemberUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.InputMember.User.serializeBinaryToWriter
    );
  }
  f = message.getMemberAll();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.Messages.InputMember.All.serializeBinaryToWriter
    );
  }
  f = message.getMemberClient();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.Messages.InputMember.Client.serializeBinaryToWriter
    );
  }
  f = message.getMemberRobot();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.v1.Messages.InputMember.Robot.serializeBinaryToWriter
    );
  }
  f = message.getMemberGroup();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.v1.Messages.InputMember.Group.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputMember.Robot.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputMember.Robot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputMember.Robot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.Robot.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputMember.Robot}
 */
proto.v1.Messages.InputMember.Robot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputMember.Robot;
  return proto.v1.Messages.InputMember.Robot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputMember.Robot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputMember.Robot}
 */
proto.v1.Messages.InputMember.Robot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputMember.Robot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputMember.Robot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputMember.Robot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.Robot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputMember.Self.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputMember.Self.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputMember.Self} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.Self.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputMember.Self}
 */
proto.v1.Messages.InputMember.Self.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputMember.Self;
  return proto.v1.Messages.InputMember.Self.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputMember.Self} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputMember.Self}
 */
proto.v1.Messages.InputMember.Self.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputMember.Self.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputMember.Self.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputMember.Self} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.Self.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputMember.All.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputMember.All.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputMember.All} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.All.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputMember.All}
 */
proto.v1.Messages.InputMember.All.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputMember.All;
  return proto.v1.Messages.InputMember.All.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputMember.All} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputMember.All}
 */
proto.v1.Messages.InputMember.All.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputMember.All.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputMember.All.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputMember.All} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.All.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputMember.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputMember.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputMember.Group} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputMember.Group}
 */
proto.v1.Messages.InputMember.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputMember.Group;
  return proto.v1.Messages.InputMember.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputMember.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputMember.Group}
 */
proto.v1.Messages.InputMember.Group.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputMember.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputMember.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputMember.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.Group.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string group_id = 1;
 * @return {string}
 */
proto.v1.Messages.InputMember.Group.prototype.getGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.InputMember.Group} returns this
 */
proto.v1.Messages.InputMember.Group.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputMember.User.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputMember.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputMember.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputMember.User}
 */
proto.v1.Messages.InputMember.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputMember.User;
  return proto.v1.Messages.InputMember.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputMember.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputMember.User}
 */
proto.v1.Messages.InputMember.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputMember.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputMember.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputMember.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.v1.Messages.InputMember.User.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.InputMember.User} returns this
 */
proto.v1.Messages.InputMember.User.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputMember.Client.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputMember.Client.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputMember.Client} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.Client.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputMember.Client}
 */
proto.v1.Messages.InputMember.Client.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputMember.Client;
  return proto.v1.Messages.InputMember.Client.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputMember.Client} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputMember.Client}
 */
proto.v1.Messages.InputMember.Client.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputMember.Client.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputMember.Client.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputMember.Client} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputMember.Client.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.v1.Messages.InputMember.Client.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.InputMember.Client} returns this
 */
proto.v1.Messages.InputMember.Client.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Self member_self = 1;
 * @return {?proto.v1.Messages.InputMember.Self}
 */
proto.v1.Messages.InputMember.prototype.getMemberSelf = function() {
  return /** @type{?proto.v1.Messages.InputMember.Self} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember.Self, 1));
};


/**
 * @param {?proto.v1.Messages.InputMember.Self|undefined} value
 * @return {!proto.v1.Messages.InputMember} returns this
*/
proto.v1.Messages.InputMember.prototype.setMemberSelf = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.v1.Messages.InputMember.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputMember} returns this
 */
proto.v1.Messages.InputMember.prototype.clearMemberSelf = function() {
  return this.setMemberSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputMember.prototype.hasMemberSelf = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User member_user = 2;
 * @return {?proto.v1.Messages.InputMember.User}
 */
proto.v1.Messages.InputMember.prototype.getMemberUser = function() {
  return /** @type{?proto.v1.Messages.InputMember.User} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember.User, 2));
};


/**
 * @param {?proto.v1.Messages.InputMember.User|undefined} value
 * @return {!proto.v1.Messages.InputMember} returns this
*/
proto.v1.Messages.InputMember.prototype.setMemberUser = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.v1.Messages.InputMember.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputMember} returns this
 */
proto.v1.Messages.InputMember.prototype.clearMemberUser = function() {
  return this.setMemberUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputMember.prototype.hasMemberUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional All member_all = 3;
 * @return {?proto.v1.Messages.InputMember.All}
 */
proto.v1.Messages.InputMember.prototype.getMemberAll = function() {
  return /** @type{?proto.v1.Messages.InputMember.All} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember.All, 3));
};


/**
 * @param {?proto.v1.Messages.InputMember.All|undefined} value
 * @return {!proto.v1.Messages.InputMember} returns this
*/
proto.v1.Messages.InputMember.prototype.setMemberAll = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.v1.Messages.InputMember.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputMember} returns this
 */
proto.v1.Messages.InputMember.prototype.clearMemberAll = function() {
  return this.setMemberAll(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputMember.prototype.hasMemberAll = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Client member_client = 4;
 * @return {?proto.v1.Messages.InputMember.Client}
 */
proto.v1.Messages.InputMember.prototype.getMemberClient = function() {
  return /** @type{?proto.v1.Messages.InputMember.Client} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember.Client, 4));
};


/**
 * @param {?proto.v1.Messages.InputMember.Client|undefined} value
 * @return {!proto.v1.Messages.InputMember} returns this
*/
proto.v1.Messages.InputMember.prototype.setMemberClient = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.v1.Messages.InputMember.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputMember} returns this
 */
proto.v1.Messages.InputMember.prototype.clearMemberClient = function() {
  return this.setMemberClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputMember.prototype.hasMemberClient = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Robot member_robot = 5;
 * @return {?proto.v1.Messages.InputMember.Robot}
 */
proto.v1.Messages.InputMember.prototype.getMemberRobot = function() {
  return /** @type{?proto.v1.Messages.InputMember.Robot} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember.Robot, 5));
};


/**
 * @param {?proto.v1.Messages.InputMember.Robot|undefined} value
 * @return {!proto.v1.Messages.InputMember} returns this
*/
proto.v1.Messages.InputMember.prototype.setMemberRobot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.v1.Messages.InputMember.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputMember} returns this
 */
proto.v1.Messages.InputMember.prototype.clearMemberRobot = function() {
  return this.setMemberRobot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputMember.prototype.hasMemberRobot = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Group member_group = 6;
 * @return {?proto.v1.Messages.InputMember.Group}
 */
proto.v1.Messages.InputMember.prototype.getMemberGroup = function() {
  return /** @type{?proto.v1.Messages.InputMember.Group} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember.Group, 6));
};


/**
 * @param {?proto.v1.Messages.InputMember.Group|undefined} value
 * @return {!proto.v1.Messages.InputMember} returns this
*/
proto.v1.Messages.InputMember.prototype.setMemberGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.v1.Messages.InputMember.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputMember} returns this
 */
proto.v1.Messages.InputMember.prototype.clearMemberGroup = function() {
  return this.setMemberGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputMember.prototype.hasMemberGroup = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.sendMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.sendMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.sendMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.sendMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    to: (f = msg.getTo()) && proto.v1.Messages.InputMember.toObject(includeInstance, f),
    refersTo: (f = msg.getRefersTo()) && proto.v1.Messages.MessageReference.toObject(includeInstance, f),
    forward: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.sendMessage}
 */
proto.v1.Messages.sendMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.sendMessage;
  return proto.v1.Messages.sendMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.sendMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.sendMessage}
 */
proto.v1.Messages.sendMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 2:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 5:
      var value = new proto.v1.Messages.MessageReference;
      reader.readMessage(value,proto.v1.Messages.MessageReference.deserializeBinaryFromReader);
      msg.setRefersTo(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForward(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.sendMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.sendMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.sendMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.sendMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
  f = message.getRefersTo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.v1.Messages.MessageReference.serializeBinaryToWriter
    );
  }
  f = message.getForward();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.v1.Messages.sendMessage.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.sendMessage} returns this
 */
proto.v1.Messages.sendMessage.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Peer peer = 2;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.sendMessage.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 2));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.sendMessage} returns this
*/
proto.v1.Messages.sendMessage.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.sendMessage} returns this
 */
proto.v1.Messages.sendMessage.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.sendMessage.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.v1.Messages.sendMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.sendMessage} returns this
 */
proto.v1.Messages.sendMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional InputMember to = 4;
 * @return {?proto.v1.Messages.InputMember}
 */
proto.v1.Messages.sendMessage.prototype.getTo = function() {
  return /** @type{?proto.v1.Messages.InputMember} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember, 4));
};


/**
 * @param {?proto.v1.Messages.InputMember|undefined} value
 * @return {!proto.v1.Messages.sendMessage} returns this
*/
proto.v1.Messages.sendMessage.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.sendMessage} returns this
 */
proto.v1.Messages.sendMessage.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.sendMessage.prototype.hasTo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MessageReference refers_to = 5;
 * @return {?proto.v1.Messages.MessageReference}
 */
proto.v1.Messages.sendMessage.prototype.getRefersTo = function() {
  return /** @type{?proto.v1.Messages.MessageReference} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.MessageReference, 5));
};


/**
 * @param {?proto.v1.Messages.MessageReference|undefined} value
 * @return {!proto.v1.Messages.sendMessage} returns this
*/
proto.v1.Messages.sendMessage.prototype.setRefersTo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.sendMessage} returns this
 */
proto.v1.Messages.sendMessage.prototype.clearRefersTo = function() {
  return this.setRefersTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.sendMessage.prototype.hasRefersTo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool forward = 6;
 * @return {boolean}
 */
proto.v1.Messages.sendMessage.prototype.getForward = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.Messages.sendMessage} returns this
 */
proto.v1.Messages.sendMessage.prototype.setForward = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.Messages.SendMedia.oneofGroups_ = [[10,11,12]];

/**
 * @enum {number}
 */
proto.v1.Messages.SendMedia.MediaCase = {
  MEDIA_NOT_SET: 0,
  MEDIA_UPLOADED_PHOTO: 10,
  MEDIA_UPLOADED_DOCUMENT: 11,
  MEDIA_UPLOADED_VOICE: 12
};

/**
 * @return {proto.v1.Messages.SendMedia.MediaCase}
 */
proto.v1.Messages.SendMedia.prototype.getMediaCase = function() {
  return /** @type {proto.v1.Messages.SendMedia.MediaCase} */(jspb.Message.computeOneofCase(this, proto.v1.Messages.SendMedia.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.SendMedia.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.SendMedia.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.SendMedia} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SendMedia.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.v1.Messages.InputMember.toObject(includeInstance, f),
    refersTo: (f = msg.getRefersTo()) && proto.v1.Messages.MessageReference.toObject(includeInstance, f),
    mediaUploadedPhoto: (f = msg.getMediaUploadedPhoto()) && proto.v1.Messages.SendMedia.UploadedPhoto.toObject(includeInstance, f),
    mediaUploadedDocument: (f = msg.getMediaUploadedDocument()) && proto.v1.Messages.SendMedia.UploadedDocument.toObject(includeInstance, f),
    mediaUploadedVoice: (f = msg.getMediaUploadedVoice()) && proto.v1.Messages.SendMedia.UploadedVoice.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.SendMedia}
 */
proto.v1.Messages.SendMedia.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.SendMedia;
  return proto.v1.Messages.SendMedia.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.SendMedia} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.SendMedia}
 */
proto.v1.Messages.SendMedia.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 2:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 3:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 4:
      var value = new proto.v1.Messages.MessageReference;
      reader.readMessage(value,proto.v1.Messages.MessageReference.deserializeBinaryFromReader);
      msg.setRefersTo(value);
      break;
    case 10:
      var value = new proto.v1.Messages.SendMedia.UploadedPhoto;
      reader.readMessage(value,proto.v1.Messages.SendMedia.UploadedPhoto.deserializeBinaryFromReader);
      msg.setMediaUploadedPhoto(value);
      break;
    case 11:
      var value = new proto.v1.Messages.SendMedia.UploadedDocument;
      reader.readMessage(value,proto.v1.Messages.SendMedia.UploadedDocument.deserializeBinaryFromReader);
      msg.setMediaUploadedDocument(value);
      break;
    case 12:
      var value = new proto.v1.Messages.SendMedia.UploadedVoice;
      reader.readMessage(value,proto.v1.Messages.SendMedia.UploadedVoice.deserializeBinaryFromReader);
      msg.setMediaUploadedVoice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.SendMedia.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.SendMedia.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.SendMedia} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SendMedia.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
  f = message.getRefersTo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.Messages.MessageReference.serializeBinaryToWriter
    );
  }
  f = message.getMediaUploadedPhoto();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.v1.Messages.SendMedia.UploadedPhoto.serializeBinaryToWriter
    );
  }
  f = message.getMediaUploadedDocument();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.v1.Messages.SendMedia.UploadedDocument.serializeBinaryToWriter
    );
  }
  f = message.getMediaUploadedVoice();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.v1.Messages.SendMedia.UploadedVoice.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.SendMedia.UploadedPhoto.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.SendMedia.UploadedPhoto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.SendMedia.UploadedPhoto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SendMedia.UploadedPhoto.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.v1.Messages.SendMedia.InputFile.toObject(includeInstance, f),
    fileName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    caption: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.SendMedia.UploadedPhoto}
 */
proto.v1.Messages.SendMedia.UploadedPhoto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.SendMedia.UploadedPhoto;
  return proto.v1.Messages.SendMedia.UploadedPhoto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.SendMedia.UploadedPhoto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.SendMedia.UploadedPhoto}
 */
proto.v1.Messages.SendMedia.UploadedPhoto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.SendMedia.InputFile;
      reader.readMessage(value,proto.v1.Messages.SendMedia.InputFile.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.SendMedia.UploadedPhoto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.SendMedia.UploadedPhoto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.SendMedia.UploadedPhoto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SendMedia.UploadedPhoto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.SendMedia.InputFile.serializeBinaryToWriter
    );
  }
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCaption();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional InputFile file = 1;
 * @return {?proto.v1.Messages.SendMedia.InputFile}
 */
proto.v1.Messages.SendMedia.UploadedPhoto.prototype.getFile = function() {
  return /** @type{?proto.v1.Messages.SendMedia.InputFile} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.SendMedia.InputFile, 1));
};


/**
 * @param {?proto.v1.Messages.SendMedia.InputFile|undefined} value
 * @return {!proto.v1.Messages.SendMedia.UploadedPhoto} returns this
*/
proto.v1.Messages.SendMedia.UploadedPhoto.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.SendMedia.UploadedPhoto} returns this
 */
proto.v1.Messages.SendMedia.UploadedPhoto.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.SendMedia.UploadedPhoto.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string file_name = 2;
 * @return {string}
 */
proto.v1.Messages.SendMedia.UploadedPhoto.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.SendMedia.UploadedPhoto} returns this
 */
proto.v1.Messages.SendMedia.UploadedPhoto.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string caption = 3;
 * @return {string}
 */
proto.v1.Messages.SendMedia.UploadedPhoto.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.SendMedia.UploadedPhoto} returns this
 */
proto.v1.Messages.SendMedia.UploadedPhoto.prototype.setCaption = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.SendMedia.UploadedDocument.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.SendMedia.UploadedDocument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.SendMedia.UploadedDocument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SendMedia.UploadedDocument.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.v1.Messages.SendMedia.InputFile.toObject(includeInstance, f),
    fileName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    caption: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.SendMedia.UploadedDocument}
 */
proto.v1.Messages.SendMedia.UploadedDocument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.SendMedia.UploadedDocument;
  return proto.v1.Messages.SendMedia.UploadedDocument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.SendMedia.UploadedDocument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.SendMedia.UploadedDocument}
 */
proto.v1.Messages.SendMedia.UploadedDocument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.SendMedia.InputFile;
      reader.readMessage(value,proto.v1.Messages.SendMedia.InputFile.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.SendMedia.UploadedDocument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.SendMedia.UploadedDocument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.SendMedia.UploadedDocument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SendMedia.UploadedDocument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.SendMedia.InputFile.serializeBinaryToWriter
    );
  }
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCaption();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional InputFile file = 1;
 * @return {?proto.v1.Messages.SendMedia.InputFile}
 */
proto.v1.Messages.SendMedia.UploadedDocument.prototype.getFile = function() {
  return /** @type{?proto.v1.Messages.SendMedia.InputFile} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.SendMedia.InputFile, 1));
};


/**
 * @param {?proto.v1.Messages.SendMedia.InputFile|undefined} value
 * @return {!proto.v1.Messages.SendMedia.UploadedDocument} returns this
*/
proto.v1.Messages.SendMedia.UploadedDocument.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.SendMedia.UploadedDocument} returns this
 */
proto.v1.Messages.SendMedia.UploadedDocument.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.SendMedia.UploadedDocument.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string file_name = 2;
 * @return {string}
 */
proto.v1.Messages.SendMedia.UploadedDocument.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.SendMedia.UploadedDocument} returns this
 */
proto.v1.Messages.SendMedia.UploadedDocument.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string caption = 3;
 * @return {string}
 */
proto.v1.Messages.SendMedia.UploadedDocument.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.SendMedia.UploadedDocument} returns this
 */
proto.v1.Messages.SendMedia.UploadedDocument.prototype.setCaption = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.SendMedia.UploadedVoice.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.SendMedia.UploadedVoice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.SendMedia.UploadedVoice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SendMedia.UploadedVoice.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.v1.Messages.SendMedia.InputFile.toObject(includeInstance, f),
    duration: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.SendMedia.UploadedVoice}
 */
proto.v1.Messages.SendMedia.UploadedVoice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.SendMedia.UploadedVoice;
  return proto.v1.Messages.SendMedia.UploadedVoice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.SendMedia.UploadedVoice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.SendMedia.UploadedVoice}
 */
proto.v1.Messages.SendMedia.UploadedVoice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.SendMedia.InputFile;
      reader.readMessage(value,proto.v1.Messages.SendMedia.InputFile.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.SendMedia.UploadedVoice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.SendMedia.UploadedVoice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.SendMedia.UploadedVoice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SendMedia.UploadedVoice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.SendMedia.InputFile.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional InputFile file = 1;
 * @return {?proto.v1.Messages.SendMedia.InputFile}
 */
proto.v1.Messages.SendMedia.UploadedVoice.prototype.getFile = function() {
  return /** @type{?proto.v1.Messages.SendMedia.InputFile} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.SendMedia.InputFile, 1));
};


/**
 * @param {?proto.v1.Messages.SendMedia.InputFile|undefined} value
 * @return {!proto.v1.Messages.SendMedia.UploadedVoice} returns this
*/
proto.v1.Messages.SendMedia.UploadedVoice.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.SendMedia.UploadedVoice} returns this
 */
proto.v1.Messages.SendMedia.UploadedVoice.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.SendMedia.UploadedVoice.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 duration = 2;
 * @return {number}
 */
proto.v1.Messages.SendMedia.UploadedVoice.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.SendMedia.UploadedVoice} returns this
 */
proto.v1.Messages.SendMedia.UploadedVoice.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.SendMedia.InputFile.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.SendMedia.InputFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.SendMedia.InputFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SendMedia.InputFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    mimeType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    md5sum: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.SendMedia.InputFile}
 */
proto.v1.Messages.SendMedia.InputFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.SendMedia.InputFile;
  return proto.v1.Messages.SendMedia.InputFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.SendMedia.InputFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.SendMedia.InputFile}
 */
proto.v1.Messages.SendMedia.InputFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimeType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5sum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.SendMedia.InputFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.SendMedia.InputFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.SendMedia.InputFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SendMedia.InputFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMimeType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMd5sum();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 file_id = 1;
 * @return {number}
 */
proto.v1.Messages.SendMedia.InputFile.prototype.getFileId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.SendMedia.InputFile} returns this
 */
proto.v1.Messages.SendMedia.InputFile.prototype.setFileId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.v1.Messages.SendMedia.InputFile.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.SendMedia.InputFile} returns this
 */
proto.v1.Messages.SendMedia.InputFile.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string mime_type = 3;
 * @return {string}
 */
proto.v1.Messages.SendMedia.InputFile.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.SendMedia.InputFile} returns this
 */
proto.v1.Messages.SendMedia.InputFile.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string md5sum = 4;
 * @return {string}
 */
proto.v1.Messages.SendMedia.InputFile.prototype.getMd5sum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.SendMedia.InputFile} returns this
 */
proto.v1.Messages.SendMedia.InputFile.prototype.setMd5sum = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.v1.Messages.SendMedia.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.SendMedia} returns this
 */
proto.v1.Messages.SendMedia.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Peer peer = 2;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.SendMedia.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 2));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.SendMedia} returns this
*/
proto.v1.Messages.SendMedia.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.SendMedia} returns this
 */
proto.v1.Messages.SendMedia.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.SendMedia.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InputMember to = 3;
 * @return {?proto.v1.Messages.InputMember}
 */
proto.v1.Messages.SendMedia.prototype.getTo = function() {
  return /** @type{?proto.v1.Messages.InputMember} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember, 3));
};


/**
 * @param {?proto.v1.Messages.InputMember|undefined} value
 * @return {!proto.v1.Messages.SendMedia} returns this
*/
proto.v1.Messages.SendMedia.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.SendMedia} returns this
 */
proto.v1.Messages.SendMedia.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.SendMedia.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MessageReference refers_to = 4;
 * @return {?proto.v1.Messages.MessageReference}
 */
proto.v1.Messages.SendMedia.prototype.getRefersTo = function() {
  return /** @type{?proto.v1.Messages.MessageReference} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.MessageReference, 4));
};


/**
 * @param {?proto.v1.Messages.MessageReference|undefined} value
 * @return {!proto.v1.Messages.SendMedia} returns this
*/
proto.v1.Messages.SendMedia.prototype.setRefersTo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.SendMedia} returns this
 */
proto.v1.Messages.SendMedia.prototype.clearRefersTo = function() {
  return this.setRefersTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.SendMedia.prototype.hasRefersTo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UploadedPhoto media_uploaded_photo = 10;
 * @return {?proto.v1.Messages.SendMedia.UploadedPhoto}
 */
proto.v1.Messages.SendMedia.prototype.getMediaUploadedPhoto = function() {
  return /** @type{?proto.v1.Messages.SendMedia.UploadedPhoto} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.SendMedia.UploadedPhoto, 10));
};


/**
 * @param {?proto.v1.Messages.SendMedia.UploadedPhoto|undefined} value
 * @return {!proto.v1.Messages.SendMedia} returns this
*/
proto.v1.Messages.SendMedia.prototype.setMediaUploadedPhoto = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.v1.Messages.SendMedia.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.SendMedia} returns this
 */
proto.v1.Messages.SendMedia.prototype.clearMediaUploadedPhoto = function() {
  return this.setMediaUploadedPhoto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.SendMedia.prototype.hasMediaUploadedPhoto = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional UploadedDocument media_uploaded_document = 11;
 * @return {?proto.v1.Messages.SendMedia.UploadedDocument}
 */
proto.v1.Messages.SendMedia.prototype.getMediaUploadedDocument = function() {
  return /** @type{?proto.v1.Messages.SendMedia.UploadedDocument} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.SendMedia.UploadedDocument, 11));
};


/**
 * @param {?proto.v1.Messages.SendMedia.UploadedDocument|undefined} value
 * @return {!proto.v1.Messages.SendMedia} returns this
*/
proto.v1.Messages.SendMedia.prototype.setMediaUploadedDocument = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.v1.Messages.SendMedia.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.SendMedia} returns this
 */
proto.v1.Messages.SendMedia.prototype.clearMediaUploadedDocument = function() {
  return this.setMediaUploadedDocument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.SendMedia.prototype.hasMediaUploadedDocument = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional UploadedVoice media_uploaded_voice = 12;
 * @return {?proto.v1.Messages.SendMedia.UploadedVoice}
 */
proto.v1.Messages.SendMedia.prototype.getMediaUploadedVoice = function() {
  return /** @type{?proto.v1.Messages.SendMedia.UploadedVoice} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.SendMedia.UploadedVoice, 12));
};


/**
 * @param {?proto.v1.Messages.SendMedia.UploadedVoice|undefined} value
 * @return {!proto.v1.Messages.SendMedia} returns this
*/
proto.v1.Messages.SendMedia.prototype.setMediaUploadedVoice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.v1.Messages.SendMedia.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.SendMedia} returns this
 */
proto.v1.Messages.SendMedia.prototype.clearMediaUploadedVoice = function() {
  return this.setMediaUploadedVoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.SendMedia.prototype.hasMediaUploadedVoice = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.getChatFull.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.getChatFull.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.getChatFull} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.getChatFull.toObject = function(includeInstance, msg) {
  var f, obj = {
    chat: (f = msg.getChat()) && proto.v1.Messages.InputChat.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.getChatFull}
 */
proto.v1.Messages.getChatFull.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.getChatFull;
  return proto.v1.Messages.getChatFull.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.getChatFull} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.getChatFull}
 */
proto.v1.Messages.getChatFull.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.InputChat;
      reader.readMessage(value,proto.v1.Messages.InputChat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.getChatFull.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.getChatFull.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.getChatFull} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.getChatFull.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.InputChat.serializeBinaryToWriter
    );
  }
};


/**
 * optional InputChat chat = 1;
 * @return {?proto.v1.Messages.InputChat}
 */
proto.v1.Messages.getChatFull.prototype.getChat = function() {
  return /** @type{?proto.v1.Messages.InputChat} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputChat, 1));
};


/**
 * @param {?proto.v1.Messages.InputChat|undefined} value
 * @return {!proto.v1.Messages.getChatFull} returns this
*/
proto.v1.Messages.getChatFull.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.getChatFull} returns this
 */
proto.v1.Messages.getChatFull.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.getChatFull.prototype.hasChat = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.chatFull.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.chatFull.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.chatFull.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.chatFull} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.chatFull.toObject = function(includeInstance, msg) {
  var f, obj = {
    chat: (f = msg.getChat()) && proto.v1.Messages.Chat.toObject(includeInstance, f),
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    layer1_users_pb.Users.CommonUser.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.chatFull}
 */
proto.v1.Messages.chatFull.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.chatFull;
  return proto.v1.Messages.chatFull.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.chatFull} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.chatFull}
 */
proto.v1.Messages.chatFull.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Chat;
      reader.readMessage(value,proto.v1.Messages.Chat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    case 2:
      var value = new layer1_users_pb.Users.CommonUser;
      reader.readMessage(value,layer1_users_pb.Users.CommonUser.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.chatFull.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.chatFull.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.chatFull} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.chatFull.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Chat.serializeBinaryToWriter
    );
  }
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      layer1_users_pb.Users.CommonUser.serializeBinaryToWriter
    );
  }
};


/**
 * optional Chat chat = 1;
 * @return {?proto.v1.Messages.Chat}
 */
proto.v1.Messages.chatFull.prototype.getChat = function() {
  return /** @type{?proto.v1.Messages.Chat} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Chat, 1));
};


/**
 * @param {?proto.v1.Messages.Chat|undefined} value
 * @return {!proto.v1.Messages.chatFull} returns this
*/
proto.v1.Messages.chatFull.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.chatFull} returns this
 */
proto.v1.Messages.chatFull.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.chatFull.prototype.hasChat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Users.CommonUser users = 2;
 * @return {!Array<!proto.v1.Users.CommonUser>}
 */
proto.v1.Messages.chatFull.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.v1.Users.CommonUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, layer1_users_pb.Users.CommonUser, 2));
};


/**
 * @param {!Array<!proto.v1.Users.CommonUser>} value
 * @return {!proto.v1.Messages.chatFull} returns this
*/
proto.v1.Messages.chatFull.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.v1.Users.CommonUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Users.CommonUser}
 */
proto.v1.Messages.chatFull.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.v1.Users.CommonUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.chatFull} returns this
 */
proto.v1.Messages.chatFull.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.MessageSent.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.MessageSent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.MessageSent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.MessageSent.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    unacknowledged: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.MessageSent}
 */
proto.v1.Messages.MessageSent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.MessageSent;
  return proto.v1.Messages.MessageSent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.MessageSent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.MessageSent}
 */
proto.v1.Messages.MessageSent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnacknowledged(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.MessageSent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.MessageSent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.MessageSent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.MessageSent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnacknowledged();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.MessageSent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.MessageSent} returns this
 */
proto.v1.Messages.MessageSent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool unacknowledged = 2;
 * @return {boolean}
 */
proto.v1.Messages.MessageSent.prototype.getUnacknowledged = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.Messages.MessageSent} returns this
 */
proto.v1.Messages.MessageSent.prototype.setUnacknowledged = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.Dialogs.repeatedFields_ = [1,2,3,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Dialogs.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Dialogs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Dialogs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Dialogs.toObject = function(includeInstance, msg) {
  var f, obj = {
    dialogsList: jspb.Message.toObjectList(msg.getDialogsList(),
    proto.v1.Messages.Dialog.toObject, includeInstance),
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.v1.Messages.Message.toObject, includeInstance),
    chatsList: jspb.Message.toObjectList(msg.getChatsList(),
    proto.v1.Messages.Chat.toObject, includeInstance),
    users: (f = msg.getUsers()) && layer1_users_pb.Users.UsersContainer.toObject(includeInstance, f),
    participantsList: jspb.Message.toObjectList(msg.getParticipantsList(),
    layer1_users_pb.Users.CommonUser.toObject, includeInstance),
    unread: jspb.Message.getFieldWithDefault(msg, 6, 0),
    mentions: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Dialogs}
 */
proto.v1.Messages.Dialogs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Dialogs;
  return proto.v1.Messages.Dialogs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Dialogs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Dialogs}
 */
proto.v1.Messages.Dialogs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Dialog;
      reader.readMessage(value,proto.v1.Messages.Dialog.deserializeBinaryFromReader);
      msg.addDialogs(value);
      break;
    case 2:
      var value = new proto.v1.Messages.Message;
      reader.readMessage(value,proto.v1.Messages.Message.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    case 3:
      var value = new proto.v1.Messages.Chat;
      reader.readMessage(value,proto.v1.Messages.Chat.deserializeBinaryFromReader);
      msg.addChats(value);
      break;
    case 4:
      var value = new layer1_users_pb.Users.UsersContainer;
      reader.readMessage(value,layer1_users_pb.Users.UsersContainer.deserializeBinaryFromReader);
      msg.setUsers(value);
      break;
    case 5:
      var value = new layer1_users_pb.Users.CommonUser;
      reader.readMessage(value,layer1_users_pb.Users.CommonUser.deserializeBinaryFromReader);
      msg.addParticipants(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnread(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMentions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Dialogs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Dialogs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Dialogs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Dialogs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDialogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.v1.Messages.Dialog.serializeBinaryToWriter
    );
  }
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.v1.Messages.Message.serializeBinaryToWriter
    );
  }
  f = message.getChatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.v1.Messages.Chat.serializeBinaryToWriter
    );
  }
  f = message.getUsers();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      layer1_users_pb.Users.UsersContainer.serializeBinaryToWriter
    );
  }
  f = message.getParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      layer1_users_pb.Users.CommonUser.serializeBinaryToWriter
    );
  }
  f = message.getUnread();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMentions();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * repeated Dialog dialogs = 1;
 * @return {!Array<!proto.v1.Messages.Dialog>}
 */
proto.v1.Messages.Dialogs.prototype.getDialogsList = function() {
  return /** @type{!Array<!proto.v1.Messages.Dialog>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.Dialog, 1));
};


/**
 * @param {!Array<!proto.v1.Messages.Dialog>} value
 * @return {!proto.v1.Messages.Dialogs} returns this
*/
proto.v1.Messages.Dialogs.prototype.setDialogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.v1.Messages.Dialog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Dialog}
 */
proto.v1.Messages.Dialogs.prototype.addDialogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.v1.Messages.Dialog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.Dialogs} returns this
 */
proto.v1.Messages.Dialogs.prototype.clearDialogsList = function() {
  return this.setDialogsList([]);
};


/**
 * repeated Message messages = 2;
 * @return {!Array<!proto.v1.Messages.Message>}
 */
proto.v1.Messages.Dialogs.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.v1.Messages.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.Message, 2));
};


/**
 * @param {!Array<!proto.v1.Messages.Message>} value
 * @return {!proto.v1.Messages.Dialogs} returns this
*/
proto.v1.Messages.Dialogs.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.v1.Messages.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Message}
 */
proto.v1.Messages.Dialogs.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.v1.Messages.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.Dialogs} returns this
 */
proto.v1.Messages.Dialogs.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};


/**
 * repeated Chat chats = 3;
 * @return {!Array<!proto.v1.Messages.Chat>}
 */
proto.v1.Messages.Dialogs.prototype.getChatsList = function() {
  return /** @type{!Array<!proto.v1.Messages.Chat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.Chat, 3));
};


/**
 * @param {!Array<!proto.v1.Messages.Chat>} value
 * @return {!proto.v1.Messages.Dialogs} returns this
*/
proto.v1.Messages.Dialogs.prototype.setChatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.v1.Messages.Chat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Chat}
 */
proto.v1.Messages.Dialogs.prototype.addChats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.v1.Messages.Chat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.Dialogs} returns this
 */
proto.v1.Messages.Dialogs.prototype.clearChatsList = function() {
  return this.setChatsList([]);
};


/**
 * optional Users.UsersContainer users = 4;
 * @return {?proto.v1.Users.UsersContainer}
 */
proto.v1.Messages.Dialogs.prototype.getUsers = function() {
  return /** @type{?proto.v1.Users.UsersContainer} */ (
    jspb.Message.getWrapperField(this, layer1_users_pb.Users.UsersContainer, 4));
};


/**
 * @param {?proto.v1.Users.UsersContainer|undefined} value
 * @return {!proto.v1.Messages.Dialogs} returns this
*/
proto.v1.Messages.Dialogs.prototype.setUsers = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Dialogs} returns this
 */
proto.v1.Messages.Dialogs.prototype.clearUsers = function() {
  return this.setUsers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Dialogs.prototype.hasUsers = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Users.CommonUser participants = 5;
 * @return {!Array<!proto.v1.Users.CommonUser>}
 */
proto.v1.Messages.Dialogs.prototype.getParticipantsList = function() {
  return /** @type{!Array<!proto.v1.Users.CommonUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, layer1_users_pb.Users.CommonUser, 5));
};


/**
 * @param {!Array<!proto.v1.Users.CommonUser>} value
 * @return {!proto.v1.Messages.Dialogs} returns this
*/
proto.v1.Messages.Dialogs.prototype.setParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.v1.Users.CommonUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Users.CommonUser}
 */
proto.v1.Messages.Dialogs.prototype.addParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.v1.Users.CommonUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.Dialogs} returns this
 */
proto.v1.Messages.Dialogs.prototype.clearParticipantsList = function() {
  return this.setParticipantsList([]);
};


/**
 * optional uint32 unread = 6;
 * @return {number}
 */
proto.v1.Messages.Dialogs.prototype.getUnread = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Dialogs} returns this
 */
proto.v1.Messages.Dialogs.prototype.setUnread = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 mentions = 7;
 * @return {number}
 */
proto.v1.Messages.Dialogs.prototype.getMentions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Dialogs} returns this
 */
proto.v1.Messages.Dialogs.prototype.setMentions = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Dialog.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Dialog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Dialog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Dialog.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    topMessage: jspb.Message.getFieldWithDefault(msg, 2, ""),
    unread: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastMessageDate: jspb.Message.getFieldWithDefault(msg, 4, 0),
    readInboxMaxId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 6, 0),
    notificationSettings: (f = msg.getNotificationSettings()) && layer1_notification_pb.Notification.Settings.toObject(includeInstance, f),
    unreadMuted: jspb.Message.getFieldWithDefault(msg, 8, 0),
    flag: jspb.Message.getFieldWithDefault(msg, 9, 0),
    pinOrder: jspb.Message.getFieldWithDefault(msg, 10, 0),
    tabId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    lastDeletedMessage: jspb.Message.getFieldWithDefault(msg, 12, ""),
    mentions: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Dialog}
 */
proto.v1.Messages.Dialog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Dialog;
  return proto.v1.Messages.Dialog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Dialog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Dialog}
 */
proto.v1.Messages.Dialog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnread(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastMessageDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReadInboxMaxId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedAt(value);
      break;
    case 7:
      var value = new layer1_notification_pb.Notification.Settings;
      reader.readMessage(value,layer1_notification_pb.Notification.Settings.deserializeBinaryFromReader);
      msg.setNotificationSettings(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnreadMuted(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlag(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPinOrder(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastDeletedMessage(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMentions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Dialog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Dialog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Dialog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Dialog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getTopMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUnread();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getLastMessageDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getReadInboxMaxId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getNotificationSettings();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      layer1_notification_pb.Notification.Settings.serializeBinaryToWriter
    );
  }
  f = message.getUnreadMuted();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getFlag();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getPinOrder();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getTabId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLastDeletedMessage();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMentions();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.v1.Messages.Dialog.Flags = {
  NONE: 0,
  PINNED: 1
};

/**
 * optional Peer peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.Dialog.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.Dialog} returns this
*/
proto.v1.Messages.Dialog.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Dialog.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string top_message = 2;
 * @return {string}
 */
proto.v1.Messages.Dialog.prototype.getTopMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setTopMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 unread = 3;
 * @return {number}
 */
proto.v1.Messages.Dialog.prototype.getUnread = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setUnread = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 last_message_date = 4;
 * @return {number}
 */
proto.v1.Messages.Dialog.prototype.getLastMessageDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setLastMessageDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string read_inbox_max_id = 5;
 * @return {string}
 */
proto.v1.Messages.Dialog.prototype.getReadInboxMaxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setReadInboxMaxId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 updated_at = 6;
 * @return {number}
 */
proto.v1.Messages.Dialog.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Notification.Settings notification_settings = 7;
 * @return {?proto.v1.Notification.Settings}
 */
proto.v1.Messages.Dialog.prototype.getNotificationSettings = function() {
  return /** @type{?proto.v1.Notification.Settings} */ (
    jspb.Message.getWrapperField(this, layer1_notification_pb.Notification.Settings, 7));
};


/**
 * @param {?proto.v1.Notification.Settings|undefined} value
 * @return {!proto.v1.Messages.Dialog} returns this
*/
proto.v1.Messages.Dialog.prototype.setNotificationSettings = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.clearNotificationSettings = function() {
  return this.setNotificationSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Dialog.prototype.hasNotificationSettings = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 unread_muted = 8;
 * @return {number}
 */
proto.v1.Messages.Dialog.prototype.getUnreadMuted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setUnreadMuted = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 flag = 9;
 * @return {number}
 */
proto.v1.Messages.Dialog.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 pin_order = 10;
 * @return {number}
 */
proto.v1.Messages.Dialog.prototype.getPinOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setPinOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string tab_id = 11;
 * @return {string}
 */
proto.v1.Messages.Dialog.prototype.getTabId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setTabId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string last_deleted_message = 12;
 * @return {string}
 */
proto.v1.Messages.Dialog.prototype.getLastDeletedMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setLastDeletedMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional uint32 mentions = 13;
 * @return {number}
 */
proto.v1.Messages.Dialog.prototype.getMentions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Dialog} returns this
 */
proto.v1.Messages.Dialog.prototype.setMentions = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.updateDialogNotifySettings.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.updateDialogNotifySettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.updateDialogNotifySettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.updateDialogNotifySettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    settings: (f = msg.getSettings()) && layer1_notification_pb.Notification.Settings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.updateDialogNotifySettings}
 */
proto.v1.Messages.updateDialogNotifySettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.updateDialogNotifySettings;
  return proto.v1.Messages.updateDialogNotifySettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.updateDialogNotifySettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.updateDialogNotifySettings}
 */
proto.v1.Messages.updateDialogNotifySettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 2:
      var value = new layer1_notification_pb.Notification.Settings;
      reader.readMessage(value,layer1_notification_pb.Notification.Settings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.updateDialogNotifySettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.updateDialogNotifySettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.updateDialogNotifySettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.updateDialogNotifySettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      layer1_notification_pb.Notification.Settings.serializeBinaryToWriter
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.updateDialogNotifySettings.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.updateDialogNotifySettings} returns this
*/
proto.v1.Messages.updateDialogNotifySettings.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.updateDialogNotifySettings} returns this
 */
proto.v1.Messages.updateDialogNotifySettings.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.updateDialogNotifySettings.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Notification.Settings settings = 2;
 * @return {?proto.v1.Notification.Settings}
 */
proto.v1.Messages.updateDialogNotifySettings.prototype.getSettings = function() {
  return /** @type{?proto.v1.Notification.Settings} */ (
    jspb.Message.getWrapperField(this, layer1_notification_pb.Notification.Settings, 2));
};


/**
 * @param {?proto.v1.Notification.Settings|undefined} value
 * @return {!proto.v1.Messages.updateDialogNotifySettings} returns this
*/
proto.v1.Messages.updateDialogNotifySettings.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.updateDialogNotifySettings} returns this
 */
proto.v1.Messages.updateDialogNotifySettings.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.updateDialogNotifySettings.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.MessageReference.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.MessageReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.MessageReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.MessageReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagePeer: (f = msg.getMessagePeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    messageId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.MessageReference}
 */
proto.v1.Messages.MessageReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.MessageReference;
  return proto.v1.Messages.MessageReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.MessageReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.MessageReference}
 */
proto.v1.Messages.MessageReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setMessagePeer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.MessageReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.MessageReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.MessageReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.MessageReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagePeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Peer message_peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.MessageReference.prototype.getMessagePeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.MessageReference} returns this
*/
proto.v1.Messages.MessageReference.prototype.setMessagePeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.MessageReference} returns this
 */
proto.v1.Messages.MessageReference.prototype.clearMessagePeer = function() {
  return this.setMessagePeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.MessageReference.prototype.hasMessagePeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message_id = 2;
 * @return {string}
 */
proto.v1.Messages.MessageReference.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.MessageReference} returns this
 */
proto.v1.Messages.MessageReference.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.Messages.Peer.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.v1.Messages.Peer.PearCase = {
  PEAR_NOT_SET: 0,
  USER: 1,
  CHAT: 2,
  CRM_CHAT: 3,
  CLIENT: 4,
  LEAD: 5,
  REQUEST: 6
};

/**
 * @return {proto.v1.Messages.Peer.PearCase}
 */
proto.v1.Messages.Peer.prototype.getPearCase = function() {
  return /** @type {proto.v1.Messages.Peer.PearCase} */(jspb.Message.computeOneofCase(this, proto.v1.Messages.Peer.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Peer.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Peer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Peer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto.v1.Messages.Peer.PearUser.toObject(includeInstance, f),
    chat: (f = msg.getChat()) && proto.v1.Messages.Peer.PearChat.toObject(includeInstance, f),
    crmChat: (f = msg.getCrmChat()) && proto.v1.Messages.Peer.PeerCRMChat.toObject(includeInstance, f),
    client: (f = msg.getClient()) && proto.v1.Messages.Peer.PeerClient.toObject(includeInstance, f),
    lead: (f = msg.getLead()) && proto.v1.Messages.Peer.PeerLead.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.v1.Messages.Peer.PeerRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Peer}
 */
proto.v1.Messages.Peer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Peer;
  return proto.v1.Messages.Peer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Peer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Peer}
 */
proto.v1.Messages.Peer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer.PearUser;
      reader.readMessage(value,proto.v1.Messages.Peer.PearUser.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = new proto.v1.Messages.Peer.PearChat;
      reader.readMessage(value,proto.v1.Messages.Peer.PearChat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    case 3:
      var value = new proto.v1.Messages.Peer.PeerCRMChat;
      reader.readMessage(value,proto.v1.Messages.Peer.PeerCRMChat.deserializeBinaryFromReader);
      msg.setCrmChat(value);
      break;
    case 4:
      var value = new proto.v1.Messages.Peer.PeerClient;
      reader.readMessage(value,proto.v1.Messages.Peer.PeerClient.deserializeBinaryFromReader);
      msg.setClient(value);
      break;
    case 5:
      var value = new proto.v1.Messages.Peer.PeerLead;
      reader.readMessage(value,proto.v1.Messages.Peer.PeerLead.deserializeBinaryFromReader);
      msg.setLead(value);
      break;
    case 6:
      var value = new proto.v1.Messages.Peer.PeerRequest;
      reader.readMessage(value,proto.v1.Messages.Peer.PeerRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Peer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Peer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Peer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.PearUser.serializeBinaryToWriter
    );
  }
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.Peer.PearChat.serializeBinaryToWriter
    );
  }
  f = message.getCrmChat();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.Messages.Peer.PeerCRMChat.serializeBinaryToWriter
    );
  }
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.Messages.Peer.PeerClient.serializeBinaryToWriter
    );
  }
  f = message.getLead();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.v1.Messages.Peer.PeerLead.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.v1.Messages.Peer.PeerRequest.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Peer.PearUser.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Peer.PearUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Peer.PearUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PearUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Peer.PearUser}
 */
proto.v1.Messages.Peer.PearUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Peer.PearUser;
  return proto.v1.Messages.Peer.PearUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Peer.PearUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Peer.PearUser}
 */
proto.v1.Messages.Peer.PearUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Peer.PearUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Peer.PearUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Peer.PearUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PearUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.v1.Messages.Peer.PearUser.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Peer.PearUser} returns this
 */
proto.v1.Messages.Peer.PearUser.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Peer.PeerClient.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Peer.PeerClient.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Peer.PeerClient} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PeerClient.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Peer.PeerClient}
 */
proto.v1.Messages.Peer.PeerClient.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Peer.PeerClient;
  return proto.v1.Messages.Peer.PeerClient.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Peer.PeerClient} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Peer.PeerClient}
 */
proto.v1.Messages.Peer.PeerClient.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Peer.PeerClient.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Peer.PeerClient.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Peer.PeerClient} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PeerClient.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Peer.PeerClient.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Peer.PeerClient} returns this
 */
proto.v1.Messages.Peer.PeerClient.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Peer.PearChat.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Peer.PearChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Peer.PearChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PearChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Peer.PearChat}
 */
proto.v1.Messages.Peer.PearChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Peer.PearChat;
  return proto.v1.Messages.Peer.PearChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Peer.PearChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Peer.PearChat}
 */
proto.v1.Messages.Peer.PearChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Peer.PearChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Peer.PearChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Peer.PearChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PearChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string chat_id = 1;
 * @return {string}
 */
proto.v1.Messages.Peer.PearChat.prototype.getChatId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Peer.PearChat} returns this
 */
proto.v1.Messages.Peer.PearChat.prototype.setChatId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Peer.PeerCRMChat.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Peer.PeerCRMChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Peer.PeerCRMChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PeerCRMChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Peer.PeerCRMChat}
 */
proto.v1.Messages.Peer.PeerCRMChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Peer.PeerCRMChat;
  return proto.v1.Messages.Peer.PeerCRMChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Peer.PeerCRMChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Peer.PeerCRMChat}
 */
proto.v1.Messages.Peer.PeerCRMChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Peer.PeerCRMChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Peer.PeerCRMChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Peer.PeerCRMChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PeerCRMChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string chat_id = 1;
 * @return {string}
 */
proto.v1.Messages.Peer.PeerCRMChat.prototype.getChatId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Peer.PeerCRMChat} returns this
 */
proto.v1.Messages.Peer.PeerCRMChat.prototype.setChatId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Peer.PeerLead.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Peer.PeerLead.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Peer.PeerLead} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PeerLead.toObject = function(includeInstance, msg) {
  var f, obj = {
    leadId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Peer.PeerLead}
 */
proto.v1.Messages.Peer.PeerLead.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Peer.PeerLead;
  return proto.v1.Messages.Peer.PeerLead.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Peer.PeerLead} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Peer.PeerLead}
 */
proto.v1.Messages.Peer.PeerLead.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeadId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Peer.PeerLead.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Peer.PeerLead.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Peer.PeerLead} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PeerLead.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeadId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string lead_id = 1;
 * @return {string}
 */
proto.v1.Messages.Peer.PeerLead.prototype.getLeadId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Peer.PeerLead} returns this
 */
proto.v1.Messages.Peer.PeerLead.prototype.setLeadId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Peer.PeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Peer.PeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Peer.PeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Peer.PeerRequest}
 */
proto.v1.Messages.Peer.PeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Peer.PeerRequest;
  return proto.v1.Messages.Peer.PeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Peer.PeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Peer.PeerRequest}
 */
proto.v1.Messages.Peer.PeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Peer.PeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Peer.PeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Peer.PeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Peer.PeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Peer.PeerRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Peer.PeerRequest} returns this
 */
proto.v1.Messages.Peer.PeerRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PearUser user = 1;
 * @return {?proto.v1.Messages.Peer.PearUser}
 */
proto.v1.Messages.Peer.prototype.getUser = function() {
  return /** @type{?proto.v1.Messages.Peer.PearUser} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer.PearUser, 1));
};


/**
 * @param {?proto.v1.Messages.Peer.PearUser|undefined} value
 * @return {!proto.v1.Messages.Peer} returns this
*/
proto.v1.Messages.Peer.prototype.setUser = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.v1.Messages.Peer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Peer} returns this
 */
proto.v1.Messages.Peer.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Peer.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PearChat chat = 2;
 * @return {?proto.v1.Messages.Peer.PearChat}
 */
proto.v1.Messages.Peer.prototype.getChat = function() {
  return /** @type{?proto.v1.Messages.Peer.PearChat} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer.PearChat, 2));
};


/**
 * @param {?proto.v1.Messages.Peer.PearChat|undefined} value
 * @return {!proto.v1.Messages.Peer} returns this
*/
proto.v1.Messages.Peer.prototype.setChat = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.v1.Messages.Peer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Peer} returns this
 */
proto.v1.Messages.Peer.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Peer.prototype.hasChat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PeerCRMChat crm_chat = 3;
 * @return {?proto.v1.Messages.Peer.PeerCRMChat}
 */
proto.v1.Messages.Peer.prototype.getCrmChat = function() {
  return /** @type{?proto.v1.Messages.Peer.PeerCRMChat} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer.PeerCRMChat, 3));
};


/**
 * @param {?proto.v1.Messages.Peer.PeerCRMChat|undefined} value
 * @return {!proto.v1.Messages.Peer} returns this
*/
proto.v1.Messages.Peer.prototype.setCrmChat = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.v1.Messages.Peer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Peer} returns this
 */
proto.v1.Messages.Peer.prototype.clearCrmChat = function() {
  return this.setCrmChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Peer.prototype.hasCrmChat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PeerClient client = 4;
 * @return {?proto.v1.Messages.Peer.PeerClient}
 */
proto.v1.Messages.Peer.prototype.getClient = function() {
  return /** @type{?proto.v1.Messages.Peer.PeerClient} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer.PeerClient, 4));
};


/**
 * @param {?proto.v1.Messages.Peer.PeerClient|undefined} value
 * @return {!proto.v1.Messages.Peer} returns this
*/
proto.v1.Messages.Peer.prototype.setClient = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.v1.Messages.Peer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Peer} returns this
 */
proto.v1.Messages.Peer.prototype.clearClient = function() {
  return this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Peer.prototype.hasClient = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PeerLead lead = 5;
 * @return {?proto.v1.Messages.Peer.PeerLead}
 */
proto.v1.Messages.Peer.prototype.getLead = function() {
  return /** @type{?proto.v1.Messages.Peer.PeerLead} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer.PeerLead, 5));
};


/**
 * @param {?proto.v1.Messages.Peer.PeerLead|undefined} value
 * @return {!proto.v1.Messages.Peer} returns this
*/
proto.v1.Messages.Peer.prototype.setLead = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.v1.Messages.Peer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Peer} returns this
 */
proto.v1.Messages.Peer.prototype.clearLead = function() {
  return this.setLead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Peer.prototype.hasLead = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PeerRequest request = 6;
 * @return {?proto.v1.Messages.Peer.PeerRequest}
 */
proto.v1.Messages.Peer.prototype.getRequest = function() {
  return /** @type{?proto.v1.Messages.Peer.PeerRequest} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer.PeerRequest, 6));
};


/**
 * @param {?proto.v1.Messages.Peer.PeerRequest|undefined} value
 * @return {!proto.v1.Messages.Peer} returns this
*/
proto.v1.Messages.Peer.prototype.setRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.v1.Messages.Peer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Peer} returns this
 */
proto.v1.Messages.Peer.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Peer.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.Messages.InputChat.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.v1.Messages.InputChat.ChatCase = {
  CHAT_NOT_SET: 0,
  CHAT_GROUP: 1,
  CHAT_FOREIGN: 2,
  CHAT_CRM: 3,
  CHAT_LEAD: 4,
  CHAT_REQUEST: 5
};

/**
 * @return {proto.v1.Messages.InputChat.ChatCase}
 */
proto.v1.Messages.InputChat.prototype.getChatCase = function() {
  return /** @type {proto.v1.Messages.InputChat.ChatCase} */(jspb.Message.computeOneofCase(this, proto.v1.Messages.InputChat.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputChat.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatGroup: (f = msg.getChatGroup()) && proto.v1.Messages.InputChat.Group.toObject(includeInstance, f),
    chatForeign: (f = msg.getChatForeign()) && proto.v1.Messages.InputChat.Foreign.toObject(includeInstance, f),
    chatCrm: (f = msg.getChatCrm()) && proto.v1.Messages.InputChat.CRM.toObject(includeInstance, f),
    chatLead: (f = msg.getChatLead()) && proto.v1.Messages.InputChat.Lead.toObject(includeInstance, f),
    chatRequest: (f = msg.getChatRequest()) && proto.v1.Messages.InputChat.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputChat}
 */
proto.v1.Messages.InputChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputChat;
  return proto.v1.Messages.InputChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputChat}
 */
proto.v1.Messages.InputChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.InputChat.Group;
      reader.readMessage(value,proto.v1.Messages.InputChat.Group.deserializeBinaryFromReader);
      msg.setChatGroup(value);
      break;
    case 2:
      var value = new proto.v1.Messages.InputChat.Foreign;
      reader.readMessage(value,proto.v1.Messages.InputChat.Foreign.deserializeBinaryFromReader);
      msg.setChatForeign(value);
      break;
    case 3:
      var value = new proto.v1.Messages.InputChat.CRM;
      reader.readMessage(value,proto.v1.Messages.InputChat.CRM.deserializeBinaryFromReader);
      msg.setChatCrm(value);
      break;
    case 4:
      var value = new proto.v1.Messages.InputChat.Lead;
      reader.readMessage(value,proto.v1.Messages.InputChat.Lead.deserializeBinaryFromReader);
      msg.setChatLead(value);
      break;
    case 5:
      var value = new proto.v1.Messages.InputChat.Request;
      reader.readMessage(value,proto.v1.Messages.InputChat.Request.deserializeBinaryFromReader);
      msg.setChatRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.InputChat.Group.serializeBinaryToWriter
    );
  }
  f = message.getChatForeign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.InputChat.Foreign.serializeBinaryToWriter
    );
  }
  f = message.getChatCrm();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.Messages.InputChat.CRM.serializeBinaryToWriter
    );
  }
  f = message.getChatLead();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.Messages.InputChat.Lead.serializeBinaryToWriter
    );
  }
  f = message.getChatRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.v1.Messages.InputChat.Request.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputChat.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputChat.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputChat.Group} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputChat.Group}
 */
proto.v1.Messages.InputChat.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputChat.Group;
  return proto.v1.Messages.InputChat.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputChat.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputChat.Group}
 */
proto.v1.Messages.InputChat.Group.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputChat.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputChat.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputChat.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.Group.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string chat_id = 1;
 * @return {string}
 */
proto.v1.Messages.InputChat.Group.prototype.getChatId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.InputChat.Group} returns this
 */
proto.v1.Messages.InputChat.Group.prototype.setChatId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputChat.Foreign.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputChat.Foreign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputChat.Foreign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.Foreign.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputChat.Foreign}
 */
proto.v1.Messages.InputChat.Foreign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputChat.Foreign;
  return proto.v1.Messages.InputChat.Foreign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputChat.Foreign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputChat.Foreign}
 */
proto.v1.Messages.InputChat.Foreign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputChat.Foreign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputChat.Foreign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputChat.Foreign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.Foreign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string chat_id = 1;
 * @return {string}
 */
proto.v1.Messages.InputChat.Foreign.prototype.getChatId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.InputChat.Foreign} returns this
 */
proto.v1.Messages.InputChat.Foreign.prototype.setChatId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputChat.CRM.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputChat.CRM.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputChat.CRM} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.CRM.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputChat.CRM}
 */
proto.v1.Messages.InputChat.CRM.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputChat.CRM;
  return proto.v1.Messages.InputChat.CRM.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputChat.CRM} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputChat.CRM}
 */
proto.v1.Messages.InputChat.CRM.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputChat.CRM.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputChat.CRM.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputChat.CRM} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.CRM.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string chat_id = 1;
 * @return {string}
 */
proto.v1.Messages.InputChat.CRM.prototype.getChatId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.InputChat.CRM} returns this
 */
proto.v1.Messages.InputChat.CRM.prototype.setChatId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputChat.Lead.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputChat.Lead.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputChat.Lead} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.Lead.toObject = function(includeInstance, msg) {
  var f, obj = {
    leadId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputChat.Lead}
 */
proto.v1.Messages.InputChat.Lead.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputChat.Lead;
  return proto.v1.Messages.InputChat.Lead.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputChat.Lead} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputChat.Lead}
 */
proto.v1.Messages.InputChat.Lead.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeadId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputChat.Lead.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputChat.Lead.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputChat.Lead} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.Lead.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeadId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string lead_id = 1;
 * @return {string}
 */
proto.v1.Messages.InputChat.Lead.prototype.getLeadId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.InputChat.Lead} returns this
 */
proto.v1.Messages.InputChat.Lead.prototype.setLeadId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.InputChat.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.InputChat.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.InputChat.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.InputChat.Request}
 */
proto.v1.Messages.InputChat.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.InputChat.Request;
  return proto.v1.Messages.InputChat.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.InputChat.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.InputChat.Request}
 */
proto.v1.Messages.InputChat.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.InputChat.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.InputChat.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.InputChat.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.InputChat.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.InputChat.Request.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.InputChat.Request} returns this
 */
proto.v1.Messages.InputChat.Request.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Group chat_group = 1;
 * @return {?proto.v1.Messages.InputChat.Group}
 */
proto.v1.Messages.InputChat.prototype.getChatGroup = function() {
  return /** @type{?proto.v1.Messages.InputChat.Group} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputChat.Group, 1));
};


/**
 * @param {?proto.v1.Messages.InputChat.Group|undefined} value
 * @return {!proto.v1.Messages.InputChat} returns this
*/
proto.v1.Messages.InputChat.prototype.setChatGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.v1.Messages.InputChat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputChat} returns this
 */
proto.v1.Messages.InputChat.prototype.clearChatGroup = function() {
  return this.setChatGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputChat.prototype.hasChatGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Foreign chat_foreign = 2;
 * @return {?proto.v1.Messages.InputChat.Foreign}
 */
proto.v1.Messages.InputChat.prototype.getChatForeign = function() {
  return /** @type{?proto.v1.Messages.InputChat.Foreign} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputChat.Foreign, 2));
};


/**
 * @param {?proto.v1.Messages.InputChat.Foreign|undefined} value
 * @return {!proto.v1.Messages.InputChat} returns this
*/
proto.v1.Messages.InputChat.prototype.setChatForeign = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.v1.Messages.InputChat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputChat} returns this
 */
proto.v1.Messages.InputChat.prototype.clearChatForeign = function() {
  return this.setChatForeign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputChat.prototype.hasChatForeign = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CRM chat_crm = 3;
 * @return {?proto.v1.Messages.InputChat.CRM}
 */
proto.v1.Messages.InputChat.prototype.getChatCrm = function() {
  return /** @type{?proto.v1.Messages.InputChat.CRM} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputChat.CRM, 3));
};


/**
 * @param {?proto.v1.Messages.InputChat.CRM|undefined} value
 * @return {!proto.v1.Messages.InputChat} returns this
*/
proto.v1.Messages.InputChat.prototype.setChatCrm = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.v1.Messages.InputChat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputChat} returns this
 */
proto.v1.Messages.InputChat.prototype.clearChatCrm = function() {
  return this.setChatCrm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputChat.prototype.hasChatCrm = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Lead chat_lead = 4;
 * @return {?proto.v1.Messages.InputChat.Lead}
 */
proto.v1.Messages.InputChat.prototype.getChatLead = function() {
  return /** @type{?proto.v1.Messages.InputChat.Lead} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputChat.Lead, 4));
};


/**
 * @param {?proto.v1.Messages.InputChat.Lead|undefined} value
 * @return {!proto.v1.Messages.InputChat} returns this
*/
proto.v1.Messages.InputChat.prototype.setChatLead = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.v1.Messages.InputChat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputChat} returns this
 */
proto.v1.Messages.InputChat.prototype.clearChatLead = function() {
  return this.setChatLead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputChat.prototype.hasChatLead = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Request chat_request = 5;
 * @return {?proto.v1.Messages.InputChat.Request}
 */
proto.v1.Messages.InputChat.prototype.getChatRequest = function() {
  return /** @type{?proto.v1.Messages.InputChat.Request} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputChat.Request, 5));
};


/**
 * @param {?proto.v1.Messages.InputChat.Request|undefined} value
 * @return {!proto.v1.Messages.InputChat} returns this
*/
proto.v1.Messages.InputChat.prototype.setChatRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.v1.Messages.InputChat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.InputChat} returns this
 */
proto.v1.Messages.InputChat.prototype.clearChatRequest = function() {
  return this.setChatRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.InputChat.prototype.hasChatRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.Messages.Chat.oneofGroups_ = [[1,2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.v1.Messages.Chat.ChatCase = {
  CHAT_NOT_SET: 0,
  CHAT_GROUP: 1,
  FORBIDDEN: 2,
  EMPTY: 3,
  CHAT_FOREIGN: 4,
  CHAT_CRM: 5,
  CHAT_LEAD: 6,
  REQUEST: 7
};

/**
 * @return {proto.v1.Messages.Chat.ChatCase}
 */
proto.v1.Messages.Chat.prototype.getChatCase = function() {
  return /** @type {proto.v1.Messages.Chat.ChatCase} */(jspb.Message.computeOneofCase(this, proto.v1.Messages.Chat.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Chat.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Chat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Chat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatGroup: (f = msg.getChatGroup()) && proto.v1.Messages.Chat.Group.toObject(includeInstance, f),
    forbidden: (f = msg.getForbidden()) && proto.v1.Messages.Chat.Forbidden.toObject(includeInstance, f),
    empty: (f = msg.getEmpty()) && proto.v1.Messages.Chat.Empty.toObject(includeInstance, f),
    chatForeign: (f = msg.getChatForeign()) && proto.v1.Messages.Chat.Foreign.toObject(includeInstance, f),
    chatCrm: (f = msg.getChatCrm()) && proto.v1.Messages.Chat.CRM.toObject(includeInstance, f),
    chatLead: (f = msg.getChatLead()) && proto.v1.Messages.Chat.Lead.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && layer1_rpa_v1_rpa_v1_request_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Chat}
 */
proto.v1.Messages.Chat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Chat;
  return proto.v1.Messages.Chat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Chat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Chat}
 */
proto.v1.Messages.Chat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Chat.Group;
      reader.readMessage(value,proto.v1.Messages.Chat.Group.deserializeBinaryFromReader);
      msg.setChatGroup(value);
      break;
    case 2:
      var value = new proto.v1.Messages.Chat.Forbidden;
      reader.readMessage(value,proto.v1.Messages.Chat.Forbidden.deserializeBinaryFromReader);
      msg.setForbidden(value);
      break;
    case 3:
      var value = new proto.v1.Messages.Chat.Empty;
      reader.readMessage(value,proto.v1.Messages.Chat.Empty.deserializeBinaryFromReader);
      msg.setEmpty(value);
      break;
    case 4:
      var value = new proto.v1.Messages.Chat.Foreign;
      reader.readMessage(value,proto.v1.Messages.Chat.Foreign.deserializeBinaryFromReader);
      msg.setChatForeign(value);
      break;
    case 5:
      var value = new proto.v1.Messages.Chat.CRM;
      reader.readMessage(value,proto.v1.Messages.Chat.CRM.deserializeBinaryFromReader);
      msg.setChatCrm(value);
      break;
    case 6:
      var value = new proto.v1.Messages.Chat.Lead;
      reader.readMessage(value,proto.v1.Messages.Chat.Lead.deserializeBinaryFromReader);
      msg.setChatLead(value);
      break;
    case 7:
      var value = new layer1_rpa_v1_rpa_v1_request_pb.Request;
      reader.readMessage(value,layer1_rpa_v1_rpa_v1_request_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Chat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Chat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Chat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Chat.Group.serializeBinaryToWriter
    );
  }
  f = message.getForbidden();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.Chat.Forbidden.serializeBinaryToWriter
    );
  }
  f = message.getEmpty();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.Messages.Chat.Empty.serializeBinaryToWriter
    );
  }
  f = message.getChatForeign();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.Messages.Chat.Foreign.serializeBinaryToWriter
    );
  }
  f = message.getChatCrm();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.v1.Messages.Chat.CRM.serializeBinaryToWriter
    );
  }
  f = message.getChatLead();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.v1.Messages.Chat.Lead.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      layer1_rpa_v1_rpa_v1_request_pb.Request.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Chat.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Chat.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Chat.Group} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantsCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0),
    access: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    avatarFile: (f = msg.getAvatarFile()) && proto.v1.Messages.Message.MessageRegular.MediaPhoto.toObject(includeInstance, f),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    ownerId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Chat.Group}
 */
proto.v1.Messages.Chat.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Chat.Group;
  return proto.v1.Messages.Chat.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Chat.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Chat.Group}
 */
proto.v1.Messages.Chat.Group.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParticipantsCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccess(value);
      break;
    case 6:
      var value = new proto.v1.Messages.Message.MessageRegular.MediaPhoto;
      reader.readMessage(value,proto.v1.Messages.Message.MessageRegular.MediaPhoto.deserializeBinaryFromReader);
      msg.setAvatarFile(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Chat.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Chat.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Chat.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.Group.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantsCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getAccess();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAvatarFile();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.v1.Messages.Message.MessageRegular.MediaPhoto.serializeBinaryToWriter
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Chat.Group.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Group} returns this
 */
proto.v1.Messages.Chat.Group.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.v1.Messages.Chat.Group.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Group} returns this
 */
proto.v1.Messages.Chat.Group.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 participants_count = 3;
 * @return {number}
 */
proto.v1.Messages.Chat.Group.prototype.getParticipantsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Chat.Group} returns this
 */
proto.v1.Messages.Chat.Group.prototype.setParticipantsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.v1.Messages.Chat.Group.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Chat.Group} returns this
 */
proto.v1.Messages.Chat.Group.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool access = 5;
 * @return {boolean}
 */
proto.v1.Messages.Chat.Group.prototype.getAccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.Messages.Chat.Group} returns this
 */
proto.v1.Messages.Chat.Group.prototype.setAccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional Message.MessageRegular.MediaPhoto avatar_file = 6;
 * @return {?proto.v1.Messages.Message.MessageRegular.MediaPhoto}
 */
proto.v1.Messages.Chat.Group.prototype.getAvatarFile = function() {
  return /** @type{?proto.v1.Messages.Message.MessageRegular.MediaPhoto} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageRegular.MediaPhoto, 6));
};


/**
 * @param {?proto.v1.Messages.Message.MessageRegular.MediaPhoto|undefined} value
 * @return {!proto.v1.Messages.Chat.Group} returns this
*/
proto.v1.Messages.Chat.Group.prototype.setAvatarFile = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Chat.Group} returns this
 */
proto.v1.Messages.Chat.Group.prototype.clearAvatarFile = function() {
  return this.setAvatarFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Chat.Group.prototype.hasAvatarFile = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string avatar_url = 7;
 * @return {string}
 */
proto.v1.Messages.Chat.Group.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Group} returns this
 */
proto.v1.Messages.Chat.Group.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string owner_id = 8;
 * @return {string}
 */
proto.v1.Messages.Chat.Group.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Group} returns this
 */
proto.v1.Messages.Chat.Group.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool deleted = 9;
 * @return {boolean}
 */
proto.v1.Messages.Chat.Group.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.Messages.Chat.Group} returns this
 */
proto.v1.Messages.Chat.Group.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Chat.Foreign.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Chat.Foreign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Chat.Foreign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.Foreign.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    date: jspb.Message.getFieldWithDefault(msg, 2, 0),
    participantsCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    access: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Chat.Foreign}
 */
proto.v1.Messages.Chat.Foreign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Chat.Foreign;
  return proto.v1.Messages.Chat.Foreign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Chat.Foreign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Chat.Foreign}
 */
proto.v1.Messages.Chat.Foreign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParticipantsCount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Chat.Foreign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Chat.Foreign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Chat.Foreign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.Foreign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getParticipantsCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccess();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Chat.Foreign.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Foreign} returns this
 */
proto.v1.Messages.Chat.Foreign.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 date = 2;
 * @return {number}
 */
proto.v1.Messages.Chat.Foreign.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Chat.Foreign} returns this
 */
proto.v1.Messages.Chat.Foreign.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 participants_count = 3;
 * @return {number}
 */
proto.v1.Messages.Chat.Foreign.prototype.getParticipantsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Chat.Foreign} returns this
 */
proto.v1.Messages.Chat.Foreign.prototype.setParticipantsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.v1.Messages.Chat.Foreign.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Foreign} returns this
 */
proto.v1.Messages.Chat.Foreign.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool access = 5;
 * @return {boolean}
 */
proto.v1.Messages.Chat.Foreign.prototype.getAccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.Messages.Chat.Foreign} returns this
 */
proto.v1.Messages.Chat.Foreign.prototype.setAccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Chat.CRM.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Chat.CRM.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Chat.CRM} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.CRM.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantsCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0),
    access: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    crmCard: jspb.Message.getFieldWithDefault(msg, 6, ""),
    crmCardType: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Chat.CRM}
 */
proto.v1.Messages.Chat.CRM.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Chat.CRM;
  return proto.v1.Messages.Chat.CRM.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Chat.CRM} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Chat.CRM}
 */
proto.v1.Messages.Chat.CRM.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParticipantsCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccess(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCrmCard(value);
      break;
    case 7:
      var value = /** @type {!proto.v1.Messages.Chat.CRM.CRMCardType} */ (reader.readEnum());
      msg.setCrmCardType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Chat.CRM.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Chat.CRM.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Chat.CRM} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.CRM.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantsCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getAccess();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCrmCard();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCrmCardType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.v1.Messages.Chat.CRM.CRMCardType = {
  NONE: 0,
  LEAD: 1,
  CUSTOMER: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Chat.CRM.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.CRM} returns this
 */
proto.v1.Messages.Chat.CRM.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.v1.Messages.Chat.CRM.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.CRM} returns this
 */
proto.v1.Messages.Chat.CRM.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 participants_count = 3;
 * @return {number}
 */
proto.v1.Messages.Chat.CRM.prototype.getParticipantsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Chat.CRM} returns this
 */
proto.v1.Messages.Chat.CRM.prototype.setParticipantsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.v1.Messages.Chat.CRM.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Chat.CRM} returns this
 */
proto.v1.Messages.Chat.CRM.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool access = 5;
 * @return {boolean}
 */
proto.v1.Messages.Chat.CRM.prototype.getAccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.Messages.Chat.CRM} returns this
 */
proto.v1.Messages.Chat.CRM.prototype.setAccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string crm_card = 6;
 * @return {string}
 */
proto.v1.Messages.Chat.CRM.prototype.getCrmCard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.CRM} returns this
 */
proto.v1.Messages.Chat.CRM.prototype.setCrmCard = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional CRMCardType crm_card_type = 7;
 * @return {!proto.v1.Messages.Chat.CRM.CRMCardType}
 */
proto.v1.Messages.Chat.CRM.prototype.getCrmCardType = function() {
  return /** @type {!proto.v1.Messages.Chat.CRM.CRMCardType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.v1.Messages.Chat.CRM.CRMCardType} value
 * @return {!proto.v1.Messages.Chat.CRM} returns this
 */
proto.v1.Messages.Chat.CRM.prototype.setCrmCardType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Chat.Forbidden.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Chat.Forbidden.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Chat.Forbidden} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.Forbidden.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Chat.Forbidden}
 */
proto.v1.Messages.Chat.Forbidden.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Chat.Forbidden;
  return proto.v1.Messages.Chat.Forbidden.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Chat.Forbidden} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Chat.Forbidden}
 */
proto.v1.Messages.Chat.Forbidden.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Chat.Forbidden.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Chat.Forbidden.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Chat.Forbidden} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.Forbidden.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Chat.Forbidden.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Forbidden} returns this
 */
proto.v1.Messages.Chat.Forbidden.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.v1.Messages.Chat.Forbidden.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Forbidden} returns this
 */
proto.v1.Messages.Chat.Forbidden.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.v1.Messages.Chat.Forbidden.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Chat.Forbidden} returns this
 */
proto.v1.Messages.Chat.Forbidden.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Chat.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Chat.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Chat.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Chat.Empty}
 */
proto.v1.Messages.Chat.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Chat.Empty;
  return proto.v1.Messages.Chat.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Chat.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Chat.Empty}
 */
proto.v1.Messages.Chat.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Chat.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Chat.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Chat.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Chat.Empty.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Empty} returns this
 */
proto.v1.Messages.Chat.Empty.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.v1.Messages.Chat.Empty.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Empty} returns this
 */
proto.v1.Messages.Chat.Empty.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.v1.Messages.Chat.Empty.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Chat.Empty} returns this
 */
proto.v1.Messages.Chat.Empty.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Chat.Lead.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Chat.Lead.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Chat.Lead} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.Lead.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantsCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    clientId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    date: jspb.Message.getFieldWithDefault(msg, 5, 0),
    access: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    externalLink: jspb.Message.getFieldWithDefault(msg, 8, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    avatarFile: (f = msg.getAvatarFile()) && proto.v1.Messages.Message.MessageRegular.MediaPhoto.toObject(includeInstance, f),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 11, ""),
    externalUrl: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Chat.Lead}
 */
proto.v1.Messages.Chat.Lead.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Chat.Lead;
  return proto.v1.Messages.Chat.Lead.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Chat.Lead} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Chat.Lead}
 */
proto.v1.Messages.Chat.Lead.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParticipantsCount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccess(value);
      break;
    case 7:
      var value = /** @type {!proto.v1.Messages.Chat.Lead.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalLink(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 10:
      var value = new proto.v1.Messages.Message.MessageRegular.MediaPhoto;
      reader.readMessage(value,proto.v1.Messages.Message.MessageRegular.MediaPhoto.deserializeBinaryFromReader);
      msg.setAvatarFile(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Chat.Lead.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Chat.Lead.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Chat.Lead} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Chat.Lead.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantsCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getAccess();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getExternalLink();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAvatarFile();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.v1.Messages.Message.MessageRegular.MediaPhoto.serializeBinaryToWriter
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getExternalUrl();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.v1.Messages.Chat.Lead.Status = {
  CLOSED: 0,
  OPENED: 1
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Chat.Lead.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.v1.Messages.Chat.Lead.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 participants_count = 3;
 * @return {number}
 */
proto.v1.Messages.Chat.Lead.prototype.getParticipantsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setParticipantsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string client_id = 4;
 * @return {string}
 */
proto.v1.Messages.Chat.Lead.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 date = 5;
 * @return {number}
 */
proto.v1.Messages.Chat.Lead.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool access = 6;
 * @return {boolean}
 */
proto.v1.Messages.Chat.Lead.prototype.getAccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setAccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional Status status = 7;
 * @return {!proto.v1.Messages.Chat.Lead.Status}
 */
proto.v1.Messages.Chat.Lead.prototype.getStatus = function() {
  return /** @type {!proto.v1.Messages.Chat.Lead.Status} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.v1.Messages.Chat.Lead.Status} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string external_link = 8;
 * @return {string}
 */
proto.v1.Messages.Chat.Lead.prototype.getExternalLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setExternalLink = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string app_id = 9;
 * @return {string}
 */
proto.v1.Messages.Chat.Lead.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional Message.MessageRegular.MediaPhoto avatar_file = 10;
 * @return {?proto.v1.Messages.Message.MessageRegular.MediaPhoto}
 */
proto.v1.Messages.Chat.Lead.prototype.getAvatarFile = function() {
  return /** @type{?proto.v1.Messages.Message.MessageRegular.MediaPhoto} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageRegular.MediaPhoto, 10));
};


/**
 * @param {?proto.v1.Messages.Message.MessageRegular.MediaPhoto|undefined} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
*/
proto.v1.Messages.Chat.Lead.prototype.setAvatarFile = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.clearAvatarFile = function() {
  return this.setAvatarFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Chat.Lead.prototype.hasAvatarFile = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string avatar_url = 11;
 * @return {string}
 */
proto.v1.Messages.Chat.Lead.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string external_url = 12;
 * @return {string}
 */
proto.v1.Messages.Chat.Lead.prototype.getExternalUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Chat.Lead} returns this
 */
proto.v1.Messages.Chat.Lead.prototype.setExternalUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional Group chat_group = 1;
 * @return {?proto.v1.Messages.Chat.Group}
 */
proto.v1.Messages.Chat.prototype.getChatGroup = function() {
  return /** @type{?proto.v1.Messages.Chat.Group} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Chat.Group, 1));
};


/**
 * @param {?proto.v1.Messages.Chat.Group|undefined} value
 * @return {!proto.v1.Messages.Chat} returns this
*/
proto.v1.Messages.Chat.prototype.setChatGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.v1.Messages.Chat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Chat} returns this
 */
proto.v1.Messages.Chat.prototype.clearChatGroup = function() {
  return this.setChatGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Chat.prototype.hasChatGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Forbidden forbidden = 2;
 * @return {?proto.v1.Messages.Chat.Forbidden}
 */
proto.v1.Messages.Chat.prototype.getForbidden = function() {
  return /** @type{?proto.v1.Messages.Chat.Forbidden} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Chat.Forbidden, 2));
};


/**
 * @param {?proto.v1.Messages.Chat.Forbidden|undefined} value
 * @return {!proto.v1.Messages.Chat} returns this
*/
proto.v1.Messages.Chat.prototype.setForbidden = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.v1.Messages.Chat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Chat} returns this
 */
proto.v1.Messages.Chat.prototype.clearForbidden = function() {
  return this.setForbidden(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Chat.prototype.hasForbidden = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Empty empty = 3;
 * @return {?proto.v1.Messages.Chat.Empty}
 */
proto.v1.Messages.Chat.prototype.getEmpty = function() {
  return /** @type{?proto.v1.Messages.Chat.Empty} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Chat.Empty, 3));
};


/**
 * @param {?proto.v1.Messages.Chat.Empty|undefined} value
 * @return {!proto.v1.Messages.Chat} returns this
*/
proto.v1.Messages.Chat.prototype.setEmpty = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.v1.Messages.Chat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Chat} returns this
 */
proto.v1.Messages.Chat.prototype.clearEmpty = function() {
  return this.setEmpty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Chat.prototype.hasEmpty = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Foreign chat_foreign = 4;
 * @return {?proto.v1.Messages.Chat.Foreign}
 */
proto.v1.Messages.Chat.prototype.getChatForeign = function() {
  return /** @type{?proto.v1.Messages.Chat.Foreign} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Chat.Foreign, 4));
};


/**
 * @param {?proto.v1.Messages.Chat.Foreign|undefined} value
 * @return {!proto.v1.Messages.Chat} returns this
*/
proto.v1.Messages.Chat.prototype.setChatForeign = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.v1.Messages.Chat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Chat} returns this
 */
proto.v1.Messages.Chat.prototype.clearChatForeign = function() {
  return this.setChatForeign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Chat.prototype.hasChatForeign = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CRM chat_crm = 5;
 * @return {?proto.v1.Messages.Chat.CRM}
 */
proto.v1.Messages.Chat.prototype.getChatCrm = function() {
  return /** @type{?proto.v1.Messages.Chat.CRM} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Chat.CRM, 5));
};


/**
 * @param {?proto.v1.Messages.Chat.CRM|undefined} value
 * @return {!proto.v1.Messages.Chat} returns this
*/
proto.v1.Messages.Chat.prototype.setChatCrm = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.v1.Messages.Chat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Chat} returns this
 */
proto.v1.Messages.Chat.prototype.clearChatCrm = function() {
  return this.setChatCrm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Chat.prototype.hasChatCrm = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Lead chat_lead = 6;
 * @return {?proto.v1.Messages.Chat.Lead}
 */
proto.v1.Messages.Chat.prototype.getChatLead = function() {
  return /** @type{?proto.v1.Messages.Chat.Lead} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Chat.Lead, 6));
};


/**
 * @param {?proto.v1.Messages.Chat.Lead|undefined} value
 * @return {!proto.v1.Messages.Chat} returns this
*/
proto.v1.Messages.Chat.prototype.setChatLead = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.v1.Messages.Chat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Chat} returns this
 */
proto.v1.Messages.Chat.prototype.clearChatLead = function() {
  return this.setChatLead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Chat.prototype.hasChatLead = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional rpa.v1.Request request = 7;
 * @return {?proto.v1.rpa.v1.Request}
 */
proto.v1.Messages.Chat.prototype.getRequest = function() {
  return /** @type{?proto.v1.rpa.v1.Request} */ (
    jspb.Message.getWrapperField(this, layer1_rpa_v1_rpa_v1_request_pb.Request, 7));
};


/**
 * @param {?proto.v1.rpa.v1.Request|undefined} value
 * @return {!proto.v1.Messages.Chat} returns this
*/
proto.v1.Messages.Chat.prototype.setRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.v1.Messages.Chat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Chat} returns this
 */
proto.v1.Messages.Chat.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Chat.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.MessagesSlice.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.MessagesSlice.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.MessagesSlice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.MessagesSlice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.MessagesSlice.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.v1.Messages.Message.toObject, includeInstance),
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    layer1_users_pb.Users.CommonUser.toObject, includeInstance),
    chatsList: jspb.Message.toObjectList(msg.getChatsList(),
    proto.v1.Messages.Chat.toObject, includeInstance),
    search: (f = msg.getSearch()) && proto.v1.Messages.MessagesSlice.SearchState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.MessagesSlice}
 */
proto.v1.Messages.MessagesSlice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.MessagesSlice;
  return proto.v1.Messages.MessagesSlice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.MessagesSlice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.MessagesSlice}
 */
proto.v1.Messages.MessagesSlice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Message;
      reader.readMessage(value,proto.v1.Messages.Message.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    case 2:
      var value = new layer1_users_pb.Users.CommonUser;
      reader.readMessage(value,layer1_users_pb.Users.CommonUser.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    case 3:
      var value = new proto.v1.Messages.Chat;
      reader.readMessage(value,proto.v1.Messages.Chat.deserializeBinaryFromReader);
      msg.addChats(value);
      break;
    case 4:
      var value = new proto.v1.Messages.MessagesSlice.SearchState;
      reader.readMessage(value,proto.v1.Messages.MessagesSlice.SearchState.deserializeBinaryFromReader);
      msg.setSearch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.MessagesSlice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.MessagesSlice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.MessagesSlice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.MessagesSlice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.v1.Messages.Message.serializeBinaryToWriter
    );
  }
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      layer1_users_pb.Users.CommonUser.serializeBinaryToWriter
    );
  }
  f = message.getChatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.v1.Messages.Chat.serializeBinaryToWriter
    );
  }
  f = message.getSearch();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.Messages.MessagesSlice.SearchState.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.MessagesSlice.SearchState.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.MessagesSlice.SearchState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.MessagesSlice.SearchState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.MessagesSlice.SearchState.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalItems: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.MessagesSlice.SearchState}
 */
proto.v1.Messages.MessagesSlice.SearchState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.MessagesSlice.SearchState;
  return proto.v1.Messages.MessagesSlice.SearchState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.MessagesSlice.SearchState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.MessagesSlice.SearchState}
 */
proto.v1.Messages.MessagesSlice.SearchState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalItems(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.MessagesSlice.SearchState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.MessagesSlice.SearchState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.MessagesSlice.SearchState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.MessagesSlice.SearchState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalItems();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 total_items = 1;
 * @return {number}
 */
proto.v1.Messages.MessagesSlice.SearchState.prototype.getTotalItems = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.MessagesSlice.SearchState} returns this
 */
proto.v1.Messages.MessagesSlice.SearchState.prototype.setTotalItems = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.v1.Messages.MessagesSlice.SearchState.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.MessagesSlice.SearchState} returns this
 */
proto.v1.Messages.MessagesSlice.SearchState.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Message messages = 1;
 * @return {!Array<!proto.v1.Messages.Message>}
 */
proto.v1.Messages.MessagesSlice.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.v1.Messages.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.Message, 1));
};


/**
 * @param {!Array<!proto.v1.Messages.Message>} value
 * @return {!proto.v1.Messages.MessagesSlice} returns this
*/
proto.v1.Messages.MessagesSlice.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.v1.Messages.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Message}
 */
proto.v1.Messages.MessagesSlice.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.v1.Messages.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.MessagesSlice} returns this
 */
proto.v1.Messages.MessagesSlice.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};


/**
 * repeated Users.CommonUser users = 2;
 * @return {!Array<!proto.v1.Users.CommonUser>}
 */
proto.v1.Messages.MessagesSlice.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.v1.Users.CommonUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, layer1_users_pb.Users.CommonUser, 2));
};


/**
 * @param {!Array<!proto.v1.Users.CommonUser>} value
 * @return {!proto.v1.Messages.MessagesSlice} returns this
*/
proto.v1.Messages.MessagesSlice.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.v1.Users.CommonUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Users.CommonUser}
 */
proto.v1.Messages.MessagesSlice.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.v1.Users.CommonUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.MessagesSlice} returns this
 */
proto.v1.Messages.MessagesSlice.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};


/**
 * repeated Chat chats = 3;
 * @return {!Array<!proto.v1.Messages.Chat>}
 */
proto.v1.Messages.MessagesSlice.prototype.getChatsList = function() {
  return /** @type{!Array<!proto.v1.Messages.Chat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.Chat, 3));
};


/**
 * @param {!Array<!proto.v1.Messages.Chat>} value
 * @return {!proto.v1.Messages.MessagesSlice} returns this
*/
proto.v1.Messages.MessagesSlice.prototype.setChatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.v1.Messages.Chat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Chat}
 */
proto.v1.Messages.MessagesSlice.prototype.addChats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.v1.Messages.Chat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.MessagesSlice} returns this
 */
proto.v1.Messages.MessagesSlice.prototype.clearChatsList = function() {
  return this.setChatsList([]);
};


/**
 * optional SearchState search = 4;
 * @return {?proto.v1.Messages.MessagesSlice.SearchState}
 */
proto.v1.Messages.MessagesSlice.prototype.getSearch = function() {
  return /** @type{?proto.v1.Messages.MessagesSlice.SearchState} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.MessagesSlice.SearchState, 4));
};


/**
 * @param {?proto.v1.Messages.MessagesSlice.SearchState|undefined} value
 * @return {!proto.v1.Messages.MessagesSlice} returns this
*/
proto.v1.Messages.MessagesSlice.prototype.setSearch = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.MessagesSlice} returns this
 */
proto.v1.Messages.MessagesSlice.prototype.clearSearch = function() {
  return this.setSearch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.MessagesSlice.prototype.hasSearch = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.Messages.Message.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.v1.Messages.Message.MessageCase = {
  MESSAGE_NOT_SET: 0,
  EMPTY: 2,
  SERVICE: 3,
  REGULAR: 4
};

/**
 * @return {proto.v1.Messages.Message.MessageCase}
 */
proto.v1.Messages.Message.prototype.getMessageCase = function() {
  return /** @type {proto.v1.Messages.Message.MessageCase} */(jspb.Message.computeOneofCase(this, proto.v1.Messages.Message.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    idempotencyKey: jspb.Message.getFieldWithDefault(msg, 20, ""),
    empty: (f = msg.getEmpty()) && proto.v1.Messages.Message.MessageEmpty.toObject(includeInstance, f),
    service: (f = msg.getService()) && proto.v1.Messages.Message.MessageService.toObject(includeInstance, f),
    regular: (f = msg.getRegular()) && proto.v1.Messages.Message.MessageRegular.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message}
 */
proto.v1.Messages.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message;
  return proto.v1.Messages.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message}
 */
proto.v1.Messages.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotencyKey(value);
      break;
    case 2:
      var value = new proto.v1.Messages.Message.MessageEmpty;
      reader.readMessage(value,proto.v1.Messages.Message.MessageEmpty.deserializeBinaryFromReader);
      msg.setEmpty(value);
      break;
    case 3:
      var value = new proto.v1.Messages.Message.MessageService;
      reader.readMessage(value,proto.v1.Messages.Message.MessageService.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    case 4:
      var value = new proto.v1.Messages.Message.MessageRegular;
      reader.readMessage(value,proto.v1.Messages.Message.MessageRegular.deserializeBinaryFromReader);
      msg.setRegular(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getIdempotencyKey();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getEmpty();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.Message.MessageEmpty.serializeBinaryToWriter
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.Messages.Message.MessageService.serializeBinaryToWriter
    );
  }
  f = message.getRegular();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.Messages.Message.MessageRegular.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.Messages.Message.MessageService.oneofGroups_ = [[7,8,9,10,11,12,13]];

/**
 * @enum {number}
 */
proto.v1.Messages.Message.MessageService.ActionCase = {
  ACTION_NOT_SET: 0,
  CHAT_CREATE: 7,
  CHAT_ADD_USER: 8,
  CHAT_DELETE_USER: 9,
  CHAT_NAME_CHANGED: 10,
  CHAT_ADD_PARTICIPANT: 11,
  CHAT_DELETE_PARTICIPANT: 12,
  CALL_END: 13
};

/**
 * @return {proto.v1.Messages.Message.MessageService.ActionCase}
 */
proto.v1.Messages.Message.MessageService.prototype.getActionCase = function() {
  return /** @type {proto.v1.Messages.Message.MessageService.ActionCase} */(jspb.Message.computeOneofCase(this, proto.v1.Messages.Message.MessageService.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageService.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageService.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageService} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: (f = msg.getFrom()) && proto.v1.Messages.InputMember.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.v1.Messages.InputMember.toObject(includeInstance, f),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0),
    flags: msg.getFlags_asB64(),
    chatCreate: (f = msg.getChatCreate()) && proto.v1.Messages.Message.MessageService.ActionChatCreate.toObject(includeInstance, f),
    chatAddUser: (f = msg.getChatAddUser()) && proto.v1.Messages.Message.MessageService.ActionChatAddUser.toObject(includeInstance, f),
    chatDeleteUser: (f = msg.getChatDeleteUser()) && proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.toObject(includeInstance, f),
    chatNameChanged: (f = msg.getChatNameChanged()) && proto.v1.Messages.Message.MessageService.ActionChatNameChanged.toObject(includeInstance, f),
    chatAddParticipant: (f = msg.getChatAddParticipant()) && proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.toObject(includeInstance, f),
    chatDeleteParticipant: (f = msg.getChatDeleteParticipant()) && proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.toObject(includeInstance, f),
    callEnd: (f = msg.getCallEnd()) && proto.v1.Messages.Message.MessageService.ActionCallEnd.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageService}
 */
proto.v1.Messages.Message.MessageService.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageService;
  return proto.v1.Messages.Message.MessageService.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageService} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageService}
 */
proto.v1.Messages.Message.MessageService.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFlags(value);
      break;
    case 7:
      var value = new proto.v1.Messages.Message.MessageService.ActionChatCreate;
      reader.readMessage(value,proto.v1.Messages.Message.MessageService.ActionChatCreate.deserializeBinaryFromReader);
      msg.setChatCreate(value);
      break;
    case 8:
      var value = new proto.v1.Messages.Message.MessageService.ActionChatAddUser;
      reader.readMessage(value,proto.v1.Messages.Message.MessageService.ActionChatAddUser.deserializeBinaryFromReader);
      msg.setChatAddUser(value);
      break;
    case 9:
      var value = new proto.v1.Messages.Message.MessageService.ActionChatDeleteUser;
      reader.readMessage(value,proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.deserializeBinaryFromReader);
      msg.setChatDeleteUser(value);
      break;
    case 10:
      var value = new proto.v1.Messages.Message.MessageService.ActionChatNameChanged;
      reader.readMessage(value,proto.v1.Messages.Message.MessageService.ActionChatNameChanged.deserializeBinaryFromReader);
      msg.setChatNameChanged(value);
      break;
    case 11:
      var value = new proto.v1.Messages.Message.MessageService.ActionChatAddParticipant;
      reader.readMessage(value,proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.deserializeBinaryFromReader);
      msg.setChatAddParticipant(value);
      break;
    case 12:
      var value = new proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant;
      reader.readMessage(value,proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.deserializeBinaryFromReader);
      msg.setChatDeleteParticipant(value);
      break;
    case 13:
      var value = new proto.v1.Messages.Message.MessageService.ActionCallEnd;
      reader.readMessage(value,proto.v1.Messages.Message.MessageService.ActionCallEnd.deserializeBinaryFromReader);
      msg.setCallEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageService.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageService.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageService} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getFlags_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getChatCreate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.v1.Messages.Message.MessageService.ActionChatCreate.serializeBinaryToWriter
    );
  }
  f = message.getChatAddUser();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.v1.Messages.Message.MessageService.ActionChatAddUser.serializeBinaryToWriter
    );
  }
  f = message.getChatDeleteUser();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.serializeBinaryToWriter
    );
  }
  f = message.getChatNameChanged();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.v1.Messages.Message.MessageService.ActionChatNameChanged.serializeBinaryToWriter
    );
  }
  f = message.getChatAddParticipant();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.serializeBinaryToWriter
    );
  }
  f = message.getChatDeleteParticipant();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.serializeBinaryToWriter
    );
  }
  f = message.getCallEnd();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.v1.Messages.Message.MessageService.ActionCallEnd.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageService.ActionChatCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    usersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatCreate}
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageService.ActionChatCreate;
  return proto.v1.Messages.Message.MessageService.ActionChatCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatCreate}
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageService.ActionChatCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatCreate} returns this
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string users = 2;
 * @return {!Array<string>}
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.prototype.getUsersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatCreate} returns this
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.prototype.setUsersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatCreate} returns this
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.prototype.addUsers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatCreate} returns this
 */
proto.v1.Messages.Message.MessageService.ActionChatCreate.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddUser.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageService.ActionChatAddUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatAddUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatAddUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatAddUser}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageService.ActionChatAddUser;
  return proto.v1.Messages.Message.MessageService.ActionChatAddUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatAddUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatAddUser}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageService.ActionChatAddUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatAddUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatAddUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddUser.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatAddUser} returns this
 */
proto.v1.Messages.Message.MessageService.ActionChatAddUser.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatAddParticipant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.toObject = function(includeInstance, msg) {
  var f, obj = {
    member: (f = msg.getMember()) && proto.v1.Messages.InputMember.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatAddParticipant}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageService.ActionChatAddParticipant;
  return proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatAddParticipant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatAddParticipant}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatAddParticipant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
};


/**
 * optional InputMember member = 1;
 * @return {?proto.v1.Messages.InputMember}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.prototype.getMember = function() {
  return /** @type{?proto.v1.Messages.InputMember} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember, 1));
};


/**
 * @param {?proto.v1.Messages.InputMember|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatAddParticipant} returns this
*/
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatAddParticipant} returns this
 */
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.ActionChatAddParticipant.prototype.hasMember = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.toObject = function(includeInstance, msg) {
  var f, obj = {
    member: (f = msg.getMember()) && proto.v1.Messages.InputMember.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant;
  return proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
};


/**
 * optional InputMember member = 1;
 * @return {?proto.v1.Messages.InputMember}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.prototype.getMember = function() {
  return /** @type{?proto.v1.Messages.InputMember} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember, 1));
};


/**
 * @param {?proto.v1.Messages.InputMember|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant} returns this
*/
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant} returns this
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant.prototype.hasMember = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatDeleteUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatDeleteUser}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageService.ActionChatDeleteUser;
  return proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatDeleteUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatDeleteUser}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatDeleteUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatDeleteUser} returns this
 */
proto.v1.Messages.Message.MessageService.ActionChatDeleteUser.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageService.ActionChatNameChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageService.ActionChatNameChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatNameChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatNameChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatNameChanged}
 */
proto.v1.Messages.Message.MessageService.ActionChatNameChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageService.ActionChatNameChanged;
  return proto.v1.Messages.Message.MessageService.ActionChatNameChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatNameChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatNameChanged}
 */
proto.v1.Messages.Message.MessageService.ActionChatNameChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageService.ActionChatNameChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageService.ActionChatNameChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageService.ActionChatNameChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionChatNameChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.v1.Messages.Message.MessageService.ActionChatNameChanged.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageService.ActionChatNameChanged} returns this
 */
proto.v1.Messages.Message.MessageService.ActionChatNameChanged.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageService.ActionCallEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageService.ActionCallEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
    startAt: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cause: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageService.ActionCallEnd}
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageService.ActionCallEnd;
  return proto.v1.Messages.Message.MessageService.ActionCallEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageService.ActionCallEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageService.ActionCallEnd}
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartAt(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEndAt(value);
      break;
    case 3:
      var value = /** @type {!proto.v1.Messages.Message.MessageService.ActionCallEnd.Cause} */ (reader.readEnum());
      msg.setCause(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageService.ActionCallEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageService.ActionCallEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartAt();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEndAt();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCause();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.Cause = {
  CAUSE_NONE: 0,
  CAUSE_CALLEE_REJECTED: 1,
  CAUSE_CALLEE_MISSED: 2
};

/**
 * optional uint64 start_at = 1;
 * @return {number}
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.prototype.getStartAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageService.ActionCallEnd} returns this
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.prototype.setStartAt = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 end_at = 2;
 * @return {number}
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.prototype.getEndAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageService.ActionCallEnd} returns this
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.prototype.setEndAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Cause cause = 3;
 * @return {!proto.v1.Messages.Message.MessageService.ActionCallEnd.Cause}
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.prototype.getCause = function() {
  return /** @type {!proto.v1.Messages.Message.MessageService.ActionCallEnd.Cause} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.v1.Messages.Message.MessageService.ActionCallEnd.Cause} value
 * @return {!proto.v1.Messages.Message.MessageService.ActionCallEnd} returns this
 */
proto.v1.Messages.Message.MessageService.ActionCallEnd.prototype.setCause = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Message.MessageService.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional InputMember from = 2;
 * @return {?proto.v1.Messages.InputMember}
 */
proto.v1.Messages.Message.MessageService.prototype.getFrom = function() {
  return /** @type{?proto.v1.Messages.InputMember} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember, 2));
};


/**
 * @param {?proto.v1.Messages.InputMember|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
*/
proto.v1.Messages.Message.MessageService.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InputMember to = 3;
 * @return {?proto.v1.Messages.InputMember}
 */
proto.v1.Messages.Message.MessageService.prototype.getTo = function() {
  return /** @type{?proto.v1.Messages.InputMember} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember, 3));
};


/**
 * @param {?proto.v1.Messages.InputMember|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
*/
proto.v1.Messages.Message.MessageService.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.v1.Messages.Message.MessageService.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes flags = 6;
 * @return {!(string|Uint8Array)}
 */
proto.v1.Messages.Message.MessageService.prototype.getFlags = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes flags = 6;
 * This is a type-conversion wrapper around `getFlags()`
 * @return {string}
 */
proto.v1.Messages.Message.MessageService.prototype.getFlags_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFlags()));
};


/**
 * optional bytes flags = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFlags()`
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageService.prototype.getFlags_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFlags()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.setFlags = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional ActionChatCreate chat_create = 7;
 * @return {?proto.v1.Messages.Message.MessageService.ActionChatCreate}
 */
proto.v1.Messages.Message.MessageService.prototype.getChatCreate = function() {
  return /** @type{?proto.v1.Messages.Message.MessageService.ActionChatCreate} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageService.ActionChatCreate, 7));
};


/**
 * @param {?proto.v1.Messages.Message.MessageService.ActionChatCreate|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
*/
proto.v1.Messages.Message.MessageService.prototype.setChatCreate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.v1.Messages.Message.MessageService.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.clearChatCreate = function() {
  return this.setChatCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.prototype.hasChatCreate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ActionChatAddUser chat_add_user = 8;
 * @return {?proto.v1.Messages.Message.MessageService.ActionChatAddUser}
 */
proto.v1.Messages.Message.MessageService.prototype.getChatAddUser = function() {
  return /** @type{?proto.v1.Messages.Message.MessageService.ActionChatAddUser} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageService.ActionChatAddUser, 8));
};


/**
 * @param {?proto.v1.Messages.Message.MessageService.ActionChatAddUser|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
*/
proto.v1.Messages.Message.MessageService.prototype.setChatAddUser = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.v1.Messages.Message.MessageService.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.clearChatAddUser = function() {
  return this.setChatAddUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.prototype.hasChatAddUser = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ActionChatDeleteUser chat_delete_user = 9;
 * @return {?proto.v1.Messages.Message.MessageService.ActionChatDeleteUser}
 */
proto.v1.Messages.Message.MessageService.prototype.getChatDeleteUser = function() {
  return /** @type{?proto.v1.Messages.Message.MessageService.ActionChatDeleteUser} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageService.ActionChatDeleteUser, 9));
};


/**
 * @param {?proto.v1.Messages.Message.MessageService.ActionChatDeleteUser|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
*/
proto.v1.Messages.Message.MessageService.prototype.setChatDeleteUser = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.v1.Messages.Message.MessageService.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.clearChatDeleteUser = function() {
  return this.setChatDeleteUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.prototype.hasChatDeleteUser = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ActionChatNameChanged chat_name_changed = 10;
 * @return {?proto.v1.Messages.Message.MessageService.ActionChatNameChanged}
 */
proto.v1.Messages.Message.MessageService.prototype.getChatNameChanged = function() {
  return /** @type{?proto.v1.Messages.Message.MessageService.ActionChatNameChanged} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageService.ActionChatNameChanged, 10));
};


/**
 * @param {?proto.v1.Messages.Message.MessageService.ActionChatNameChanged|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
*/
proto.v1.Messages.Message.MessageService.prototype.setChatNameChanged = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.v1.Messages.Message.MessageService.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.clearChatNameChanged = function() {
  return this.setChatNameChanged(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.prototype.hasChatNameChanged = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ActionChatAddParticipant chat_add_participant = 11;
 * @return {?proto.v1.Messages.Message.MessageService.ActionChatAddParticipant}
 */
proto.v1.Messages.Message.MessageService.prototype.getChatAddParticipant = function() {
  return /** @type{?proto.v1.Messages.Message.MessageService.ActionChatAddParticipant} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageService.ActionChatAddParticipant, 11));
};


/**
 * @param {?proto.v1.Messages.Message.MessageService.ActionChatAddParticipant|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
*/
proto.v1.Messages.Message.MessageService.prototype.setChatAddParticipant = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.v1.Messages.Message.MessageService.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.clearChatAddParticipant = function() {
  return this.setChatAddParticipant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.prototype.hasChatAddParticipant = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ActionChatDeleteParticipant chat_delete_participant = 12;
 * @return {?proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant}
 */
proto.v1.Messages.Message.MessageService.prototype.getChatDeleteParticipant = function() {
  return /** @type{?proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant, 12));
};


/**
 * @param {?proto.v1.Messages.Message.MessageService.ActionChatDeleteParticipant|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
*/
proto.v1.Messages.Message.MessageService.prototype.setChatDeleteParticipant = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.v1.Messages.Message.MessageService.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.clearChatDeleteParticipant = function() {
  return this.setChatDeleteParticipant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.prototype.hasChatDeleteParticipant = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ActionCallEnd call_end = 13;
 * @return {?proto.v1.Messages.Message.MessageService.ActionCallEnd}
 */
proto.v1.Messages.Message.MessageService.prototype.getCallEnd = function() {
  return /** @type{?proto.v1.Messages.Message.MessageService.ActionCallEnd} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageService.ActionCallEnd, 13));
};


/**
 * @param {?proto.v1.Messages.Message.MessageService.ActionCallEnd|undefined} value
 * @return {!proto.v1.Messages.Message.MessageService} returns this
*/
proto.v1.Messages.Message.MessageService.prototype.setCallEnd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.v1.Messages.Message.MessageService.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageService} returns this
 */
proto.v1.Messages.Message.MessageService.prototype.clearCallEnd = function() {
  return this.setCallEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageService.prototype.hasCallEnd = function() {
  return jspb.Message.getField(this, 13) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageEmpty.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageEmpty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageEmpty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageEmpty.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageEmpty}
 */
proto.v1.Messages.Message.MessageEmpty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageEmpty;
  return proto.v1.Messages.Message.MessageEmpty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageEmpty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageEmpty}
 */
proto.v1.Messages.Message.MessageEmpty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageEmpty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageEmpty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageEmpty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageEmpty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Message.MessageEmpty.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageEmpty} returns this
 */
proto.v1.Messages.Message.MessageEmpty.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.Message.MessageRegular.repeatedFields_ = [9,11];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.Messages.Message.MessageRegular.oneofGroups_ = [[20,21,22]];

/**
 * @enum {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaCase = {
  MEDIA_NOT_SET: 0,
  PHOTO: 20,
  DOCUMENT: 21,
  VOICE: 22
};

/**
 * @return {proto.v1.Messages.Message.MessageRegular.MediaCase}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getMediaCase = function() {
  return /** @type {proto.v1.Messages.Message.MessageRegular.MediaCase} */(jspb.Message.computeOneofCase(this, proto.v1.Messages.Message.MessageRegular.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageRegular.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageRegular.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageRegular} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: (f = msg.getFrom()) && proto.v1.Messages.InputMember.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.v1.Messages.InputMember.toObject(includeInstance, f),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0),
    message: jspb.Message.getFieldWithDefault(msg, 5, ""),
    flags: msg.getFlags_asB64(),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 7, 0),
    editedAt: jspb.Message.getFieldWithDefault(msg, 8, 0),
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.v1.Messages.Message.MessageRegular.Entity.toObject, includeInstance),
    refersTo: (f = msg.getRefersTo()) && proto.v1.Messages.Message.toObject(includeInstance, f),
    highlightList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    replyMarkup: (f = msg.getReplyMarkup()) && proto.v1.Messages.ReplyMarkup.toObject(includeInstance, f),
    photo: (f = msg.getPhoto()) && proto.v1.Messages.Message.MessageRegular.MediaPhoto.toObject(includeInstance, f),
    document: (f = msg.getDocument()) && proto.v1.Messages.Message.MessageRegular.MediaDocument.toObject(includeInstance, f),
    voice: (f = msg.getVoice()) && proto.v1.Messages.Message.MessageRegular.MediaVoice.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageRegular}
 */
proto.v1.Messages.Message.MessageRegular.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageRegular;
  return proto.v1.Messages.Message.MessageRegular.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageRegular} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageRegular}
 */
proto.v1.Messages.Message.MessageRegular.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new proto.v1.Messages.InputMember;
      reader.readMessage(value,proto.v1.Messages.InputMember.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFlags(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedAt(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEditedAt(value);
      break;
    case 9:
      var value = new proto.v1.Messages.Message.MessageRegular.Entity;
      reader.readMessage(value,proto.v1.Messages.Message.MessageRegular.Entity.deserializeBinaryFromReader);
      msg.addEntities(value);
      break;
    case 10:
      var value = new proto.v1.Messages.Message;
      reader.readMessage(value,proto.v1.Messages.Message.deserializeBinaryFromReader);
      msg.setRefersTo(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addHighlight(value);
      break;
    case 12:
      var value = new proto.v1.Messages.ReplyMarkup;
      reader.readMessage(value,proto.v1.Messages.ReplyMarkup.deserializeBinaryFromReader);
      msg.setReplyMarkup(value);
      break;
    case 20:
      var value = new proto.v1.Messages.Message.MessageRegular.MediaPhoto;
      reader.readMessage(value,proto.v1.Messages.Message.MessageRegular.MediaPhoto.deserializeBinaryFromReader);
      msg.setPhoto(value);
      break;
    case 21:
      var value = new proto.v1.Messages.Message.MessageRegular.MediaDocument;
      reader.readMessage(value,proto.v1.Messages.Message.MessageRegular.MediaDocument.deserializeBinaryFromReader);
      msg.setDocument(value);
      break;
    case 22:
      var value = new proto.v1.Messages.Message.MessageRegular.MediaVoice;
      reader.readMessage(value,proto.v1.Messages.Message.MessageRegular.MediaVoice.deserializeBinaryFromReader);
      msg.setVoice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageRegular.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageRegular.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageRegular} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.Messages.InputMember.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFlags_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getEditedAt();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.v1.Messages.Message.MessageRegular.Entity.serializeBinaryToWriter
    );
  }
  f = message.getRefersTo();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.v1.Messages.Message.serializeBinaryToWriter
    );
  }
  f = message.getHighlightList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getReplyMarkup();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.v1.Messages.ReplyMarkup.serializeBinaryToWriter
    );
  }
  f = message.getPhoto();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.v1.Messages.Message.MessageRegular.MediaPhoto.serializeBinaryToWriter
    );
  }
  f = message.getDocument();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.v1.Messages.Message.MessageRegular.MediaDocument.serializeBinaryToWriter
    );
  }
  f = message.getVoice();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.v1.Messages.Message.MessageRegular.MediaVoice.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageRegular.MediaPhoto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dcId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0),
    caption: jspb.Message.getFieldWithDefault(msg, 5, ""),
    sizesList: jspb.Message.toObjectList(msg.getSizesList(),
    proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.toObject, includeInstance),
    fileName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    size: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageRegular.MediaPhoto;
  return proto.v1.Messages.Message.MessageRegular.MediaPhoto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDcId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 6:
      var value = new proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size;
      reader.readMessage(value,proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.deserializeBinaryFromReader);
      msg.addSizes(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageRegular.MediaPhoto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDcId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getCaption();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSizesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.serializeBinaryToWriter
    );
  }
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    file: (f = msg.getFile()) && proto.v1.Messages.File.toObject(includeInstance, f),
    w: jspb.Message.getFieldWithDefault(msg, 3, 0),
    h: jspb.Message.getFieldWithDefault(msg, 4, 0),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size;
  return proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.ThumbType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.v1.Messages.File;
      reader.readMessage(value,proto.v1.Messages.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setW(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setH(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.File.serializeBinaryToWriter
    );
  }
  f = message.getW();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getH();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.ThumbType = {
  CROP_128_128: 0,
  CROP_256_256: 1,
  CROP_1024_1024: 2,
  CROP_2048_2048: 3
};

/**
 * optional ThumbType type = 1;
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.ThumbType}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.getType = function() {
  return /** @type {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.ThumbType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.ThumbType} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional File file = 2;
 * @return {?proto.v1.Messages.File}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.getFile = function() {
  return /** @type{?proto.v1.Messages.File} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.File, 2));
};


/**
 * @param {?proto.v1.Messages.File|undefined} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size} returns this
*/
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.hasFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 w = 3;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.setW = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 h = 4;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.getH = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.setH = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 size = 5;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string file_id = 1;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.getFileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.setFileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string access_hash = 2;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.getAccessHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.setAccessHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 dc_id = 3;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.getDcId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.setDcId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string caption = 5;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.setCaption = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Size sizes = 6;
 * @return {!Array<!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size>}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.getSizesList = function() {
  return /** @type{!Array<!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size, 6));
};


/**
 * @param {!Array<!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size>} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} returns this
*/
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.setSizesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.addSizes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.clearSizesList = function() {
  return this.setSizesList([]);
};


/**
 * optional string file_name = 7;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 size = 8;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaPhoto} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaPhoto.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageRegular.MediaDocument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaDocument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dcId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mimeType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fileName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    thumb: (f = msg.getThumb()) && proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaDocument}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageRegular.MediaDocument;
  return proto.v1.Messages.Message.MessageRegular.MediaDocument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaDocument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaDocument}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDcId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimeType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 7:
      var value = new proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size;
      reader.readMessage(value,proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.deserializeBinaryFromReader);
      msg.setThumb(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageRegular.MediaDocument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaDocument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDcId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMimeType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getThumb();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size.serializeBinaryToWriter
    );
  }
};


/**
 * optional string file_id = 1;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.getFileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaDocument} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.setFileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string access_hash = 2;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.getAccessHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaDocument} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.setAccessHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 dc_id = 3;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.getDcId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaDocument} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.setDcId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string mime_type = 4;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaDocument} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 size = 5;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaDocument} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string file_name = 6;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaDocument} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional MediaPhoto.Size thumb = 7;
 * @return {?proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.getThumb = function() {
  return /** @type{?proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size, 7));
};


/**
 * @param {?proto.v1.Messages.Message.MessageRegular.MediaPhoto.Size|undefined} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaDocument} returns this
*/
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.setThumb = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaDocument} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.clearThumb = function() {
  return this.setThumb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageRegular.MediaDocument.prototype.hasThumb = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageRegular.MediaVoice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaVoice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dcId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mimeType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fileName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    duration: jspb.Message.getFieldWithDefault(msg, 7, 0),
    waveform: msg.getWaveform_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaVoice}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageRegular.MediaVoice;
  return proto.v1.Messages.Message.MessageRegular.MediaVoice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaVoice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaVoice}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDcId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimeType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDuration(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setWaveform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageRegular.MediaVoice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageRegular.MediaVoice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDcId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMimeType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getWaveform_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional string file_id = 1;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.getFileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaVoice} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.setFileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string access_hash = 2;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.getAccessHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaVoice} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.setAccessHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 dc_id = 3;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.getDcId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaVoice} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.setDcId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string mime_type = 4;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaVoice} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 size = 5;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaVoice} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string file_name = 6;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaVoice} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 duration = 7;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaVoice} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bytes waveform = 8;
 * @return {!(string|Uint8Array)}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.getWaveform = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes waveform = 8;
 * This is a type-conversion wrapper around `getWaveform()`
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.getWaveform_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getWaveform()));
};


/**
 * optional bytes waveform = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getWaveform()`
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.getWaveform_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getWaveform()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.v1.Messages.Message.MessageRegular.MediaVoice} returns this
 */
proto.v1.Messages.Message.MessageRegular.MediaVoice.prototype.setWaveform = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Message.MessageRegular.Entity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Message.MessageRegular.Entity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.Entity.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    end: jspb.Message.getFieldWithDefault(msg, 2, 0),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Message.MessageRegular.Entity}
 */
proto.v1.Messages.Message.MessageRegular.Entity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Message.MessageRegular.Entity;
  return proto.v1.Messages.Message.MessageRegular.Entity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Message.MessageRegular.Entity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Message.MessageRegular.Entity}
 */
proto.v1.Messages.Message.MessageRegular.Entity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnd(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Message.MessageRegular.Entity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Message.MessageRegular.Entity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Message.MessageRegular.Entity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 start = 1;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.Entity} returns this
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 end = 2;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular.Entity} returns this
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.setEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular.Entity} returns this
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Peer peer = 5;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 5));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.Message.MessageRegular.Entity} returns this
*/
proto.v1.Messages.Message.MessageRegular.Entity.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageRegular.Entity} returns this
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageRegular.Entity.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional InputMember from = 2;
 * @return {?proto.v1.Messages.InputMember}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getFrom = function() {
  return /** @type{?proto.v1.Messages.InputMember} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember, 2));
};


/**
 * @param {?proto.v1.Messages.InputMember|undefined} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
*/
proto.v1.Messages.Message.MessageRegular.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageRegular.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InputMember to = 3;
 * @return {?proto.v1.Messages.InputMember}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getTo = function() {
  return /** @type{?proto.v1.Messages.InputMember} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.InputMember, 3));
};


/**
 * @param {?proto.v1.Messages.InputMember|undefined} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
*/
proto.v1.Messages.Message.MessageRegular.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageRegular.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes flags = 6;
 * @return {!(string|Uint8Array)}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getFlags = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes flags = 6;
 * This is a type-conversion wrapper around `getFlags()`
 * @return {string}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getFlags_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFlags()));
};


/**
 * optional bytes flags = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFlags()`
 * @return {!Uint8Array}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getFlags_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFlags()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.setFlags = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional uint64 updated_at = 7;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 edited_at = 8;
 * @return {number}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getEditedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.setEditedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated Entity entities = 9;
 * @return {!Array<!proto.v1.Messages.Message.MessageRegular.Entity>}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.v1.Messages.Message.MessageRegular.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.Message.MessageRegular.Entity, 9));
};


/**
 * @param {!Array<!proto.v1.Messages.Message.MessageRegular.Entity>} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
*/
proto.v1.Messages.Message.MessageRegular.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.v1.Messages.Message.MessageRegular.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Message.MessageRegular.Entity}
 */
proto.v1.Messages.Message.MessageRegular.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.v1.Messages.Message.MessageRegular.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};


/**
 * optional Message refers_to = 10;
 * @return {?proto.v1.Messages.Message}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getRefersTo = function() {
  return /** @type{?proto.v1.Messages.Message} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message, 10));
};


/**
 * @param {?proto.v1.Messages.Message|undefined} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
*/
proto.v1.Messages.Message.MessageRegular.prototype.setRefersTo = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.clearRefersTo = function() {
  return this.setRefersTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageRegular.prototype.hasRefersTo = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated string highlight = 11;
 * @return {!Array<string>}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getHighlightList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.setHighlightList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.addHighlight = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.clearHighlightList = function() {
  return this.setHighlightList([]);
};


/**
 * optional ReplyMarkup reply_markup = 12;
 * @return {?proto.v1.Messages.ReplyMarkup}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getReplyMarkup = function() {
  return /** @type{?proto.v1.Messages.ReplyMarkup} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.ReplyMarkup, 12));
};


/**
 * @param {?proto.v1.Messages.ReplyMarkup|undefined} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
*/
proto.v1.Messages.Message.MessageRegular.prototype.setReplyMarkup = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.clearReplyMarkup = function() {
  return this.setReplyMarkup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageRegular.prototype.hasReplyMarkup = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional MediaPhoto photo = 20;
 * @return {?proto.v1.Messages.Message.MessageRegular.MediaPhoto}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getPhoto = function() {
  return /** @type{?proto.v1.Messages.Message.MessageRegular.MediaPhoto} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageRegular.MediaPhoto, 20));
};


/**
 * @param {?proto.v1.Messages.Message.MessageRegular.MediaPhoto|undefined} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
*/
proto.v1.Messages.Message.MessageRegular.prototype.setPhoto = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.v1.Messages.Message.MessageRegular.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.clearPhoto = function() {
  return this.setPhoto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageRegular.prototype.hasPhoto = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional MediaDocument document = 21;
 * @return {?proto.v1.Messages.Message.MessageRegular.MediaDocument}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getDocument = function() {
  return /** @type{?proto.v1.Messages.Message.MessageRegular.MediaDocument} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageRegular.MediaDocument, 21));
};


/**
 * @param {?proto.v1.Messages.Message.MessageRegular.MediaDocument|undefined} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
*/
proto.v1.Messages.Message.MessageRegular.prototype.setDocument = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.v1.Messages.Message.MessageRegular.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.clearDocument = function() {
  return this.setDocument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageRegular.prototype.hasDocument = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional MediaVoice voice = 22;
 * @return {?proto.v1.Messages.Message.MessageRegular.MediaVoice}
 */
proto.v1.Messages.Message.MessageRegular.prototype.getVoice = function() {
  return /** @type{?proto.v1.Messages.Message.MessageRegular.MediaVoice} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageRegular.MediaVoice, 22));
};


/**
 * @param {?proto.v1.Messages.Message.MessageRegular.MediaVoice|undefined} value
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
*/
proto.v1.Messages.Message.MessageRegular.prototype.setVoice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.v1.Messages.Message.MessageRegular.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message.MessageRegular} returns this
 */
proto.v1.Messages.Message.MessageRegular.prototype.clearVoice = function() {
  return this.setVoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.MessageRegular.prototype.hasVoice = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional Peer peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.Message.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.Message} returns this
*/
proto.v1.Messages.Message.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message} returns this
 */
proto.v1.Messages.Message.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string idempotency_key = 20;
 * @return {string}
 */
proto.v1.Messages.Message.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Message} returns this
 */
proto.v1.Messages.Message.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional MessageEmpty empty = 2;
 * @return {?proto.v1.Messages.Message.MessageEmpty}
 */
proto.v1.Messages.Message.prototype.getEmpty = function() {
  return /** @type{?proto.v1.Messages.Message.MessageEmpty} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageEmpty, 2));
};


/**
 * @param {?proto.v1.Messages.Message.MessageEmpty|undefined} value
 * @return {!proto.v1.Messages.Message} returns this
*/
proto.v1.Messages.Message.prototype.setEmpty = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.v1.Messages.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message} returns this
 */
proto.v1.Messages.Message.prototype.clearEmpty = function() {
  return this.setEmpty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.prototype.hasEmpty = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageService service = 3;
 * @return {?proto.v1.Messages.Message.MessageService}
 */
proto.v1.Messages.Message.prototype.getService = function() {
  return /** @type{?proto.v1.Messages.Message.MessageService} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageService, 3));
};


/**
 * @param {?proto.v1.Messages.Message.MessageService|undefined} value
 * @return {!proto.v1.Messages.Message} returns this
*/
proto.v1.Messages.Message.prototype.setService = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.v1.Messages.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message} returns this
 */
proto.v1.Messages.Message.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.prototype.hasService = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MessageRegular regular = 4;
 * @return {?proto.v1.Messages.Message.MessageRegular}
 */
proto.v1.Messages.Message.prototype.getRegular = function() {
  return /** @type{?proto.v1.Messages.Message.MessageRegular} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message.MessageRegular, 4));
};


/**
 * @param {?proto.v1.Messages.Message.MessageRegular|undefined} value
 * @return {!proto.v1.Messages.Message} returns this
*/
proto.v1.Messages.Message.prototype.setRegular = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.v1.Messages.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Message} returns this
 */
proto.v1.Messages.Message.prototype.clearRegular = function() {
  return this.setRegular(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Message.prototype.hasRegular = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.File.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.File} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.File.toObject = function(includeInstance, msg) {
  var f, obj = {
    dcId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    secret: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.File}
 */
proto.v1.Messages.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.File;
  return proto.v1.Messages.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.File}
 */
proto.v1.Messages.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDcId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.File.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.File} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.File.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDcId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 dc_id = 1;
 * @return {number}
 */
proto.v1.Messages.File.prototype.getDcId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.File} returns this
 */
proto.v1.Messages.File.prototype.setDcId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string file_id = 2;
 * @return {string}
 */
proto.v1.Messages.File.prototype.getFileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.File} returns this
 */
proto.v1.Messages.File.prototype.setFileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string secret = 3;
 * @return {string}
 */
proto.v1.Messages.File.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.File} returns this
 */
proto.v1.Messages.File.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.StatedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.StatedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.StatedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.StatedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && proto.v1.Messages.Message.toObject(includeInstance, f),
    pts: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.StatedMessage}
 */
proto.v1.Messages.StatedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.StatedMessage;
  return proto.v1.Messages.StatedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.StatedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.StatedMessage}
 */
proto.v1.Messages.StatedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Message;
      reader.readMessage(value,proto.v1.Messages.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.StatedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.StatedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.StatedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.StatedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Message.serializeBinaryToWriter
    );
  }
  f = message.getPts();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional Message message = 1;
 * @return {?proto.v1.Messages.Message}
 */
proto.v1.Messages.StatedMessage.prototype.getMessage = function() {
  return /** @type{?proto.v1.Messages.Message} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message, 1));
};


/**
 * @param {?proto.v1.Messages.Message|undefined} value
 * @return {!proto.v1.Messages.StatedMessage} returns this
*/
proto.v1.Messages.StatedMessage.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.StatedMessage} returns this
 */
proto.v1.Messages.StatedMessage.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.StatedMessage.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 pts = 2;
 * @return {number}
 */
proto.v1.Messages.StatedMessage.prototype.getPts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.StatedMessage} returns this
 */
proto.v1.Messages.StatedMessage.prototype.setPts = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.MessageSentComplex.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.MessageSentComplex.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.MessageSentComplex} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.MessageSentComplex.toObject = function(includeInstance, msg) {
  var f, obj = {
    unacknowledged: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: (f = msg.getMessage()) && proto.v1.Messages.Message.toObject(includeInstance, f),
    pts: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.MessageSentComplex}
 */
proto.v1.Messages.MessageSentComplex.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.MessageSentComplex;
  return proto.v1.Messages.MessageSentComplex.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.MessageSentComplex} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.MessageSentComplex}
 */
proto.v1.Messages.MessageSentComplex.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnacknowledged(value);
      break;
    case 2:
      var value = new proto.v1.Messages.Message;
      reader.readMessage(value,proto.v1.Messages.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.MessageSentComplex.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.MessageSentComplex.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.MessageSentComplex} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.MessageSentComplex.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnacknowledged();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.Message.serializeBinaryToWriter
    );
  }
  f = message.getPts();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional bool unacknowledged = 1;
 * @return {boolean}
 */
proto.v1.Messages.MessageSentComplex.prototype.getUnacknowledged = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.Messages.MessageSentComplex} returns this
 */
proto.v1.Messages.MessageSentComplex.prototype.setUnacknowledged = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Message message = 2;
 * @return {?proto.v1.Messages.Message}
 */
proto.v1.Messages.MessageSentComplex.prototype.getMessage = function() {
  return /** @type{?proto.v1.Messages.Message} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Message, 2));
};


/**
 * @param {?proto.v1.Messages.Message|undefined} value
 * @return {!proto.v1.Messages.MessageSentComplex} returns this
*/
proto.v1.Messages.MessageSentComplex.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.MessageSentComplex} returns this
 */
proto.v1.Messages.MessageSentComplex.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.MessageSentComplex.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 pts = 4;
 * @return {number}
 */
proto.v1.Messages.MessageSentComplex.prototype.getPts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.MessageSentComplex} returns this
 */
proto.v1.Messages.MessageSentComplex.prototype.setPts = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.SearchQuery.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.SearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.SearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.SearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    filterList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    query: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.SearchQuery}
 */
proto.v1.Messages.SearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.SearchQuery;
  return proto.v1.Messages.SearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.SearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.SearchQuery}
 */
proto.v1.Messages.SearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 2:
      var value = /** @type {!Array<!proto.v1.Messages.SearchQuery.MessageFilter>} */ (reader.readPackedEnum());
      msg.setFilterList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.SearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.SearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.SearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.SearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getFilterList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.v1.Messages.SearchQuery.MessageFilter = {
  MESSAGEFILTERNONE: 0,
  MESSAGEFILTERPHOTO: 1,
  MESSAGEFILTERDOCUMENT: 2
};

/**
 * optional Peer peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.SearchQuery.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.SearchQuery} returns this
*/
proto.v1.Messages.SearchQuery.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.SearchQuery} returns this
 */
proto.v1.Messages.SearchQuery.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.SearchQuery.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MessageFilter filter = 2;
 * @return {!Array<!proto.v1.Messages.SearchQuery.MessageFilter>}
 */
proto.v1.Messages.SearchQuery.prototype.getFilterList = function() {
  return /** @type {!Array<!proto.v1.Messages.SearchQuery.MessageFilter>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.v1.Messages.SearchQuery.MessageFilter>} value
 * @return {!proto.v1.Messages.SearchQuery} returns this
 */
proto.v1.Messages.SearchQuery.prototype.setFilterList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.v1.Messages.SearchQuery.MessageFilter} value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.SearchQuery} returns this
 */
proto.v1.Messages.SearchQuery.prototype.addFilter = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.SearchQuery} returns this
 */
proto.v1.Messages.SearchQuery.prototype.clearFilterList = function() {
  return this.setFilterList([]);
};


/**
 * optional string query = 3;
 * @return {string}
 */
proto.v1.Messages.SearchQuery.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.SearchQuery} returns this
 */
proto.v1.Messages.SearchQuery.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.v1.Messages.SearchQuery.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.SearchQuery} returns this
 */
proto.v1.Messages.SearchQuery.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 limit = 5;
 * @return {number}
 */
proto.v1.Messages.SearchQuery.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.SearchQuery} returns this
 */
proto.v1.Messages.SearchQuery.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.Messages.UserAction.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.v1.Messages.UserAction.ActionCase = {
  ACTION_NOT_SET: 0,
  TYPING: 10,
  RECORDING_VOICE: 11
};

/**
 * @return {proto.v1.Messages.UserAction.ActionCase}
 */
proto.v1.Messages.UserAction.prototype.getActionCase = function() {
  return /** @type {proto.v1.Messages.UserAction.ActionCase} */(jspb.Message.computeOneofCase(this, proto.v1.Messages.UserAction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.UserAction.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.UserAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.UserAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.UserAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    typing: (f = msg.getTyping()) && proto.v1.Messages.UserActionTyping.toObject(includeInstance, f),
    recordingVoice: (f = msg.getRecordingVoice()) && proto.v1.Messages.UserActionRecordingVoice.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.UserAction}
 */
proto.v1.Messages.UserAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.UserAction;
  return proto.v1.Messages.UserAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.UserAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.UserAction}
 */
proto.v1.Messages.UserAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 10:
      var value = new proto.v1.Messages.UserActionTyping;
      reader.readMessage(value,proto.v1.Messages.UserActionTyping.deserializeBinaryFromReader);
      msg.setTyping(value);
      break;
    case 11:
      var value = new proto.v1.Messages.UserActionRecordingVoice;
      reader.readMessage(value,proto.v1.Messages.UserActionRecordingVoice.deserializeBinaryFromReader);
      msg.setRecordingVoice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.UserAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.UserAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.UserAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.UserAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getTyping();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.v1.Messages.UserActionTyping.serializeBinaryToWriter
    );
  }
  f = message.getRecordingVoice();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.v1.Messages.UserActionRecordingVoice.serializeBinaryToWriter
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.UserAction.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.UserAction} returns this
*/
proto.v1.Messages.UserAction.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.UserAction} returns this
 */
proto.v1.Messages.UserAction.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.UserAction.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserActionTyping typing = 10;
 * @return {?proto.v1.Messages.UserActionTyping}
 */
proto.v1.Messages.UserAction.prototype.getTyping = function() {
  return /** @type{?proto.v1.Messages.UserActionTyping} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.UserActionTyping, 10));
};


/**
 * @param {?proto.v1.Messages.UserActionTyping|undefined} value
 * @return {!proto.v1.Messages.UserAction} returns this
*/
proto.v1.Messages.UserAction.prototype.setTyping = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.v1.Messages.UserAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.UserAction} returns this
 */
proto.v1.Messages.UserAction.prototype.clearTyping = function() {
  return this.setTyping(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.UserAction.prototype.hasTyping = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional UserActionRecordingVoice recording_voice = 11;
 * @return {?proto.v1.Messages.UserActionRecordingVoice}
 */
proto.v1.Messages.UserAction.prototype.getRecordingVoice = function() {
  return /** @type{?proto.v1.Messages.UserActionRecordingVoice} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.UserActionRecordingVoice, 11));
};


/**
 * @param {?proto.v1.Messages.UserActionRecordingVoice|undefined} value
 * @return {!proto.v1.Messages.UserAction} returns this
*/
proto.v1.Messages.UserAction.prototype.setRecordingVoice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.v1.Messages.UserAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.UserAction} returns this
 */
proto.v1.Messages.UserAction.prototype.clearRecordingVoice = function() {
  return this.setRecordingVoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.UserAction.prototype.hasRecordingVoice = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.UserActionTyping.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.UserActionTyping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.UserActionTyping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.UserActionTyping.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.UserActionTyping}
 */
proto.v1.Messages.UserActionTyping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.UserActionTyping;
  return proto.v1.Messages.UserActionTyping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.UserActionTyping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.UserActionTyping}
 */
proto.v1.Messages.UserActionTyping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.UserActionTyping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.UserActionTyping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.UserActionTyping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.UserActionTyping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.UserActionRecordingVoice.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.UserActionRecordingVoice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.UserActionRecordingVoice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.UserActionRecordingVoice.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.UserActionRecordingVoice}
 */
proto.v1.Messages.UserActionRecordingVoice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.UserActionRecordingVoice;
  return proto.v1.Messages.UserActionRecordingVoice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.UserActionRecordingVoice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.UserActionRecordingVoice}
 */
proto.v1.Messages.UserActionRecordingVoice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.UserActionRecordingVoice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.UserActionRecordingVoice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.UserActionRecordingVoice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.UserActionRecordingVoice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.PinnedDialogs.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.PinnedDialogs.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.PinnedDialogs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.PinnedDialogs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.PinnedDialogs.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tabId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orderList: jspb.Message.toObjectList(msg.getOrderList(),
    proto.v1.Messages.Peer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.PinnedDialogs}
 */
proto.v1.Messages.PinnedDialogs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.PinnedDialogs;
  return proto.v1.Messages.PinnedDialogs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.PinnedDialogs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.PinnedDialogs}
 */
proto.v1.Messages.PinnedDialogs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {!proto.v1.Messages.getConversations.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabId(value);
      break;
    case 2:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.addOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.PinnedDialogs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.PinnedDialogs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.PinnedDialogs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.PinnedDialogs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTabId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
};


/**
 * optional getConversations.Type type = 3;
 * @return {!proto.v1.Messages.getConversations.Type}
 */
proto.v1.Messages.PinnedDialogs.prototype.getType = function() {
  return /** @type {!proto.v1.Messages.getConversations.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.v1.Messages.getConversations.Type} value
 * @return {!proto.v1.Messages.PinnedDialogs} returns this
 */
proto.v1.Messages.PinnedDialogs.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string tab_id = 4;
 * @return {string}
 */
proto.v1.Messages.PinnedDialogs.prototype.getTabId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.PinnedDialogs} returns this
 */
proto.v1.Messages.PinnedDialogs.prototype.setTabId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Peer order = 2;
 * @return {!Array<!proto.v1.Messages.Peer>}
 */
proto.v1.Messages.PinnedDialogs.prototype.getOrderList = function() {
  return /** @type{!Array<!proto.v1.Messages.Peer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.Peer, 2));
};


/**
 * @param {!Array<!proto.v1.Messages.Peer>} value
 * @return {!proto.v1.Messages.PinnedDialogs} returns this
*/
proto.v1.Messages.PinnedDialogs.prototype.setOrderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.v1.Messages.Peer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.Peer}
 */
proto.v1.Messages.PinnedDialogs.prototype.addOrder = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.v1.Messages.Peer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.PinnedDialogs} returns this
 */
proto.v1.Messages.PinnedDialogs.prototype.clearOrderList = function() {
  return this.setOrderList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.PinnedDialogsOrder.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.PinnedDialogsOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.PinnedDialogsOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.PinnedDialogsOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.PinnedDialogsOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderList: jspb.Message.toObjectList(msg.getOrderList(),
    proto.v1.Messages.PinnedDialogsOrder.PeerOrder.toObject, includeInstance),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tabId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.PinnedDialogsOrder}
 */
proto.v1.Messages.PinnedDialogsOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.PinnedDialogsOrder;
  return proto.v1.Messages.PinnedDialogsOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.PinnedDialogsOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.PinnedDialogsOrder}
 */
proto.v1.Messages.PinnedDialogsOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.PinnedDialogsOrder.PeerOrder;
      reader.readMessage(value,proto.v1.Messages.PinnedDialogsOrder.PeerOrder.deserializeBinaryFromReader);
      msg.addOrder(value);
      break;
    case 3:
      var value = /** @type {!proto.v1.Messages.getConversations.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.PinnedDialogsOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.PinnedDialogsOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.PinnedDialogsOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.PinnedDialogsOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.v1.Messages.PinnedDialogsOrder.PeerOrder.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTabId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.PinnedDialogsOrder.PeerOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.PinnedDialogsOrder.PeerOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    order: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.PinnedDialogsOrder.PeerOrder}
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.PinnedDialogsOrder.PeerOrder;
  return proto.v1.Messages.PinnedDialogsOrder.PeerOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.PinnedDialogsOrder.PeerOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.PinnedDialogsOrder.PeerOrder}
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.PinnedDialogsOrder.PeerOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.PinnedDialogsOrder.PeerOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.PinnedDialogsOrder.PeerOrder} returns this
*/
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.PinnedDialogsOrder.PeerOrder} returns this
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 order = 2;
 * @return {number}
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.PinnedDialogsOrder.PeerOrder} returns this
 */
proto.v1.Messages.PinnedDialogsOrder.PeerOrder.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated PeerOrder order = 1;
 * @return {!Array<!proto.v1.Messages.PinnedDialogsOrder.PeerOrder>}
 */
proto.v1.Messages.PinnedDialogsOrder.prototype.getOrderList = function() {
  return /** @type{!Array<!proto.v1.Messages.PinnedDialogsOrder.PeerOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.PinnedDialogsOrder.PeerOrder, 1));
};


/**
 * @param {!Array<!proto.v1.Messages.PinnedDialogsOrder.PeerOrder>} value
 * @return {!proto.v1.Messages.PinnedDialogsOrder} returns this
*/
proto.v1.Messages.PinnedDialogsOrder.prototype.setOrderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.v1.Messages.PinnedDialogsOrder.PeerOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.PinnedDialogsOrder.PeerOrder}
 */
proto.v1.Messages.PinnedDialogsOrder.prototype.addOrder = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.v1.Messages.PinnedDialogsOrder.PeerOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.PinnedDialogsOrder} returns this
 */
proto.v1.Messages.PinnedDialogsOrder.prototype.clearOrderList = function() {
  return this.setOrderList([]);
};


/**
 * optional getConversations.Type type = 3;
 * @return {!proto.v1.Messages.getConversations.Type}
 */
proto.v1.Messages.PinnedDialogsOrder.prototype.getType = function() {
  return /** @type {!proto.v1.Messages.getConversations.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.v1.Messages.getConversations.Type} value
 * @return {!proto.v1.Messages.PinnedDialogsOrder} returns this
 */
proto.v1.Messages.PinnedDialogsOrder.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string tab_id = 4;
 * @return {string}
 */
proto.v1.Messages.PinnedDialogsOrder.prototype.getTabId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.PinnedDialogsOrder} returns this
 */
proto.v1.Messages.PinnedDialogsOrder.prototype.setTabId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.transcript.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.transcript.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.transcript} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.transcript.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    messageId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.transcript}
 */
proto.v1.Messages.transcript.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.transcript;
  return proto.v1.Messages.transcript.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.transcript} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.transcript}
 */
proto.v1.Messages.transcript.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.transcript.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.transcript.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.transcript} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.transcript.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Peer peer = 1;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.transcript.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 1));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.transcript} returns this
*/
proto.v1.Messages.transcript.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.transcript} returns this
 */
proto.v1.Messages.transcript.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.transcript.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message_id = 2;
 * @return {string}
 */
proto.v1.Messages.transcript.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.transcript} returns this
 */
proto.v1.Messages.transcript.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Transcription.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Transcription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Transcription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Transcription.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    unacknowledged: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    text: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Transcription}
 */
proto.v1.Messages.Transcription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Transcription;
  return proto.v1.Messages.Transcription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Transcription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Transcription}
 */
proto.v1.Messages.Transcription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnacknowledged(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Transcription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Transcription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Transcription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Transcription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnacknowledged();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string message_id = 1;
 * @return {string}
 */
proto.v1.Messages.Transcription.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Transcription} returns this
 */
proto.v1.Messages.Transcription.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool unacknowledged = 2;
 * @return {boolean}
 */
proto.v1.Messages.Transcription.prototype.getUnacknowledged = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.Messages.Transcription} returns this
 */
proto.v1.Messages.Transcription.prototype.setUnacknowledged = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string text = 3;
 * @return {string}
 */
proto.v1.Messages.Transcription.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Transcription} returns this
 */
proto.v1.Messages.Transcription.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.Push.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.Push.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.Push} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Push.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    peer: (f = msg.getPeer()) && proto.v1.Messages.Peer.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    text: jspb.Message.getFieldWithDefault(msg, 4, ""),
    badge: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.Push}
 */
proto.v1.Messages.Push.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.Push;
  return proto.v1.Messages.Push.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.Push} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.Push}
 */
proto.v1.Messages.Push.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 2:
      var value = new proto.v1.Messages.Peer;
      reader.readMessage(value,proto.v1.Messages.Peer.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBadge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.Push.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.Push.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.Push} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.Push.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.Peer.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBadge();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.v1.Messages.Push.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Push} returns this
 */
proto.v1.Messages.Push.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Peer peer = 2;
 * @return {?proto.v1.Messages.Peer}
 */
proto.v1.Messages.Push.prototype.getPeer = function() {
  return /** @type{?proto.v1.Messages.Peer} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.Peer, 2));
};


/**
 * @param {?proto.v1.Messages.Peer|undefined} value
 * @return {!proto.v1.Messages.Push} returns this
*/
proto.v1.Messages.Push.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.Push} returns this
 */
proto.v1.Messages.Push.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.Push.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.v1.Messages.Push.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Push} returns this
 */
proto.v1.Messages.Push.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string text = 4;
 * @return {string}
 */
proto.v1.Messages.Push.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.Push} returns this
 */
proto.v1.Messages.Push.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 badge = 5;
 * @return {number}
 */
proto.v1.Messages.Push.prototype.getBadge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.Messages.Push} returns this
 */
proto.v1.Messages.Push.prototype.setBadge = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.Messages.ReplyMarkup.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.v1.Messages.ReplyMarkup.MarkupCase = {
  MARKUP_NOT_SET: 0,
  INLINE_KEYBOARD: 1,
  FORM: 2
};

/**
 * @return {proto.v1.Messages.ReplyMarkup.MarkupCase}
 */
proto.v1.Messages.ReplyMarkup.prototype.getMarkupCase = function() {
  return /** @type {proto.v1.Messages.ReplyMarkup.MarkupCase} */(jspb.Message.computeOneofCase(this, proto.v1.Messages.ReplyMarkup.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.ReplyMarkup.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.ReplyMarkup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.ReplyMarkup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.ReplyMarkup.toObject = function(includeInstance, msg) {
  var f, obj = {
    inlineKeyboard: (f = msg.getInlineKeyboard()) && proto.v1.Messages.ReplyMarkupInlineKeyboard.toObject(includeInstance, f),
    form: (f = msg.getForm()) && proto.v1.Messages.ReplyMarkupForm.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.ReplyMarkup}
 */
proto.v1.Messages.ReplyMarkup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.ReplyMarkup;
  return proto.v1.Messages.ReplyMarkup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.ReplyMarkup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.ReplyMarkup}
 */
proto.v1.Messages.ReplyMarkup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.ReplyMarkupInlineKeyboard;
      reader.readMessage(value,proto.v1.Messages.ReplyMarkupInlineKeyboard.deserializeBinaryFromReader);
      msg.setInlineKeyboard(value);
      break;
    case 2:
      var value = new proto.v1.Messages.ReplyMarkupForm;
      reader.readMessage(value,proto.v1.Messages.ReplyMarkupForm.deserializeBinaryFromReader);
      msg.setForm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.ReplyMarkup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.ReplyMarkup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.ReplyMarkup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.ReplyMarkup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInlineKeyboard();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.Messages.ReplyMarkupInlineKeyboard.serializeBinaryToWriter
    );
  }
  f = message.getForm();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.Messages.ReplyMarkupForm.serializeBinaryToWriter
    );
  }
};


/**
 * optional ReplyMarkupInlineKeyboard inline_keyboard = 1;
 * @return {?proto.v1.Messages.ReplyMarkupInlineKeyboard}
 */
proto.v1.Messages.ReplyMarkup.prototype.getInlineKeyboard = function() {
  return /** @type{?proto.v1.Messages.ReplyMarkupInlineKeyboard} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.ReplyMarkupInlineKeyboard, 1));
};


/**
 * @param {?proto.v1.Messages.ReplyMarkupInlineKeyboard|undefined} value
 * @return {!proto.v1.Messages.ReplyMarkup} returns this
*/
proto.v1.Messages.ReplyMarkup.prototype.setInlineKeyboard = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.v1.Messages.ReplyMarkup.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.ReplyMarkup} returns this
 */
proto.v1.Messages.ReplyMarkup.prototype.clearInlineKeyboard = function() {
  return this.setInlineKeyboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.ReplyMarkup.prototype.hasInlineKeyboard = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReplyMarkupForm form = 2;
 * @return {?proto.v1.Messages.ReplyMarkupForm}
 */
proto.v1.Messages.ReplyMarkup.prototype.getForm = function() {
  return /** @type{?proto.v1.Messages.ReplyMarkupForm} */ (
    jspb.Message.getWrapperField(this, proto.v1.Messages.ReplyMarkupForm, 2));
};


/**
 * @param {?proto.v1.Messages.ReplyMarkupForm|undefined} value
 * @return {!proto.v1.Messages.ReplyMarkup} returns this
*/
proto.v1.Messages.ReplyMarkup.prototype.setForm = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.v1.Messages.ReplyMarkup.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.Messages.ReplyMarkup} returns this
 */
proto.v1.Messages.ReplyMarkup.prototype.clearForm = function() {
  return this.setForm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.Messages.ReplyMarkup.prototype.hasForm = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.ReplyMarkupInlineKeyboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.ReplyMarkupInlineKeyboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    buttonsList: jspb.Message.toObjectList(msg.getButtonsList(),
    proto.v1.Messages.ReplyMarkupInlineKeyboardButton.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.ReplyMarkupInlineKeyboard}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.ReplyMarkupInlineKeyboard;
  return proto.v1.Messages.ReplyMarkupInlineKeyboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.ReplyMarkupInlineKeyboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.ReplyMarkupInlineKeyboard}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.Messages.ReplyMarkupInlineKeyboardButton;
      reader.readMessage(value,proto.v1.Messages.ReplyMarkupInlineKeyboardButton.deserializeBinaryFromReader);
      msg.addButtons(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.ReplyMarkupInlineKeyboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.ReplyMarkupInlineKeyboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getButtonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.v1.Messages.ReplyMarkupInlineKeyboardButton.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ReplyMarkupInlineKeyboardButton buttons = 1;
 * @return {!Array<!proto.v1.Messages.ReplyMarkupInlineKeyboardButton>}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard.prototype.getButtonsList = function() {
  return /** @type{!Array<!proto.v1.Messages.ReplyMarkupInlineKeyboardButton>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.Messages.ReplyMarkupInlineKeyboardButton, 1));
};


/**
 * @param {!Array<!proto.v1.Messages.ReplyMarkupInlineKeyboardButton>} value
 * @return {!proto.v1.Messages.ReplyMarkupInlineKeyboard} returns this
*/
proto.v1.Messages.ReplyMarkupInlineKeyboard.prototype.setButtonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.v1.Messages.ReplyMarkupInlineKeyboardButton=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.Messages.ReplyMarkupInlineKeyboardButton}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard.prototype.addButtons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.v1.Messages.ReplyMarkupInlineKeyboardButton, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.Messages.ReplyMarkupInlineKeyboard} returns this
 */
proto.v1.Messages.ReplyMarkupInlineKeyboard.prototype.clearButtonsList = function() {
  return this.setButtonsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboardButton.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.ReplyMarkupInlineKeyboardButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.ReplyMarkupInlineKeyboardButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.ReplyMarkupInlineKeyboardButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.ReplyMarkupInlineKeyboardButton}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboardButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.ReplyMarkupInlineKeyboardButton;
  return proto.v1.Messages.ReplyMarkupInlineKeyboardButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.ReplyMarkupInlineKeyboardButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.ReplyMarkupInlineKeyboardButton}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboardButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboardButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.ReplyMarkupInlineKeyboardButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.ReplyMarkupInlineKeyboardButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.ReplyMarkupInlineKeyboardButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.v1.Messages.ReplyMarkupInlineKeyboardButton.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.Messages.ReplyMarkupInlineKeyboardButton} returns this
 */
proto.v1.Messages.ReplyMarkupInlineKeyboardButton.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.Messages.ReplyMarkupForm.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.Messages.ReplyMarkupForm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.Messages.ReplyMarkupForm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.ReplyMarkupForm.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.Messages.ReplyMarkupForm}
 */
proto.v1.Messages.ReplyMarkupForm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.Messages.ReplyMarkupForm;
  return proto.v1.Messages.ReplyMarkupForm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.Messages.ReplyMarkupForm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.Messages.ReplyMarkupForm}
 */
proto.v1.Messages.ReplyMarkupForm.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.Messages.ReplyMarkupForm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.Messages.ReplyMarkupForm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.Messages.ReplyMarkupForm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.Messages.ReplyMarkupForm.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.v1);
