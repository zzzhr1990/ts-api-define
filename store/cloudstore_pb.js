// source: store/cloudstore.proto
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

goog.exportSymbol('proto.services.CloudStore', null, global);
goog.exportSymbol('proto.services.CloudStoreList', null, global);
goog.exportSymbol('proto.services.UploadTokenRequest', null, global);
goog.exportSymbol('proto.services.WcsUploadToken', null, global);
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
proto.services.WcsUploadToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.WcsUploadToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.WcsUploadToken.displayName = 'proto.services.WcsUploadToken';
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
proto.services.UploadTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.UploadTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.UploadTokenRequest.displayName = 'proto.services.UploadTokenRequest';
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
proto.services.CloudStore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.CloudStore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.CloudStore.displayName = 'proto.services.CloudStore';
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
proto.services.CloudStoreList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.CloudStoreList.repeatedFields_, null);
};
goog.inherits(proto.services.CloudStoreList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.CloudStoreList.displayName = 'proto.services.CloudStoreList';
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
proto.services.WcsUploadToken.prototype.toObject = function(opt_includeInstance) {
  return proto.services.WcsUploadToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.WcsUploadToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.WcsUploadToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    exists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    token: jspb.Message.getFieldWithDefault(msg, 3, ""),
    partUploadUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    directUploadUrl: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.services.WcsUploadToken}
 */
proto.services.WcsUploadToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.WcsUploadToken;
  return proto.services.WcsUploadToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.WcsUploadToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.WcsUploadToken}
 */
proto.services.WcsUploadToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExists(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartUploadUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectUploadUrl(value);
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
proto.services.WcsUploadToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.WcsUploadToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.WcsUploadToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.WcsUploadToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExists();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPartUploadUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDirectUploadUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool exists = 1;
 * @return {boolean}
 */
proto.services.WcsUploadToken.prototype.getExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.WcsUploadToken} returns this
 */
proto.services.WcsUploadToken.prototype.setExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.services.WcsUploadToken.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.WcsUploadToken} returns this
 */
proto.services.WcsUploadToken.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.services.WcsUploadToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.WcsUploadToken} returns this
 */
proto.services.WcsUploadToken.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string part_upload_url = 4;
 * @return {string}
 */
proto.services.WcsUploadToken.prototype.getPartUploadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.WcsUploadToken} returns this
 */
proto.services.WcsUploadToken.prototype.setPartUploadUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string direct_upload_url = 5;
 * @return {string}
 */
proto.services.WcsUploadToken.prototype.getDirectUploadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.WcsUploadToken} returns this
 */
proto.services.WcsUploadToken.prototype.setDirectUploadUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.services.UploadTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.UploadTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.UploadTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.UploadTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userIdentity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hash: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.services.UploadTokenRequest}
 */
proto.services.UploadTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.UploadTokenRequest;
  return proto.services.UploadTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.UploadTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.UploadTokenRequest}
 */
proto.services.UploadTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserIdentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
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
proto.services.UploadTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.UploadTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.UploadTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.UploadTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserIdentity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.services.UploadTokenRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.UploadTokenRequest} returns this
 */
proto.services.UploadTokenRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.services.UploadTokenRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.UploadTokenRequest} returns this
 */
proto.services.UploadTokenRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 user_identity = 3;
 * @return {number}
 */
proto.services.UploadTokenRequest.prototype.getUserIdentity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.UploadTokenRequest} returns this
 */
proto.services.UploadTokenRequest.prototype.setUserIdentity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string hash = 4;
 * @return {string}
 */
proto.services.UploadTokenRequest.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.UploadTokenRequest} returns this
 */
proto.services.UploadTokenRequest.prototype.setHash = function(value) {
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
proto.services.CloudStore.prototype.toObject = function(opt_includeInstance) {
  return proto.services.CloudStore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.CloudStore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.CloudStore.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uploadUser: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ctime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    originalalFilename: jspb.Message.getFieldWithDefault(msg, 6, ""),
    store: jspb.Message.getFieldWithDefault(msg, 7, 0),
    key: jspb.Message.getFieldWithDefault(msg, 8, ""),
    coldKey: jspb.Message.getFieldWithDefault(msg, 9, ""),
    type: jspb.Message.getFieldWithDefault(msg, 10, 0),
    preview: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    previewType: jspb.Message.getFieldWithDefault(msg, 12, 0),
    flag: jspb.Message.getFieldWithDefault(msg, 13, 0),
    status: jspb.Message.getFieldWithDefault(msg, 14, 0),
    fetchTime: jspb.Message.getFieldWithDefault(msg, 15, 0),
    md5: jspb.Message.getFieldWithDefault(msg, 16, ""),
    sha1: jspb.Message.getFieldWithDefault(msg, 17, ""),
    downloadAddress: jspb.Message.getFieldWithDefault(msg, 18, ""),
    ref: jspb.Message.getFieldWithDefault(msg, 19, 0),
    lastDown: jspb.Message.getFieldWithDefault(msg, 20, 0)
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
 * @return {!proto.services.CloudStore}
 */
proto.services.CloudStore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.CloudStore;
  return proto.services.CloudStore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.CloudStore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.CloudStore}
 */
proto.services.CloudStore.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUploadUser(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalalFilename(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStore(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setColdKey(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreview(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPreviewType(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFlag(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFetchTime(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setSha1(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadAddress(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRef(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastDown(value);
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
proto.services.CloudStore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.CloudStore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.CloudStore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.CloudStore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUploadUser();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCtime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getOriginalalFilename();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStore();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getColdKey();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getPreview();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getPreviewType();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getFlag();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getFetchTime();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getSha1();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getDownloadAddress();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getRef();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getLastDown();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.services.CloudStore.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.services.CloudStore.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string mime = 3;
 * @return {string}
 */
proto.services.CloudStore.prototype.getMime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setMime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 upload_user = 4;
 * @return {number}
 */
proto.services.CloudStore.prototype.getUploadUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setUploadUser = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 ctime = 5;
 * @return {number}
 */
proto.services.CloudStore.prototype.getCtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setCtime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string originalal_filename = 6;
 * @return {string}
 */
proto.services.CloudStore.prototype.getOriginalalFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setOriginalalFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 store = 7;
 * @return {number}
 */
proto.services.CloudStore.prototype.getStore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setStore = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string key = 8;
 * @return {string}
 */
proto.services.CloudStore.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string cold_key = 9;
 * @return {string}
 */
proto.services.CloudStore.prototype.getColdKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setColdKey = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 type = 10;
 * @return {number}
 */
proto.services.CloudStore.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool preview = 11;
 * @return {boolean}
 */
proto.services.CloudStore.prototype.getPreview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setPreview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional int32 preview_type = 12;
 * @return {number}
 */
proto.services.CloudStore.prototype.getPreviewType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setPreviewType = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 flag = 13;
 * @return {number}
 */
proto.services.CloudStore.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 status = 14;
 * @return {number}
 */
proto.services.CloudStore.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 fetch_time = 15;
 * @return {number}
 */
proto.services.CloudStore.prototype.getFetchTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setFetchTime = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string md5 = 16;
 * @return {string}
 */
proto.services.CloudStore.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string sha1 = 17;
 * @return {string}
 */
proto.services.CloudStore.prototype.getSha1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setSha1 = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string download_address = 18;
 * @return {string}
 */
proto.services.CloudStore.prototype.getDownloadAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setDownloadAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional int64 ref = 19;
 * @return {number}
 */
proto.services.CloudStore.prototype.getRef = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setRef = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int64 last_down = 20;
 * @return {number}
 */
proto.services.CloudStore.prototype.getLastDown = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CloudStore} returns this
 */
proto.services.CloudStore.prototype.setLastDown = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.CloudStoreList.repeatedFields_ = [1];



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
proto.services.CloudStoreList.prototype.toObject = function(opt_includeInstance) {
  return proto.services.CloudStoreList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.CloudStoreList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.CloudStoreList.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.services.CloudStore.toObject, includeInstance)
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
 * @return {!proto.services.CloudStoreList}
 */
proto.services.CloudStoreList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.CloudStoreList;
  return proto.services.CloudStoreList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.CloudStoreList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.CloudStoreList}
 */
proto.services.CloudStoreList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.services.CloudStore;
      reader.readMessage(value,proto.services.CloudStore.deserializeBinaryFromReader);
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
proto.services.CloudStoreList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.CloudStoreList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.CloudStoreList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.CloudStoreList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.services.CloudStore.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CloudStore data = 1;
 * @return {!Array<!proto.services.CloudStore>}
 */
proto.services.CloudStoreList.prototype.getDataList = function() {
  return /** @type{!Array<!proto.services.CloudStore>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.CloudStore, 1));
};


/**
 * @param {!Array<!proto.services.CloudStore>} value
 * @return {!proto.services.CloudStoreList} returns this
*/
proto.services.CloudStoreList.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.services.CloudStore=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.CloudStore}
 */
proto.services.CloudStoreList.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.services.CloudStore, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.CloudStoreList} returns this
 */
proto.services.CloudStoreList.prototype.clearDataList = function() {
  return this.setDataList([]);
};


goog.object.extend(exports, proto.services);
