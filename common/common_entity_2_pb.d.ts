// package: services
// file: common/common_entity_2.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BoolEntity2 extends jspb.Message { 
    getData(): boolean;
    setData(value: boolean): BoolEntity2;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoolEntity2.AsObject;
    static toObject(includeInstance: boolean, msg: BoolEntity2): BoolEntity2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoolEntity2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoolEntity2;
    static deserializeBinaryFromReader(message: BoolEntity2, reader: jspb.BinaryReader): BoolEntity2;
}

export namespace BoolEntity2 {
    export type AsObject = {
        data: boolean,
    }
}
