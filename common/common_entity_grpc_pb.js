// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_BoolEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.BoolEntity)) {
    throw new Error('Expected argument of type services.BoolEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BoolEntity(buffer_arg) {
  return common_common_entity_pb.BoolEntity.deserializeBinary(new Uint8Array(buffer_arg));
}


var CommonTestServiceService = exports.CommonTestServiceService = {
  testBoolEntity: {
    path: '/services.CommonTestService/TestBoolEntity',
    requestStream: false,
    responseStream: false,
    requestType: common_common_entity_pb.BoolEntity,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_BoolEntity,
    requestDeserialize: deserialize_services_BoolEntity,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
};

exports.CommonTestServiceClient = grpc.makeGenericClientConstructor(CommonTestServiceService);
