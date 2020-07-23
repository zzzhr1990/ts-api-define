// package: services
// file: offline/usertask.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as offline_usertask_pb from "../offline/usertask_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface IUserTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    add: IUserTaskServiceService_Iadd;
    list: IUserTaskServiceService_Ilist;
    delete: IUserTaskServiceService_Idelete;
    get: IUserTaskServiceService_Iget;
    complete: IUserTaskServiceService_Icomplete;
    error: IUserTaskServiceService_Ierror;
    syncTask: IUserTaskServiceService_IsyncTask;
    getListeners: IUserTaskServiceService_IgetListeners;
    updateListener: IUserTaskServiceService_IupdateListener;
    deleteListeners: IUserTaskServiceService_IdeleteListeners;
    fakeCopy: IUserTaskServiceService_IfakeCopy;
    clear: IUserTaskServiceService_Iclear;
}

interface IUserTaskServiceService_Iadd extends grpc.MethodDefinition<offline_usertask_pb.AddUserTaskRequest, offline_usertask_pb.UserTaskList> {
    path: string; // "/services.UserTaskService/add"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.AddUserTaskRequest>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.AddUserTaskRequest>;
    responseSerialize: grpc.serialize<offline_usertask_pb.UserTaskList>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.UserTaskList>;
}
interface IUserTaskServiceService_Ilist extends grpc.MethodDefinition<offline_usertask_pb.ListUserTaskRequest, offline_usertask_pb.UserTaskList> {
    path: string; // "/services.UserTaskService/list"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.ListUserTaskRequest>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.ListUserTaskRequest>;
    responseSerialize: grpc.serialize<offline_usertask_pb.UserTaskList>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.UserTaskList>;
}
interface IUserTaskServiceService_Idelete extends grpc.MethodDefinition<offline_usertask_pb.DeleteUserTaskRequest, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.UserTaskService/delete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.DeleteUserTaskRequest>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.DeleteUserTaskRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IUserTaskServiceService_Iget extends grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask> {
    path: string; // "/services.UserTaskService/get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
    responseSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
}
interface IUserTaskServiceService_Icomplete extends grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask> {
    path: string; // "/services.UserTaskService/complete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
    responseSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
}
interface IUserTaskServiceService_Ierror extends grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask> {
    path: string; // "/services.UserTaskService/error"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
    responseSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
}
interface IUserTaskServiceService_IsyncTask extends grpc.MethodDefinition<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.UserTaskService/syncTask"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IUserTaskServiceService_IgetListeners extends grpc.MethodDefinition<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListenerList> {
    path: string; // "/services.UserTaskService/getListeners"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
    responseSerialize: grpc.serialize<offline_usertask_pb.TaskListenerList>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.TaskListenerList>;
}
interface IUserTaskServiceService_IupdateListener extends grpc.MethodDefinition<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListener> {
    path: string; // "/services.UserTaskService/updateListener"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
    responseSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
}
interface IUserTaskServiceService_IdeleteListeners extends grpc.MethodDefinition<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.UserTaskService/deleteListeners"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IUserTaskServiceService_IfakeCopy extends grpc.MethodDefinition<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListener> {
    path: string; // "/services.UserTaskService/fakeCopy"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
    responseSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
}
interface IUserTaskServiceService_Iclear extends grpc.MethodDefinition<offline_usertask_pb.ClearTaskRequest, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.UserTaskService/clear"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.ClearTaskRequest>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.ClearTaskRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}

export const UserTaskServiceService: IUserTaskServiceService;

export interface IUserTaskServiceServer {
    add: grpc.handleUnaryCall<offline_usertask_pb.AddUserTaskRequest, offline_usertask_pb.UserTaskList>;
    list: grpc.handleUnaryCall<offline_usertask_pb.ListUserTaskRequest, offline_usertask_pb.UserTaskList>;
    delete: grpc.handleUnaryCall<offline_usertask_pb.DeleteUserTaskRequest, common_common_entity_pb.Int64Entity>;
    get: grpc.handleUnaryCall<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask>;
    complete: grpc.handleUnaryCall<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask>;
    error: grpc.handleUnaryCall<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask>;
    syncTask: grpc.handleUnaryCall<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity>;
    getListeners: grpc.handleUnaryCall<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListenerList>;
    updateListener: grpc.handleUnaryCall<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListener>;
    deleteListeners: grpc.handleUnaryCall<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity>;
    fakeCopy: grpc.handleUnaryCall<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListener>;
    clear: grpc.handleUnaryCall<offline_usertask_pb.ClearTaskRequest, common_common_entity_pb.Int64Entity>;
}

export interface IUserTaskServiceClient {
    add(request: offline_usertask_pb.AddUserTaskRequest, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    add(request: offline_usertask_pb.AddUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    add(request: offline_usertask_pb.AddUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    list(request: offline_usertask_pb.ListUserTaskRequest, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    list(request: offline_usertask_pb.ListUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    list(request: offline_usertask_pb.ListUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    delete(request: offline_usertask_pb.DeleteUserTaskRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    delete(request: offline_usertask_pb.DeleteUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    delete(request: offline_usertask_pb.DeleteUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    get(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    get(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    get(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    complete(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    complete(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    complete(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    error(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    error(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    error(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    syncTask(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    syncTask(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    syncTask(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    getListeners(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    getListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    getListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    updateListener(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    updateListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    updateListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    deleteListeners(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    fakeCopy(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    fakeCopy(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    fakeCopy(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    clear(request: offline_usertask_pb.ClearTaskRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    clear(request: offline_usertask_pb.ClearTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    clear(request: offline_usertask_pb.ClearTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
}

export class UserTaskServiceClient extends grpc.Client implements IUserTaskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public add(request: offline_usertask_pb.AddUserTaskRequest, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public add(request: offline_usertask_pb.AddUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public add(request: offline_usertask_pb.AddUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public list(request: offline_usertask_pb.ListUserTaskRequest, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public list(request: offline_usertask_pb.ListUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public list(request: offline_usertask_pb.ListUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public delete(request: offline_usertask_pb.DeleteUserTaskRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public delete(request: offline_usertask_pb.DeleteUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public delete(request: offline_usertask_pb.DeleteUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public get(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public get(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public get(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public complete(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public complete(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public complete(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public error(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public error(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public error(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public syncTask(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public syncTask(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public syncTask(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public getListeners(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    public getListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    public getListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    public updateListener(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    public updateListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    public updateListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    public deleteListeners(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public fakeCopy(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    public fakeCopy(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    public fakeCopy(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    public clear(request: offline_usertask_pb.ClearTaskRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public clear(request: offline_usertask_pb.ClearTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public clear(request: offline_usertask_pb.ClearTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
}
