// package: services
// file: file/filesystem.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as file_filesystem_pb from "../file/filesystem_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface IFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IFileServiceService_ICreate;
    get: IFileServiceService_IGet;
    list: IFileServiceService_IList;
    listInternal: IFileServiceService_IListInternal;
    trash: IFileServiceService_ITrash;
    delete: IFileServiceService_IDelete;
    copy: IFileServiceService_ICopy;
    rename: IFileServiceService_IRename;
}

interface IFileServiceService_ICreate extends grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo> {
    path: string; // "/services.FileService/Create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
}
interface IFileServiceService_IGet extends grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo> {
    path: string; // "/services.FileService/Get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
}
interface IFileServiceService_IList extends grpc.MethodDefinition<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse> {
    path: string; // "/services.FileService/List"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfoListRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfoListRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfoListResponse>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfoListResponse>;
}
interface IFileServiceService_IListInternal extends grpc.MethodDefinition<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse> {
    path: string; // "/services.FileService/ListInternal"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfoListRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfoListRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfoListResponse>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfoListResponse>;
}
interface IFileServiceService_ITrash extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/Trash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_IDelete extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/Delete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_ICopy extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/Copy"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_IRename extends grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/Rename"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}

export const FileServiceService: IFileServiceService;

export interface IFileServiceServer {
    create: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
    get: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
    list: grpc.handleUnaryCall<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse>;
    listInternal: grpc.handleUnaryCall<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse>;
    trash: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
    delete: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
    copy: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
    rename: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.BatchFileTaskResult>;
}

export interface IFileServiceClient {
    create(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    get(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    get(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    get(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    list(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    trash(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    trash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    trash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    delete(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    delete(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    delete(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    copy(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    copy(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    copy(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    rename(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
}

export class FileServiceClient extends grpc.Client implements IFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public get(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public get(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public get(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public list(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public trash(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public trash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public trash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public delete(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public delete(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public delete(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public copy(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public copy(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public copy(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public rename(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
}

interface IFileNoticeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    onProgress: IFileNoticeServiceService_IOnProgress;
    onComplete: IFileNoticeServiceService_IOnComplete;
    onError: IFileNoticeServiceService_IOnError;
    onCancel: IFileNoticeServiceService_IOnCancel;
}

interface IFileNoticeServiceService_IOnProgress extends grpc.MethodDefinition<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress> {
    path: string; // "/services.FileNoticeService/OnProgress"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskProgress>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskProgress>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskProgress>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskProgress>;
}
interface IFileNoticeServiceService_IOnComplete extends grpc.MethodDefinition<file_filesystem_pb.TaskCompleteEvent, file_filesystem_pb.TaskCompleteEvent> {
    path: string; // "/services.FileNoticeService/OnComplete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskCompleteEvent>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskCompleteEvent>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskCompleteEvent>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskCompleteEvent>;
}
interface IFileNoticeServiceService_IOnError extends grpc.MethodDefinition<file_filesystem_pb.TaskStatusUpdateEvent, file_filesystem_pb.TaskStatusUpdateEvent> {
    path: string; // "/services.FileNoticeService/OnError"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskStatusUpdateEvent>;
}
interface IFileNoticeServiceService_IOnCancel extends grpc.MethodDefinition<file_filesystem_pb.TaskStatusUpdateEvent, file_filesystem_pb.TaskStatusUpdateEvent> {
    path: string; // "/services.FileNoticeService/OnCancel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskStatusUpdateEvent>;
}

export const FileNoticeServiceService: IFileNoticeServiceService;

export interface IFileNoticeServiceServer {
    onProgress: grpc.handleUnaryCall<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress>;
    onComplete: grpc.handleUnaryCall<file_filesystem_pb.TaskCompleteEvent, file_filesystem_pb.TaskCompleteEvent>;
    onError: grpc.handleUnaryCall<file_filesystem_pb.TaskStatusUpdateEvent, file_filesystem_pb.TaskStatusUpdateEvent>;
    onCancel: grpc.handleUnaryCall<file_filesystem_pb.TaskStatusUpdateEvent, file_filesystem_pb.TaskStatusUpdateEvent>;
}

export interface IFileNoticeServiceClient {
    onProgress(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onComplete(request: file_filesystem_pb.TaskCompleteEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    onComplete(request: file_filesystem_pb.TaskCompleteEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    onComplete(request: file_filesystem_pb.TaskCompleteEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    onError(request: file_filesystem_pb.TaskStatusUpdateEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    onError(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    onError(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
}

export class FileNoticeServiceClient extends grpc.Client implements IFileNoticeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public onProgress(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onComplete(request: file_filesystem_pb.TaskCompleteEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    public onComplete(request: file_filesystem_pb.TaskCompleteEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    public onComplete(request: file_filesystem_pb.TaskCompleteEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    public onError(request: file_filesystem_pb.TaskStatusUpdateEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    public onError(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    public onError(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    public onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    public onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    public onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
}
