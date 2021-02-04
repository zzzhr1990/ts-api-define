// source: store/subtitle.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.services.Subtitle', null, global);
goog.exportSymbol('proto.services.SubtitleListResponse', null, global);
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
proto.services.Subtitle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.Subtitle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.Subtitle.displayName = 'proto.services.Subtitle';
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
proto.services.SubtitleListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.SubtitleListResponse.repeatedFields_, null);
};
goog.inherits(proto.services.SubtitleListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.SubtitleListResponse.displayName = 'proto.services.SubtitleListResponse';
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
proto.services.Subtitle.prototype.toObject = function(opt_includeInstance) {
  return proto.services.Subtitle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.Subtitle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.Subtitle.toObject = function(includeInstance, msg) {
  var f, obj = {
    identity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    index: jspb.Message.getFieldWithDefault(msg, 4, 0),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    language: jspb.Message.getFieldWithDefault(msg, 6, ""),
    handlerName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    codecName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    createTime: jspb.Message.getFieldWithDefault(msg, 9, 0),
    updateTime: jspb.Message.getFieldWithDefault(msg, 10, 0),
    key: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.services.Subtitle}
 */
proto.services.Subtitle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.Subtitle;
  return proto.services.Subtitle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.Subtitle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.Subtitle}
 */
proto.services.Subtitle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setHandlerName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodecName(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateTime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdateTime(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.services.Subtitle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.Subtitle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.Subtitle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.Subtitle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getHandlerName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCodecName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreateTime();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getUpdateTime();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string identity = 1;
 * @return {string}
 */
proto.services.Subtitle.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setIdentity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string hash = 2;
 * @return {string}
 */
proto.services.Subtitle.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 type = 3;
 * @return {number}
 */
proto.services.Subtitle.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 index = 4;
 * @return {number}
 */
proto.services.Subtitle.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.services.Subtitle.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string language = 6;
 * @return {string}
 */
proto.services.Subtitle.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string handler_name = 7;
 * @return {string}
 */
proto.services.Subtitle.prototype.getHandlerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setHandlerName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string codec_name = 8;
 * @return {string}
 */
proto.services.Subtitle.prototype.getCodecName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setCodecName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 create_time = 9;
 * @return {number}
 */
proto.services.Subtitle.prototype.getCreateTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setCreateTime = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 update_time = 10;
 * @return {number}
 */
proto.services.Subtitle.prototype.getUpdateTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setUpdateTime = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string key = 11;
 * @return {string}
 */
proto.services.Subtitle.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.Subtitle} returns this
 */
proto.services.Subtitle.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.SubtitleListResponse.repeatedFields_ = [2];



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
proto.services.SubtitleListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.SubtitleListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.SubtitleListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.SubtitleListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.services.Subtitle.toObject, includeInstance)
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
 * @return {!proto.services.SubtitleListResponse}
 */
proto.services.SubtitleListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.SubtitleListResponse;
  return proto.services.SubtitleListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.SubtitleListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.SubtitleListResponse}
 */
proto.services.SubtitleListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = new proto.services.Subtitle;
      reader.readMessage(value,proto.services.Subtitle.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.services.SubtitleListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.SubtitleListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.SubtitleListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.SubtitleListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.services.Subtitle.serializeBinaryToWriter
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.services.SubtitleListResponse.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.SubtitleListResponse} returns this
 */
proto.services.SubtitleListResponse.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Subtitle data = 2;
 * @return {!Array<!proto.services.Subtitle>}
 */
proto.services.SubtitleListResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.services.Subtitle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.Subtitle, 2));
};


/**
 * @param {!Array<!proto.services.Subtitle>} value
 * @return {!proto.services.SubtitleListResponse} returns this
*/
proto.services.SubtitleListResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.services.Subtitle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.Subtitle}
 */
proto.services.SubtitleListResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.services.Subtitle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.SubtitleListResponse} returns this
 */
proto.services.SubtitleListResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


goog.object.extend(exports, proto.services);
