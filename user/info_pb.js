// source: user/info.proto
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

goog.exportSymbol('proto.services.Balance', null, global);
goog.exportSymbol('proto.services.PasswordPair', null, global);
goog.exportSymbol('proto.services.User', null, global);
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
proto.services.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.User.displayName = 'proto.services.User';
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
proto.services.Balance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.Balance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.Balance.displayName = 'proto.services.Balance';
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
proto.services.PasswordPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.PasswordPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.PasswordPair.displayName = 'proto.services.PasswordPair';
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
proto.services.User.prototype.toObject = function(opt_includeInstance) {
  return proto.services.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    identity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    salt: jspb.Message.getFieldWithDefault(msg, 4, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 6, ""),
    email: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createTime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    createAddr: jspb.Message.getFieldWithDefault(msg, 9, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 10, ""),
    spaceUsed: jspb.Message.getFieldWithDefault(msg, 11, 0),
    spaceCapacity: jspb.Message.getFieldWithDefault(msg, 12, 0),
    type: jspb.Message.getFieldWithDefault(msg, 13, 0),
    status: jspb.Message.getFieldWithDefault(msg, 14, 0),
    version: jspb.Message.getFieldWithDefault(msg, 15, 0)
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
 * @return {!proto.services.User}
 */
proto.services.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.User;
  return proto.services.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.User}
 */
proto.services.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIdentity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSalt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateTime(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateAddr(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSpaceUsed(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSpaceCapacity(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
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
proto.services.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentity();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSalt();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreateTime();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getCreateAddr();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSpaceUsed();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getSpaceCapacity();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getType();
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
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
};


/**
 * optional int64 identity = 1;
 * @return {number}
 */
proto.services.User.prototype.getIdentity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setIdentity = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.services.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.services.User.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string salt = 4;
 * @return {string}
 */
proto.services.User.prototype.getSalt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setSalt = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string countryCode = 5;
 * @return {string}
 */
proto.services.User.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string phone = 6;
 * @return {string}
 */
proto.services.User.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string email = 7;
 * @return {string}
 */
proto.services.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 create_time = 8;
 * @return {number}
 */
proto.services.User.prototype.getCreateTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setCreateTime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string create_addr = 9;
 * @return {string}
 */
proto.services.User.prototype.getCreateAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setCreateAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string icon = 10;
 * @return {string}
 */
proto.services.User.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 space_used = 11;
 * @return {number}
 */
proto.services.User.prototype.getSpaceUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setSpaceUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 space_capacity = 12;
 * @return {number}
 */
proto.services.User.prototype.getSpaceCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setSpaceCapacity = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 type = 13;
 * @return {number}
 */
proto.services.User.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 status = 14;
 * @return {number}
 */
proto.services.User.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 version = 15;
 * @return {number}
 */
proto.services.User.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.User} returns this
 */
proto.services.User.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
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
proto.services.Balance.prototype.toObject = function(opt_includeInstance) {
  return proto.services.Balance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.Balance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.Balance.toObject = function(includeInstance, msg) {
  var f, obj = {
    identity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spaceUsed: jspb.Message.getFieldWithDefault(msg, 2, 0),
    spaceLimit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    trafficUsed: jspb.Message.getFieldWithDefault(msg, 4, 0),
    trafficLimit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    offlineTaskUsed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    offlineTaskLimit: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.services.Balance}
 */
proto.services.Balance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.Balance;
  return proto.services.Balance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.Balance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.Balance}
 */
proto.services.Balance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIdentity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSpaceUsed(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSpaceLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTrafficUsed(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTrafficLimit(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOfflineTaskUsed(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOfflineTaskLimit(value);
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
proto.services.Balance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.Balance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.Balance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.Balance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentity();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSpaceUsed();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSpaceLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTrafficUsed();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTrafficLimit();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getOfflineTaskUsed();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getOfflineTaskLimit();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional int64 identity = 1;
 * @return {number}
 */
proto.services.Balance.prototype.getIdentity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Balance} returns this
 */
proto.services.Balance.prototype.setIdentity = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 space_used = 2;
 * @return {number}
 */
proto.services.Balance.prototype.getSpaceUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Balance} returns this
 */
proto.services.Balance.prototype.setSpaceUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 space_limit = 3;
 * @return {number}
 */
proto.services.Balance.prototype.getSpaceLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Balance} returns this
 */
proto.services.Balance.prototype.setSpaceLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 traffic_used = 4;
 * @return {number}
 */
proto.services.Balance.prototype.getTrafficUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Balance} returns this
 */
proto.services.Balance.prototype.setTrafficUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 traffic_limit = 5;
 * @return {number}
 */
proto.services.Balance.prototype.getTrafficLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Balance} returns this
 */
proto.services.Balance.prototype.setTrafficLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 offline_task_used = 6;
 * @return {number}
 */
proto.services.Balance.prototype.getOfflineTaskUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Balance} returns this
 */
proto.services.Balance.prototype.setOfflineTaskUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 offline_task_limit = 7;
 * @return {number}
 */
proto.services.Balance.prototype.getOfflineTaskLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.Balance} returns this
 */
proto.services.Balance.prototype.setOfflineTaskLimit = function(value) {
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
proto.services.PasswordPair.prototype.toObject = function(opt_includeInstance) {
  return proto.services.PasswordPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.PasswordPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.PasswordPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    identity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    oldPassword: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newPassword: jspb.Message.getFieldWithDefault(msg, 3, ""),
    direct: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.services.PasswordPair}
 */
proto.services.PasswordPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.PasswordPair;
  return proto.services.PasswordPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.PasswordPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.PasswordPair}
 */
proto.services.PasswordPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIdentity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDirect(value);
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
proto.services.PasswordPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.PasswordPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.PasswordPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.PasswordPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentity();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOldPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDirect();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int64 identity = 1;
 * @return {number}
 */
proto.services.PasswordPair.prototype.getIdentity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.PasswordPair} returns this
 */
proto.services.PasswordPair.prototype.setIdentity = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string old_password = 2;
 * @return {string}
 */
proto.services.PasswordPair.prototype.getOldPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.PasswordPair} returns this
 */
proto.services.PasswordPair.prototype.setOldPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_password = 3;
 * @return {string}
 */
proto.services.PasswordPair.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.PasswordPair} returns this
 */
proto.services.PasswordPair.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool direct = 4;
 * @return {boolean}
 */
proto.services.PasswordPair.prototype.getDirect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.PasswordPair} returns this
 */
proto.services.PasswordPair.prototype.setDirect = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


goog.object.extend(exports, proto.services);
