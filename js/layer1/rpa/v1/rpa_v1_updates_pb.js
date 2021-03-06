// source: layer1/rpa/v1/rpa_v1_updates.proto
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

var layer1_rpa_v1_rpa_v1_request_pb = require('../../../layer1/rpa/v1/rpa_v1_request_pb.js');
goog.object.extend(proto, layer1_rpa_v1_rpa_v1_request_pb);
goog.exportSymbol('proto.v1.rpa.v1.RequestChangedUpdate', null, global);
goog.exportSymbol('proto.v1.rpa.v1.RequestChangedUpdateChange', null, global);
goog.exportSymbol('proto.v1.rpa.v1.RequestChangedUpdateChange.ChangeCase', null, global);
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
proto.v1.rpa.v1.RequestChangedUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.rpa.v1.RequestChangedUpdate.repeatedFields_, null);
};
goog.inherits(proto.v1.rpa.v1.RequestChangedUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.rpa.v1.RequestChangedUpdate.displayName = 'proto.v1.rpa.v1.RequestChangedUpdate';
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
proto.v1.rpa.v1.RequestChangedUpdateChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.rpa.v1.RequestChangedUpdateChange.oneofGroups_);
};
goog.inherits(proto.v1.rpa.v1.RequestChangedUpdateChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.rpa.v1.RequestChangedUpdateChange.displayName = 'proto.v1.rpa.v1.RequestChangedUpdateChange';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.rpa.v1.RequestChangedUpdate.repeatedFields_ = [1];



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
proto.v1.rpa.v1.RequestChangedUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.rpa.v1.RequestChangedUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.rpa.v1.RequestChangedUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.rpa.v1.RequestChangedUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    changesList: jspb.Message.toObjectList(msg.getChangesList(),
    proto.v1.rpa.v1.RequestChangedUpdateChange.toObject, includeInstance),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.v1.rpa.v1.RequestChangedUpdate}
 */
proto.v1.rpa.v1.RequestChangedUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.rpa.v1.RequestChangedUpdate;
  return proto.v1.rpa.v1.RequestChangedUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.rpa.v1.RequestChangedUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.rpa.v1.RequestChangedUpdate}
 */
proto.v1.rpa.v1.RequestChangedUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.rpa.v1.RequestChangedUpdateChange;
      reader.readMessage(value,proto.v1.rpa.v1.RequestChangedUpdateChange.deserializeBinaryFromReader);
      msg.addChanges(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedAt(value);
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
proto.v1.rpa.v1.RequestChangedUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.rpa.v1.RequestChangedUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.rpa.v1.RequestChangedUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.rpa.v1.RequestChangedUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.v1.rpa.v1.RequestChangedUpdateChange.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * repeated RequestChangedUpdateChange changes = 1;
 * @return {!Array<!proto.v1.rpa.v1.RequestChangedUpdateChange>}
 */
proto.v1.rpa.v1.RequestChangedUpdate.prototype.getChangesList = function() {
  return /** @type{!Array<!proto.v1.rpa.v1.RequestChangedUpdateChange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.v1.rpa.v1.RequestChangedUpdateChange, 1));
};


/**
 * @param {!Array<!proto.v1.rpa.v1.RequestChangedUpdateChange>} value
 * @return {!proto.v1.rpa.v1.RequestChangedUpdate} returns this
*/
proto.v1.rpa.v1.RequestChangedUpdate.prototype.setChangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.v1.rpa.v1.RequestChangedUpdateChange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange}
 */
proto.v1.rpa.v1.RequestChangedUpdate.prototype.addChanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.v1.rpa.v1.RequestChangedUpdateChange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.rpa.v1.RequestChangedUpdate} returns this
 */
proto.v1.rpa.v1.RequestChangedUpdate.prototype.clearChangesList = function() {
  return this.setChangesList([]);
};


/**
 * optional uint64 updated_at = 2;
 * @return {number}
 */
proto.v1.rpa.v1.RequestChangedUpdate.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.rpa.v1.RequestChangedUpdate} returns this
 */
proto.v1.rpa.v1.RequestChangedUpdate.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.ChangeCase = {
  CHANGE_NOT_SET: 0,
  STATUS: 1,
  RESPONSIBLE: 2,
  FIELD: 3,
  ARCHIVED: 4
};

/**
 * @return {proto.v1.rpa.v1.RequestChangedUpdateChange.ChangeCase}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.getChangeCase = function() {
  return /** @type {proto.v1.rpa.v1.RequestChangedUpdateChange.ChangeCase} */(jspb.Message.computeOneofCase(this, proto.v1.rpa.v1.RequestChangedUpdateChange.oneofGroups_[0]));
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
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.rpa.v1.RequestChangedUpdateChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.rpa.v1.RequestChangedUpdateChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && layer1_rpa_v1_rpa_v1_request_pb.RequestStatus.toObject(includeInstance, f),
    responsible: jspb.Message.getFieldWithDefault(msg, 2, ""),
    field: (f = msg.getField()) && layer1_rpa_v1_rpa_v1_request_pb.RequestFieldValue.toObject(includeInstance, f),
    archived: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.rpa.v1.RequestChangedUpdateChange;
  return proto.v1.rpa.v1.RequestChangedUpdateChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.rpa.v1.RequestChangedUpdateChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new layer1_rpa_v1_rpa_v1_request_pb.RequestStatus;
      reader.readMessage(value,layer1_rpa_v1_rpa_v1_request_pb.RequestStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsible(value);
      break;
    case 3:
      var value = new layer1_rpa_v1_rpa_v1_request_pb.RequestFieldValue;
      reader.readMessage(value,layer1_rpa_v1_rpa_v1_request_pb.RequestFieldValue.deserializeBinaryFromReader);
      msg.setField(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArchived(value);
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
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.rpa.v1.RequestChangedUpdateChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.rpa.v1.RequestChangedUpdateChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      layer1_rpa_v1_rpa_v1_request_pb.RequestStatus.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getField();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      layer1_rpa_v1_rpa_v1_request_pb.RequestFieldValue.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional RequestStatus status = 1;
 * @return {?proto.v1.rpa.v1.RequestStatus}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.getStatus = function() {
  return /** @type{?proto.v1.rpa.v1.RequestStatus} */ (
    jspb.Message.getWrapperField(this, layer1_rpa_v1_rpa_v1_request_pb.RequestStatus, 1));
};


/**
 * @param {?proto.v1.rpa.v1.RequestStatus|undefined} value
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange} returns this
*/
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.setStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.v1.rpa.v1.RequestChangedUpdateChange.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange} returns this
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string responsible = 2;
 * @return {string}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.getResponsible = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange} returns this
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.setResponsible = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.v1.rpa.v1.RequestChangedUpdateChange.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange} returns this
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.clearResponsible = function() {
  return jspb.Message.setOneofField(this, 2, proto.v1.rpa.v1.RequestChangedUpdateChange.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.hasResponsible = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RequestFieldValue field = 3;
 * @return {?proto.v1.rpa.v1.RequestFieldValue}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.getField = function() {
  return /** @type{?proto.v1.rpa.v1.RequestFieldValue} */ (
    jspb.Message.getWrapperField(this, layer1_rpa_v1_rpa_v1_request_pb.RequestFieldValue, 3));
};


/**
 * @param {?proto.v1.rpa.v1.RequestFieldValue|undefined} value
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange} returns this
*/
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.setField = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.v1.rpa.v1.RequestChangedUpdateChange.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange} returns this
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.clearField = function() {
  return this.setField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.hasField = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool archived = 4;
 * @return {boolean}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.getArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange} returns this
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.setArchived = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.v1.rpa.v1.RequestChangedUpdateChange.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.rpa.v1.RequestChangedUpdateChange} returns this
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.clearArchived = function() {
  return jspb.Message.setOneofField(this, 4, proto.v1.rpa.v1.RequestChangedUpdateChange.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.rpa.v1.RequestChangedUpdateChange.prototype.hasArchived = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.v1.rpa.v1);
