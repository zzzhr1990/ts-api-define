// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var file_filesystem_pb = require('../file/filesystem_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_BatchFileTaskRequest(arg) {
  if (!(arg instanceof file_filesystem_pb.BatchFileTaskRequest)) {
    throw new Error('Expected argument of type services.BatchFileTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BatchFileTaskRequest(buffer_arg) {
  return file_filesystem_pb.BatchFileTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_BatchFileTaskResult(arg) {
  if (!(arg instanceof file_filesystem_pb.BatchFileTaskResult)) {
    throw new Error('Expected argument of type services.BatchFileTaskResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BatchFileTaskResult(buffer_arg) {
  return file_filesystem_pb.BatchFileTaskResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileInfo(arg) {
  if (!(arg instanceof file_filesystem_pb.FileInfo)) {
    throw new Error('Expected argument of type services.FileInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileInfo(buffer_arg) {
  return file_filesystem_pb.FileInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileInfoListRequest(arg) {
  if (!(arg instanceof file_filesystem_pb.FileInfoListRequest)) {
    throw new Error('Expected argument of type services.FileInfoListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileInfoListRequest(buffer_arg) {
  return file_filesystem_pb.FileInfoListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileInfoListResponse(arg) {
  if (!(arg instanceof file_filesystem_pb.FileInfoListResponse)) {
    throw new Error('Expected argument of type services.FileInfoListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileInfoListResponse(buffer_arg) {
  return file_filesystem_pb.FileInfoListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TaskCompleteEvent(arg) {
  if (!(arg instanceof file_filesystem_pb.TaskCompleteEvent)) {
    throw new Error('Expected argument of type services.TaskCompleteEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TaskCompleteEvent(buffer_arg) {
  return file_filesystem_pb.TaskCompleteEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TaskProgress(arg) {
  if (!(arg instanceof file_filesystem_pb.TaskProgress)) {
    throw new Error('Expected argument of type services.TaskProgress');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TaskProgress(buffer_arg) {
  return file_filesystem_pb.TaskProgress.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TaskStatusUpdateEvent(arg) {
  if (!(arg instanceof file_filesystem_pb.TaskStatusUpdateEvent)) {
    throw new Error('Expected argument of type services.TaskStatusUpdateEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TaskStatusUpdateEvent(buffer_arg) {
  return file_filesystem_pb.TaskStatusUpdateEvent.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileServiceService = exports.FileServiceService = {
  create: {
    path: '/services.FileService/Create',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.FileInfo,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_FileInfo,
    responseDeserialize: deserialize_services_FileInfo,
  },
  get: {
    path: '/services.FileService/Get',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.FileInfo,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_FileInfo,
    responseDeserialize: deserialize_services_FileInfo,
  },
  // rpc CreateInternal (FileInfo) returns (FileInfo) {}
list: {
    path: '/services.FileService/List',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfoListRequest,
    responseType: file_filesystem_pb.FileInfoListResponse,
    requestSerialize: serialize_services_FileInfoListRequest,
    requestDeserialize: deserialize_services_FileInfoListRequest,
    responseSerialize: serialize_services_FileInfoListResponse,
    responseDeserialize: deserialize_services_FileInfoListResponse,
  },
  listInternal: {
    path: '/services.FileService/ListInternal',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfoListRequest,
    responseType: file_filesystem_pb.FileInfoListResponse,
    requestSerialize: serialize_services_FileInfoListRequest,
    requestDeserialize: deserialize_services_FileInfoListRequest,
    responseSerialize: serialize_services_FileInfoListResponse,
    responseDeserialize: deserialize_services_FileInfoListResponse,
  },
  trash: {
    path: '/services.FileService/Trash',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  delete: {
    path: '/services.FileService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  copy: {
    path: '/services.FileService/Copy',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  rename: {
    path: '/services.FileService/Rename',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
var FileNoticeServiceService = exports.FileNoticeServiceService = {
  onProgress: {
    path: '/services.FileNoticeService/OnProgress',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskProgress,
    responseType: file_filesystem_pb.TaskProgress,
    requestSerialize: serialize_services_TaskProgress,
    requestDeserialize: deserialize_services_TaskProgress,
    responseSerialize: serialize_services_TaskProgress,
    responseDeserialize: deserialize_services_TaskProgress,
  },
  onComplete: {
    path: '/services.FileNoticeService/OnComplete',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskCompleteEvent,
    responseType: file_filesystem_pb.TaskCompleteEvent,
    requestSerialize: serialize_services_TaskCompleteEvent,
    requestDeserialize: deserialize_services_TaskCompleteEvent,
    responseSerialize: serialize_services_TaskCompleteEvent,
    responseDeserialize: deserialize_services_TaskCompleteEvent,
  },
  onError: {
    path: '/services.FileNoticeService/OnError',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskStatusUpdateEvent,
    responseType: file_filesystem_pb.TaskStatusUpdateEvent,
    requestSerialize: serialize_services_TaskStatusUpdateEvent,
    requestDeserialize: deserialize_services_TaskStatusUpdateEvent,
    responseSerialize: serialize_services_TaskStatusUpdateEvent,
    responseDeserialize: deserialize_services_TaskStatusUpdateEvent,
  },
  onCancel: {
    path: '/services.FileNoticeService/OnCancel',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskStatusUpdateEvent,
    responseType: file_filesystem_pb.TaskStatusUpdateEvent,
    requestSerialize: serialize_services_TaskStatusUpdateEvent,
    requestDeserialize: deserialize_services_TaskStatusUpdateEvent,
    responseSerialize: serialize_services_TaskStatusUpdateEvent,
    responseDeserialize: deserialize_services_TaskStatusUpdateEvent,
  },
};

exports.FileNoticeServiceClient = grpc.makeGenericClientConstructor(FileNoticeServiceService);
