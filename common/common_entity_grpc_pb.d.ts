// package: services
// file: common/common_entity.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface ICommonTestServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    testBoolEntity: ICommonTestServiceService_ITestBoolEntity;
}

interface ICommonTestServiceService_ITestBoolEntity extends grpc.MethodDefinition<common_common_entity_pb.BoolEntity, common_common_entity_pb.BoolEntity> {
    path: "/services.CommonTestService/TestBoolEntity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_entity_pb.BoolEntity>;
    requestDeserialize: grpc.deserialize<common_common_entity_pb.BoolEntity>;
    responseSerialize: grpc.serialize<common_common_entity_pb.BoolEntity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.BoolEntity>;
}

export const CommonTestServiceService: ICommonTestServiceService;

export interface ICommonTestServiceServer {
    testBoolEntity: grpc.handleUnaryCall<common_common_entity_pb.BoolEntity, common_common_entity_pb.BoolEntity>;
}

export interface ICommonTestServiceClient {
    testBoolEntity(request: common_common_entity_pb.BoolEntity, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    testBoolEntity(request: common_common_entity_pb.BoolEntity, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    testBoolEntity(request: common_common_entity_pb.BoolEntity, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
}

export class CommonTestServiceClient extends grpc.Client implements ICommonTestServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public testBoolEntity(request: common_common_entity_pb.BoolEntity, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public testBoolEntity(request: common_common_entity_pb.BoolEntity, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public testBoolEntity(request: common_common_entity_pb.BoolEntity, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
}
