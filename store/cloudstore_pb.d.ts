// package: services
// file: store/cloudstore.proto

import * as jspb from "google-protobuf";

export class CloudStore extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getMime(): string;
  setMime(value: string): void;

  getUploadUser(): number;
  setUploadUser(value: number): void;

  getCtime(): number;
  setCtime(value: number): void;

  getOriginalalFilename(): string;
  setOriginalalFilename(value: string): void;

  getStore(): number;
  setStore(value: number): void;

  getKey(): string;
  setKey(value: string): void;

  getColdKey(): string;
  setColdKey(value: string): void;

  getType(): number;
  setType(value: number): void;

  getPreview(): boolean;
  setPreview(value: boolean): void;

  getPreviewType(): number;
  setPreviewType(value: number): void;

  getFlag(): number;
  setFlag(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getFetchTime(): number;
  setFetchTime(value: number): void;

  getDownloadAddress(): string;
  setDownloadAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudStore.AsObject;
  static toObject(includeInstance: boolean, msg: CloudStore): CloudStore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloudStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudStore;
  static deserializeBinaryFromReader(message: CloudStore, reader: jspb.BinaryReader): CloudStore;
}

export namespace CloudStore {
  export type AsObject = {
    hash: string,
    size: number,
    mime: string,
    uploadUser: number,
    ctime: number,
    originalalFilename: string,
    store: number,
    key: string,
    coldKey: string,
    type: number,
    preview: boolean,
    previewType: number,
    flag: number,
    status: number,
    fetchTime: number,
    downloadAddress: string,
  }
}

export class CloudStoreList extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<CloudStore>;
  setDataList(value: Array<CloudStore>): void;
  addData(value?: CloudStore, index?: number): CloudStore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudStoreList.AsObject;
  static toObject(includeInstance: boolean, msg: CloudStoreList): CloudStoreList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloudStoreList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudStoreList;
  static deserializeBinaryFromReader(message: CloudStoreList, reader: jspb.BinaryReader): CloudStoreList;
}

export namespace CloudStoreList {
  export type AsObject = {
    dataList: Array<CloudStore.AsObject>,
  }
}

