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

  getCountryCode(): string;
  setCountryCode(value: string): void;

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

  getVip(): number;
  setVip(value: number): void;

  getVipExpireTime(): number;
  setVipExpireTime(value: number): void;

  getLastActivateTime(): number;
  setLastActivateTime(value: number): void;

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
    countryCode: string,
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
    vip: number,
    vipExpireTime: number,
    lastActivateTime: number,
  }
}

export class SmsRequest extends jspb.Message {
  getCountryCode(): string;
  setCountryCode(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getType(): number;
  setType(value: number): void;

  getExpireInMs(): number;
  setExpireInMs(value: number): void;

  getTpl(): string;
  setTpl(value: string): void;

  clearParamsList(): void;
  getParamsList(): Array<string>;
  setParamsList(value: Array<string>): void;
  addParams(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SmsRequest): SmsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsRequest;
  static deserializeBinaryFromReader(message: SmsRequest, reader: jspb.BinaryReader): SmsRequest;
}

export namespace SmsRequest {
  export type AsObject = {
    countryCode: string,
    phone: string,
    type: number,
    expireInMs: number,
    tpl: string,
    paramsList: Array<string>,
  }
}

export class SmsResponse extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  getType(): number;
  setType(value: number): void;

  getExpireTime(): number;
  setExpireTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SmsResponse): SmsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsResponse;
  static deserializeBinaryFromReader(message: SmsResponse, reader: jspb.BinaryReader): SmsResponse;
}

export namespace SmsResponse {
  export type AsObject = {
    session: string,
    type: number,
    expireTime: number,
  }
}

export class Log extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getDevice(): string;
  setDevice(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  getProvince(): string;
  setProvince(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getCityCode(): string;
  setCityCode(value: string): void;

  getIsp(): string;
  setIsp(value: string): void;

  getCreateAddr(): string;
  setCreateAddr(value: string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getType(): number;
  setType(value: number): void;

  getInfo(): string;
  setInfo(value: string): void;

  getLevel(): number;
  setLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log.AsObject;
  static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log;
  static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
  export type AsObject = {
    identity: number,
    userIdentity: number,
    device: string,
    country: string,
    countryCode: string,
    province: string,
    city: string,
    cityCode: string,
    isp: string,
    createAddr: string,
    createTime: number,
    type: number,
    info: string,
    level: number,
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

