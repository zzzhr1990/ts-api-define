// package: services
// file: bill/bill.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class Payment extends jspb.Message { 
    getOrderIdentity(): string;
    setOrderIdentity(value: string): Payment;

    getUserIdentity(): number;
    setUserIdentity(value: number): Payment;

    getType(): number;
    setType(value: number): Payment;

    getChannel(): string;
    setChannel(value: string): Payment;

    getCreateTime(): number;
    setCreateTime(value: number): Payment;

    getStatus(): number;
    setStatus(value: number): Payment;

    getPayUnion(): string;
    setPayUnion(value: string): Payment;

    getPrice(): number;
    setPrice(value: number): Payment;

    getCurrency(): string;
    setCurrency(value: string): Payment;

    getDetail(): string;
    setDetail(value: string): Payment;

    getAddress(): string;
    setAddress(value: string): Payment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payment.AsObject;
    static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payment;
    static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
    export type AsObject = {
        orderIdentity: string,
        userIdentity: number,
        type: number,
        channel: string,
        createTime: number,
        status: number,
        payUnion: string,
        price: number,
        currency: string,
        detail: string,
        address: string,
    }
}

export class Order extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): Order;

    getUserIdentity(): number;
    setUserIdentity(value: number): Order;

    getPlanIdentity(): number;
    setPlanIdentity(value: number): Order;

    getPlanType(): number;
    setPlanType(value: number): Order;

    getPayType(): number;
    setPayType(value: number): Order;

    getStatus(): number;
    setStatus(value: number): Order;

    getCreateTime(): number;
    setCreateTime(value: number): Order;

    getRefreshTime(): number;
    setRefreshTime(value: number): Order;

    getExt(): string;
    setExt(value: string): Order;

    getExpireTime(): number;
    setExpireTime(value: number): Order;

    getCreateAddress(): string;
    setCreateAddress(value: string): Order;

    getAmount(): number;
    setAmount(value: number): Order;

    getPrice(): number;
    setPrice(value: number): Order;

    getCurrency(): string;
    setCurrency(value: string): Order;

    getCompleteTime(): number;
    setCompleteTime(value: number): Order;

    getPlanDescription(): string;
    setPlanDescription(value: string): Order;

    getInfo(): string;
    setInfo(value: string): Order;

    getIntent(): string;
    setIntent(value: string): Order;

    getPeriodType(): number;
    setPeriodType(value: number): Order;

    getSecret(): string;
    setSecret(value: string): Order;

    getPlanValue(): number;
    setPlanValue(value: number): Order;

    getPayChannel(): string;
    setPayChannel(value: string): Order;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        identity: string,
        userIdentity: number,
        planIdentity: number,
        planType: number,
        payType: number,
        status: number,
        createTime: number,
        refreshTime: number,
        ext: string,
        expireTime: number,
        createAddress: string,
        amount: number,
        price: number,
        currency: string,
        completeTime: number,
        planDescription: string,
        info: string,
        intent: string,
        periodType: number,
        secret: string,
        planValue: number,
        payChannel: string,
    }
}

export class Plan extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): Plan;

    getType(): number;
    setType(value: number): Plan;

    getPeriodType(): number;
    setPeriodType(value: number): Plan;

    getSupportedPayType(): string;
    setSupportedPayType(value: string): Plan;

    getPrice(): number;
    setPrice(value: number): Plan;

    getCurrency(): string;
    setCurrency(value: string): Plan;

    getInfo(): string;
    setInfo(value: string): Plan;

    getDescription(): string;
    setDescription(value: string): Plan;

    getValue(): number;
    setValue(value: number): Plan;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Plan.AsObject;
    static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Plan;
    static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
}

export namespace Plan {
    export type AsObject = {
        identity: number,
        type: number,
        periodType: number,
        supportedPayType: string,
        price: number,
        currency: string,
        info: string,
        description: string,
        value: number,
    }
}

export class PlanListRequest extends jspb.Message { 
    clearOrderByList(): void;
    getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
    setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): PlanListRequest;
    addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlanListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PlanListRequest): PlanListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlanListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlanListRequest;
    static deserializeBinaryFromReader(message: PlanListRequest, reader: jspb.BinaryReader): PlanListRequest;
}

export namespace PlanListRequest {
    export type AsObject = {
        orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
    }
}

export class OrderListRequest extends jspb.Message { 
    getUserIdentity(): number;
    setUserIdentity(value: number): OrderListRequest;


    hasListInfo(): boolean;
    clearListInfo(): void;
    getListInfo(): common_common_entity_pb.ListInfo | undefined;
    setListInfo(value?: common_common_entity_pb.ListInfo): OrderListRequest;

    clearOrderByList(): void;
    getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
    setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): OrderListRequest;
    addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;


    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): OrderFilterRequest | undefined;
    setFilter(value?: OrderFilterRequest): OrderListRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrderListRequest): OrderListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderListRequest;
    static deserializeBinaryFromReader(message: OrderListRequest, reader: jspb.BinaryReader): OrderListRequest;
}

export namespace OrderListRequest {
    export type AsObject = {
        userIdentity: number,
        listInfo?: common_common_entity_pb.ListInfo.AsObject,
        orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
        filter?: OrderFilterRequest.AsObject,
    }
}

export class OrderFilterRequest extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): OrderFilterRequest;

    getPlanType(): number;
    setPlanType(value: number): OrderFilterRequest;

    getPath(): string;
    setPath(value: string): OrderFilterRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderFilterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrderFilterRequest): OrderFilterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderFilterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderFilterRequest;
    static deserializeBinaryFromReader(message: OrderFilterRequest, reader: jspb.BinaryReader): OrderFilterRequest;
}

export namespace OrderFilterRequest {
    export type AsObject = {
        identity: string,
        planType: number,
        path: string,
    }
}

export class OrderListResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Order>;
    setDataList(value: Array<Order>): OrderListResponse;
    addData(value?: Order, index?: number): Order;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrderListResponse): OrderListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderListResponse;
    static deserializeBinaryFromReader(message: OrderListResponse, reader: jspb.BinaryReader): OrderListResponse;
}

export namespace OrderListResponse {
    export type AsObject = {
        dataList: Array<Order.AsObject>,
    }
}

export class PlanListResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Plan>;
    setDataList(value: Array<Plan>): PlanListResponse;
    addData(value?: Plan, index?: number): Plan;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlanListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PlanListResponse): PlanListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlanListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlanListResponse;
    static deserializeBinaryFromReader(message: PlanListResponse, reader: jspb.BinaryReader): PlanListResponse;
}

export namespace PlanListResponse {
    export type AsObject = {
        dataList: Array<Plan.AsObject>,
    }
}
