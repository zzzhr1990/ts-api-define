// package: services
// file: common/common_entity_2.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as common_common_entity_2_pb from "../common/common_entity_2_pb";

interface ICommonServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    testBoolEntity2: ICommonServiceService_ITestBoolEntity2;
}

interface ICommonServiceService_ITestBoolEntity2 extends grpc.MethodDefinition<common_common_entity_2_pb.BoolEntity2, common_common_entity_2_pb.BoolEntity2> {
    path: "/services.CommonService/TestBoolEntity2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_entity_2_pb.BoolEntity2>;
    requestDeserialize: grpc.deserialize<common_common_entity_2_pb.BoolEntity2>;
    responseSerialize: grpc.serialize<common_common_entity_2_pb.BoolEntity2>;
    responseDeserialize: grpc.deserialize<common_common_entity_2_pb.BoolEntity2>;
}

export const CommonServiceService: ICommonServiceService;

export interface ICommonServiceServer {
    testBoolEntity2: grpc.handleUnaryCall<common_common_entity_2_pb.BoolEntity2, common_common_entity_2_pb.BoolEntity2>;
}

export interface ICommonServiceClient {
    testBoolEntity2(request: common_common_entity_2_pb.BoolEntity2, callback: (error: grpc.ServiceError | null, response: common_common_entity_2_pb.BoolEntity2) => void): grpc.ClientUnaryCall;
    testBoolEntity2(request: common_common_entity_2_pb.BoolEntity2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_2_pb.BoolEntity2) => void): grpc.ClientUnaryCall;
    testBoolEntity2(request: common_common_entity_2_pb.BoolEntity2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_2_pb.BoolEntity2) => void): grpc.ClientUnaryCall;
}

export class CommonServiceClient extends grpc.Client implements ICommonServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public testBoolEntity2(request: common_common_entity_2_pb.BoolEntity2, callback: (error: grpc.ServiceError | null, response: common_common_entity_2_pb.BoolEntity2) => void): grpc.ClientUnaryCall;
    public testBoolEntity2(request: common_common_entity_2_pb.BoolEntity2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_2_pb.BoolEntity2) => void): grpc.ClientUnaryCall;
    public testBoolEntity2(request: common_common_entity_2_pb.BoolEntity2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_2_pb.BoolEntity2) => void): grpc.ClientUnaryCall;
}
