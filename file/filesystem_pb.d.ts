// package: services
// file: file/filesystem.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class TaskProgress extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): TaskProgress;

    getUserIdentity(): number;
    setUserIdentity(value: number): TaskProgress;

    getType(): number;
    setType(value: number): TaskProgress;

    getName(): string;
    setName(value: string): TaskProgress;

    getProgress(): number;
    setProgress(value: number): TaskProgress;

    getSize(): number;
    setSize(value: number): TaskProgress;

    getCount(): number;
    setCount(value: number): TaskProgress;


    hasSource(): boolean;
    clearSource(): void;
    getSource(): FileInfo | undefined;
    setSource(value?: FileInfo): TaskProgress;


    hasDestination(): boolean;
    clearDestination(): void;
    getDestination(): FileInfo | undefined;
    setDestination(value?: FileInfo): TaskProgress;

    getStatus(): number;
    setStatus(value: number): TaskProgress;

    getAction(): string;
    setAction(value: string): TaskProgress;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskProgress.AsObject;
    static toObject(includeInstance: boolean, msg: TaskProgress): TaskProgress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskProgress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskProgress;
    static deserializeBinaryFromReader(message: TaskProgress, reader: jspb.BinaryReader): TaskProgress;
}

export namespace TaskProgress {
    export type AsObject = {
        identity: string,
        userIdentity: number,
        type: number,
        name: string,
        progress: number,
        size: number,
        count: number,
        source?: FileInfo.AsObject,
        destination?: FileInfo.AsObject,
        status: number,
        action: string,
    }
}

export class TaskCompleteEvent extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): TaskCompleteEvent;

    getUserIdentity(): number;
    setUserIdentity(value: number): TaskCompleteEvent;

    getType(): number;
    setType(value: number): TaskCompleteEvent;

    getName(): string;
    setName(value: string): TaskCompleteEvent;


    hasSource(): boolean;
    clearSource(): void;
    getSource(): FileInfo | undefined;
    setSource(value?: FileInfo): TaskCompleteEvent;


    hasDestination(): boolean;
    clearDestination(): void;
    getDestination(): FileInfo | undefined;
    setDestination(value?: FileInfo): TaskCompleteEvent;

    getCount(): number;
    setCount(value: number): TaskCompleteEvent;

    getStatus(): number;
    setStatus(value: number): TaskCompleteEvent;

    getErrorCode(): number;
    setErrorCode(value: number): TaskCompleteEvent;

    getErrorMessage(): string;
    setErrorMessage(value: string): TaskCompleteEvent;

    getAction(): string;
    setAction(value: string): TaskCompleteEvent;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskCompleteEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TaskCompleteEvent): TaskCompleteEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskCompleteEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskCompleteEvent;
    static deserializeBinaryFromReader(message: TaskCompleteEvent, reader: jspb.BinaryReader): TaskCompleteEvent;
}

export namespace TaskCompleteEvent {
    export type AsObject = {
        identity: string,
        userIdentity: number,
        type: number,
        name: string,
        source?: FileInfo.AsObject,
        destination?: FileInfo.AsObject,
        count: number,
        status: number,
        errorCode: number,
        errorMessage: string,
        action: string,
    }
}

export class TaskStatusUpdateEvent extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): TaskStatusUpdateEvent;

    getUserIdentity(): number;
    setUserIdentity(value: number): TaskStatusUpdateEvent;

    getType(): number;
    setType(value: number): TaskStatusUpdateEvent;

    getName(): string;
    setName(value: string): TaskStatusUpdateEvent;


    hasSource(): boolean;
    clearSource(): void;
    getSource(): FileInfo | undefined;
    setSource(value?: FileInfo): TaskStatusUpdateEvent;


    hasDestination(): boolean;
    clearDestination(): void;
    getDestination(): FileInfo | undefined;
    setDestination(value?: FileInfo): TaskStatusUpdateEvent;

    getCount(): number;
    setCount(value: number): TaskStatusUpdateEvent;

    getStatus(): number;
    setStatus(value: number): TaskStatusUpdateEvent;

    getErrorCode(): number;
    setErrorCode(value: number): TaskStatusUpdateEvent;

    getErrorMessage(): string;
    setErrorMessage(value: string): TaskStatusUpdateEvent;

    getAction(): string;
    setAction(value: string): TaskStatusUpdateEvent;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskStatusUpdateEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TaskStatusUpdateEvent): TaskStatusUpdateEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskStatusUpdateEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskStatusUpdateEvent;
    static deserializeBinaryFromReader(message: TaskStatusUpdateEvent, reader: jspb.BinaryReader): TaskStatusUpdateEvent;
}

export namespace TaskStatusUpdateEvent {
    export type AsObject = {
        identity: string,
        userIdentity: number,
        type: number,
        name: string,
        source?: FileInfo.AsObject,
        destination?: FileInfo.AsObject,
        count: number,
        status: number,
        errorCode: number,
        errorMessage: string,
        action: string,
    }
}

export class FileInfo extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): FileInfo;

    getHash(): string;
    setHash(value: string): FileInfo;

    getUserIdentity(): number;
    setUserIdentity(value: number): FileInfo;

    getPath(): string;
    setPath(value: string): FileInfo;

    getName(): string;
    setName(value: string): FileInfo;

    getExt(): string;
    setExt(value: string): FileInfo;

    getSize(): number;
    setSize(value: number): FileInfo;

    getMime(): string;
    setMime(value: string): FileInfo;

    getDeleted(): boolean;
    setDeleted(value: boolean): FileInfo;

    getHidden(): boolean;
    setHidden(value: boolean): FileInfo;

    getLabel(): number;
    setLabel(value: number): FileInfo;

    getParent(): string;
    setParent(value: string): FileInfo;

    getType(): number;
    setType(value: number): FileInfo;

    getDirectory(): boolean;
    setDirectory(value: boolean): FileInfo;

    getAtime(): number;
    setAtime(value: number): FileInfo;

    getCtime(): number;
    setCtime(value: number): FileInfo;

    getMtime(): number;
    setMtime(value: number): FileInfo;

    getVersion(): number;
    setVersion(value: number): FileInfo;

    getLocking(): boolean;
    setLocking(value: boolean): FileInfo;

    getOp(): number;
    setOp(value: number): FileInfo;

    getPreview(): boolean;
    setPreview(value: boolean): FileInfo;

    getPreviewType(): number;
    setPreviewType(value: number): FileInfo;

    getFlag(): number;
    setFlag(value: number): FileInfo;

    getUniqueIdentity(): string;
    setUniqueIdentity(value: string): FileInfo;

    getShare(): boolean;
    setShare(value: boolean): FileInfo;

    getDownloadAddress(): string;
    setDownloadAddress(value: string): FileInfo;

    getLockTime(): number;
    setLockTime(value: number): FileInfo;

    getChildren(): number;
    setChildren(value: number): FileInfo;

    getChildrenTotal(): number;
    setChildrenTotal(value: number): FileInfo;

    getSticky(): number;
    setSticky(value: number): FileInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileInfo;
    static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
    export type AsObject = {
        identity: string,
        hash: string,
        userIdentity: number,
        path: string,
        name: string,
        ext: string,
        size: number,
        mime: string,
        deleted: boolean,
        hidden: boolean,
        label: number,
        parent: string,
        type: number,
        directory: boolean,
        atime: number,
        ctime: number,
        mtime: number,
        version: number,
        locking: boolean,
        op: number,
        preview: boolean,
        previewType: number,
        flag: number,
        uniqueIdentity: string,
        share: boolean,
        downloadAddress: string,
        lockTime: number,
        children: number,
        childrenTotal: number,
        sticky: number,
    }
}

export class FileInfoListResponse extends jspb.Message { 

    hasParent(): boolean;
    clearParent(): void;
    getParent(): FileInfo | undefined;
    setParent(value?: FileInfo): FileInfoListResponse;

    clearDataList(): void;
    getDataList(): Array<FileInfo>;
    setDataList(value: Array<FileInfo>): FileInfoListResponse;
    addData(value?: FileInfo, index?: number): FileInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileInfoListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FileInfoListResponse): FileInfoListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileInfoListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileInfoListResponse;
    static deserializeBinaryFromReader(message: FileInfoListResponse, reader: jspb.BinaryReader): FileInfoListResponse;
}

export namespace FileInfoListResponse {
    export type AsObject = {
        parent?: FileInfo.AsObject,
        dataList: Array<FileInfo.AsObject>,
    }
}

export class FileInfoListFilter extends jspb.Message { 
    clearIdentityList(): void;
    getIdentityList(): Array<string>;
    setIdentityList(value: Array<string>): FileInfoListFilter;
    addIdentity(value: string, index?: number): string;

    clearTypeList(): void;
    getTypeList(): Array<number>;
    setTypeList(value: Array<number>): FileInfoListFilter;
    addType(value: number, index?: number): number;

    getDirectory(): number;
    setDirectory(value: number): FileInfoListFilter;

    getName(): string;
    setName(value: string): FileInfoListFilter;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileInfoListFilter.AsObject;
    static toObject(includeInstance: boolean, msg: FileInfoListFilter): FileInfoListFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileInfoListFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileInfoListFilter;
    static deserializeBinaryFromReader(message: FileInfoListFilter, reader: jspb.BinaryReader): FileInfoListFilter;
}

export namespace FileInfoListFilter {
    export type AsObject = {
        identityList: Array<string>,
        typeList: Array<number>,
        directory: number,
        name: string,
    }
}

export class FileInfoListRequest extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): FileInfoListRequest;

    getUserIdentity(): number;
    setUserIdentity(value: number): FileInfoListRequest;

    getPath(): string;
    setPath(value: string): FileInfoListRequest;


    hasListInfo(): boolean;
    clearListInfo(): void;
    getListInfo(): common_common_entity_pb.ListInfo | undefined;
    setListInfo(value?: common_common_entity_pb.ListInfo): FileInfoListRequest;

    clearOrderByList(): void;
    getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
    setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): FileInfoListRequest;
    addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;


    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): FileInfoListFilter | undefined;
    setFilter(value?: FileInfoListFilter): FileInfoListRequest;

    getOp(): number;
    setOp(value: number): FileInfoListRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileInfoListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FileInfoListRequest): FileInfoListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileInfoListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileInfoListRequest;
    static deserializeBinaryFromReader(message: FileInfoListRequest, reader: jspb.BinaryReader): FileInfoListRequest;
}

export namespace FileInfoListRequest {
    export type AsObject = {
        identity: string,
        userIdentity: number,
        path: string,
        listInfo?: common_common_entity_pb.ListInfo.AsObject,
        orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
        filter?: FileInfoListFilter.AsObject,
        op: number,
    }
}

export class TrashInfo extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): TrashInfo;

    getUserIdentity(): number;
    setUserIdentity(value: number): TrashInfo;

    getPath(): string;
    setPath(value: string): TrashInfo;

    getPathIdentity(): string;
    setPathIdentity(value: string): TrashInfo;

    getCreateTime(): number;
    setCreateTime(value: number): TrashInfo;

    getName(): string;
    setName(value: string): TrashInfo;

    getType(): number;
    setType(value: number): TrashInfo;

    getMime(): string;
    setMime(value: string): TrashInfo;

    getAddon(): string;
    setAddon(value: string): TrashInfo;

    getLocking(): boolean;
    setLocking(value: boolean): TrashInfo;

    getOp(): number;
    setOp(value: number): TrashInfo;

    getSize(): number;
    setSize(value: number): TrashInfo;

    getDirectory(): boolean;
    setDirectory(value: boolean): TrashInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrashInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TrashInfo): TrashInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrashInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrashInfo;
    static deserializeBinaryFromReader(message: TrashInfo, reader: jspb.BinaryReader): TrashInfo;
}

export namespace TrashInfo {
    export type AsObject = {
        identity: string,
        userIdentity: number,
        path: string,
        pathIdentity: string,
        createTime: number,
        name: string,
        type: number,
        mime: string,
        addon: string,
        locking: boolean,
        op: number,
        size: number,
        directory: boolean,
    }
}

export class Label extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): Label;

    getUserIdentity(): number;
    setUserIdentity(value: number): Label;

    getName(): string;
    setName(value: string): Label;

    getType(): number;
    setType(value: number): Label;

    getCreateTime(): number;
    setCreateTime(value: number): Label;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Label.AsObject;
    static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Label;
    static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
    export type AsObject = {
        identity: number,
        userIdentity: number,
        name: string,
        type: number,
        createTime: number,
    }
}

export class BatchFileTaskRequest extends jspb.Message { 
    clearIdentityList(): void;
    getIdentityList(): Array<string>;
    setIdentityList(value: Array<string>): BatchFileTaskRequest;
    addIdentity(value: string, index?: number): string;

    clearPathList(): void;
    getPathList(): Array<string>;
    setPathList(value: Array<string>): BatchFileTaskRequest;
    addPath(value: string, index?: number): string;

    getUserIdentity(): number;
    setUserIdentity(value: number): BatchFileTaskRequest;


    hasDest(): boolean;
    clearDest(): void;
    getDest(): FileInfo | undefined;
    setDest(value?: FileInfo): BatchFileTaskRequest;

    getOp(): number;
    setOp(value: number): BatchFileTaskRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchFileTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchFileTaskRequest): BatchFileTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchFileTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchFileTaskRequest;
    static deserializeBinaryFromReader(message: BatchFileTaskRequest, reader: jspb.BinaryReader): BatchFileTaskRequest;
}

export namespace BatchFileTaskRequest {
    export type AsObject = {
        identityList: Array<string>,
        pathList: Array<string>,
        userIdentity: number,
        dest?: FileInfo.AsObject,
        op: number,
    }
}

export class BatchFileTaskResult extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): BatchFileTaskResult;

    getData(): number;
    setData(value: number): BatchFileTaskResult;

    getAsync(): boolean;
    setAsync(value: boolean): BatchFileTaskResult;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchFileTaskResult.AsObject;
    static toObject(includeInstance: boolean, msg: BatchFileTaskResult): BatchFileTaskResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchFileTaskResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchFileTaskResult;
    static deserializeBinaryFromReader(message: BatchFileTaskResult, reader: jspb.BinaryReader): BatchFileTaskResult;
}

export namespace BatchFileTaskResult {
    export type AsObject = {
        identity: string,
        data: number,
        async: boolean,
    }
}
