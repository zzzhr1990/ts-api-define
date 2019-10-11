// package: services
// file: user/info.proto

import * as jspb from "google-protobuf";

export class User extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getSalt(): string;
  setSalt(value: string): void;

  getCountrycode(): string;
  setCountrycode(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getCreateAddr(): string;
  setCreateAddr(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  getSpaceUsed(): number;
  setSpaceUsed(value: number): void;

  getSpaceCapacity(): number;
  setSpaceCapacity(value: number): void;

  getType(): number;
  setType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    identity: number,
    name: string,
    password: string,
    salt: string,
    countrycode: string,
    phone: string,
    email: string,
    createTime: number,
    createAddr: string,
    icon: string,
    spaceUsed: number,
    spaceCapacity: number,
    type: number,
    status: number,
    version: number,
  }
}

export class Balance extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getSpaceUsed(): number;
  setSpaceUsed(value: number): void;

  getSpaceLimit(): number;
  setSpaceLimit(value: number): void;

  getTrafficUsed(): number;
  setTrafficUsed(value: number): void;

  getTrafficLimit(): number;
  setTrafficLimit(value: number): void;

  getOfflineTaskUsed(): number;
  setOfflineTaskUsed(value: number): void;

  getOfflineTaskLimit(): number;
  setOfflineTaskLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Balance.AsObject;
  static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Balance;
  static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
  export type AsObject = {
    identity: number,
    spaceUsed: number,
    spaceLimit: number,
    trafficUsed: number,
    trafficLimit: number,
    offlineTaskUsed: number,
    offlineTaskLimit: number,
  }
}

export class PasswordPair extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getOldPassword(): string;
  setOldPassword(value: string): void;

  getNewPassword(): string;
  setNewPassword(value: string): void;

  getDirect(): boolean;
  setDirect(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordPair.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordPair): PasswordPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PasswordPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordPair;
  static deserializeBinaryFromReader(message: PasswordPair, reader: jspb.BinaryReader): PasswordPair;
}

export namespace PasswordPair {
  export type AsObject = {
    identity: number,
    oldPassword: string,
    newPassword: string,
    direct: boolean,
  }
}

