// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var common_common_entity_2_pb = require('../common/common_entity_2_pb.js');

function serialize_services_BoolEntity2(arg) {
  if (!(arg instanceof common_common_entity_2_pb.BoolEntity2)) {
    throw new Error('Expected argument of type services.BoolEntity2');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BoolEntity2(buffer_arg) {
  return common_common_entity_2_pb.BoolEntity2.deserializeBinary(new Uint8Array(buffer_arg));
}


var CommonServiceService = exports.CommonServiceService = {
  testBoolEntity2: {
    path: '/services.CommonService/TestBoolEntity2',
    requestStream: false,
    responseStream: false,
    requestType: common_common_entity_2_pb.BoolEntity2,
    responseType: common_common_entity_2_pb.BoolEntity2,
    requestSerialize: serialize_services_BoolEntity2,
    requestDeserialize: deserialize_services_BoolEntity2,
    responseSerialize: serialize_services_BoolEntity2,
    responseDeserialize: deserialize_services_BoolEntity2,
  },
};

exports.CommonServiceClient = grpc.makeGenericClientConstructor(CommonServiceService);
