// package: services
// file: file/userfile.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class UserFile extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): UserFile;

    getHash(): string;
    setHash(value: string): UserFile;

    getUserIdentity(): number;
    setUserIdentity(value: number): UserFile;

    getPath(): string;
    setPath(value: string): UserFile;

    getName(): string;
    setName(value: string): UserFile;

    getExt(): string;
    setExt(value: string): UserFile;

    getSize(): number;
    setSize(value: number): UserFile;

    getMime(): string;
    setMime(value: string): UserFile;

    getDeleted(): boolean;
    setDeleted(value: boolean): UserFile;

    getHidden(): boolean;
    setHidden(value: boolean): UserFile;

    getLabel(): number;
    setLabel(value: number): UserFile;

    getParent(): string;
    setParent(value: string): UserFile;

    getType(): number;
    setType(value: number): UserFile;

    getDirectory(): boolean;
    setDirectory(value: boolean): UserFile;

    getAtime(): number;
    setAtime(value: number): UserFile;

    getCtime(): number;
    setCtime(value: number): UserFile;

    getMtime(): number;
    setMtime(value: number): UserFile;

    getVersion(): number;
    setVersion(value: number): UserFile;

    getLocking(): boolean;
    setLocking(value: boolean): UserFile;

    getOp(): number;
    setOp(value: number): UserFile;

    getPreview(): boolean;
    setPreview(value: boolean): UserFile;

    getPreviewType(): number;
    setPreviewType(value: number): UserFile;

    getFlag(): number;
    setFlag(value: number): UserFile;

    getUniqueIdentity(): string;
    setUniqueIdentity(value: string): UserFile;

    getShare(): boolean;
    setShare(value: boolean): UserFile;

    getDownloadAddress(): string;
    setDownloadAddress(value: string): UserFile;

    getLockTime(): number;
    setLockTime(value: number): UserFile;

    getChildren(): number;
    setChildren(value: number): UserFile;

    getChildrenTotal(): number;
    setChildrenTotal(value: number): UserFile;

    getSticky(): number;
    setSticky(value: number): UserFile;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserFile.AsObject;
    static toObject(includeInstance: boolean, msg: UserFile): UserFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserFile;
    static deserializeBinaryFromReader(message: UserFile, reader: jspb.BinaryReader): UserFile;
}

export namespace UserFile {
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

export class FileListFilter extends jspb.Message { 
    clearIdentityList(): void;
    getIdentityList(): Array<string>;
    setIdentityList(value: Array<string>): FileListFilter;
    addIdentity(value: string, index?: number): string;

    clearTypeList(): void;
    getTypeList(): Array<number>;
    setTypeList(value: Array<number>): FileListFilter;
    addType(value: number, index?: number): number;

    getName(): string;
    setName(value: string): FileListFilter;

    getLabel(): number;
    setLabel(value: number): FileListFilter;

    getHidden(): boolean;
    setHidden(value: boolean): FileListFilter;

    getDirectory(): boolean;
    setDirectory(value: boolean): FileListFilter;

    getRegularFile(): boolean;
    setRegularFile(value: boolean): FileListFilter;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileListFilter.AsObject;
    static toObject(includeInstance: boolean, msg: FileListFilter): FileListFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileListFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileListFilter;
    static deserializeBinaryFromReader(message: FileListFilter, reader: jspb.BinaryReader): FileListFilter;
}

export namespace FileListFilter {
    export type AsObject = {
        identityList: Array<string>,
        typeList: Array<number>,
        name: string,
        label: number,
        hidden: boolean,
        directory: boolean,
        regularFile: boolean,
    }
}
