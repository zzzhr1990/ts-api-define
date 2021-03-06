// package: services
// file: user/info.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as user_info_pb from "../user/info_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IUserServiceService_ICreate;
    smsCreate: IUserServiceService_ISmsCreate;
    get: IUserServiceService_IGet;
    findOne: IUserServiceService_IFindOne;
    login: IUserServiceService_ILogin;
    smsLogin: IUserServiceService_ISmsLogin;
    smsChangePhone: IUserServiceService_ISmsChangePhone;
    loginDirect: IUserServiceService_ILoginDirect;
    logoff: IUserServiceService_ILogoff;
    update: IUserServiceService_IUpdate;
    findNextOne: IUserServiceService_IFindNextOne;
    checkCanCreateFile: IUserServiceService_ICheckCanCreateFile;
    updateStatistics: IUserServiceService_IUpdateStatistics;
    smsDeleteAccount: IUserServiceService_ISmsDeleteAccount;
    sendSms: IUserServiceService_ISendSms;
    validateSms: IUserServiceService_IValidateSms;
    changePassword: IUserServiceService_IChangePassword;
    smsChangePassword: IUserServiceService_ISmsChangePassword;
    bindThirdPartyLogin: IUserServiceService_IBindThirdPartyLogin;
    removeThirdPartyLogin: IUserServiceService_IRemoveThirdPartyLogin;
    thirdPartyLogin: IUserServiceService_IThirdPartyLogin;
    createOauthInfo: IUserServiceService_ICreateOauthInfo;
    refreshOauthToken: IUserServiceService_IRefreshOauthToken;
    checkAccessToken: IUserServiceService_ICheckAccessToken;
    deleteAccessToken: IUserServiceService_IDeleteAccessToken;
    createPayment: IUserServiceService_ICreatePayment;
    completePayment: IUserServiceService_ICompletePayment;
    failedPayment: IUserServiceService_IFailedPayment;
    requestChangePhone: IUserServiceService_IRequestChangePhone;
    requestRemoveAccount: IUserServiceService_IRequestRemoveAccount;
    cancelLaterAction: IUserServiceService_ICancelLaterAction;
    changePhone: IUserServiceService_IChangePhone;
    getLaterAction: IUserServiceService_IGetLaterAction;
    deleteAccount: IUserServiceService_IDeleteAccount;
    afterLogin: IUserServiceService_IAfterLogin;
    afterLogout: IUserServiceService_IAfterLogout;
    listOnline: IUserServiceService_IListOnline;
}

interface IUserServiceService_ICreate extends grpc.MethodDefinition<user_info_pb.User, user_info_pb.User> {
    path: "/services.UserService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.User>;
    requestDeserialize: grpc.deserialize<user_info_pb.User>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ISmsCreate extends grpc.MethodDefinition<user_info_pb.SmsCreateRequest, user_info_pb.User> {
    path: "/services.UserService/SmsCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.SmsCreateRequest>;
    requestDeserialize: grpc.deserialize<user_info_pb.SmsCreateRequest>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_IGet extends grpc.MethodDefinition<user_info_pb.User, user_info_pb.User> {
    path: "/services.UserService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.User>;
    requestDeserialize: grpc.deserialize<user_info_pb.User>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_IFindOne extends grpc.MethodDefinition<user_info_pb.User, user_info_pb.User> {
    path: "/services.UserService/FindOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.User>;
    requestDeserialize: grpc.deserialize<user_info_pb.User>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ILogin extends grpc.MethodDefinition<user_info_pb.User, user_info_pb.User> {
    path: "/services.UserService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.User>;
    requestDeserialize: grpc.deserialize<user_info_pb.User>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ISmsLogin extends grpc.MethodDefinition<user_info_pb.SmsValidateRequest, user_info_pb.User> {
    path: "/services.UserService/SmsLogin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.SmsValidateRequest>;
    requestDeserialize: grpc.deserialize<user_info_pb.SmsValidateRequest>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ISmsChangePhone extends grpc.MethodDefinition<user_info_pb.SmsValidateRequestChange, user_info_pb.User> {
    path: "/services.UserService/SmsChangePhone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.SmsValidateRequestChange>;
    requestDeserialize: grpc.deserialize<user_info_pb.SmsValidateRequestChange>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ILoginDirect extends grpc.MethodDefinition<user_info_pb.User, user_info_pb.User> {
    path: "/services.UserService/LoginDirect";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.User>;
    requestDeserialize: grpc.deserialize<user_info_pb.User>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ILogoff extends grpc.MethodDefinition<user_info_pb.User, user_info_pb.User> {
    path: "/services.UserService/Logoff";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.User>;
    requestDeserialize: grpc.deserialize<user_info_pb.User>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_IUpdate extends grpc.MethodDefinition<user_info_pb.User, user_info_pb.User> {
    path: "/services.UserService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.User>;
    requestDeserialize: grpc.deserialize<user_info_pb.User>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_IFindNextOne extends grpc.MethodDefinition<user_info_pb.User, user_info_pb.User> {
    path: "/services.UserService/FindNextOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.User>;
    requestDeserialize: grpc.deserialize<user_info_pb.User>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ICheckCanCreateFile extends grpc.MethodDefinition<user_info_pb.User, user_info_pb.User> {
    path: "/services.UserService/CheckCanCreateFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.User>;
    requestDeserialize: grpc.deserialize<user_info_pb.User>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_IUpdateStatistics extends grpc.MethodDefinition<user_info_pb.User, user_info_pb.User> {
    path: "/services.UserService/UpdateStatistics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.User>;
    requestDeserialize: grpc.deserialize<user_info_pb.User>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ISmsDeleteAccount extends grpc.MethodDefinition<user_info_pb.SmsDeleteAccountRequest, user_info_pb.User> {
    path: "/services.UserService/SmsDeleteAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.SmsDeleteAccountRequest>;
    requestDeserialize: grpc.deserialize<user_info_pb.SmsDeleteAccountRequest>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ISendSms extends grpc.MethodDefinition<user_info_pb.SmsRequest, user_info_pb.SmsResponse> {
    path: "/services.UserService/SendSms";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.SmsRequest>;
    requestDeserialize: grpc.deserialize<user_info_pb.SmsRequest>;
    responseSerialize: grpc.serialize<user_info_pb.SmsResponse>;
    responseDeserialize: grpc.deserialize<user_info_pb.SmsResponse>;
}
interface IUserServiceService_IValidateSms extends grpc.MethodDefinition<user_info_pb.SmsValidateRequest, user_info_pb.SmsValidateResponse> {
    path: "/services.UserService/ValidateSms";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.SmsValidateRequest>;
    requestDeserialize: grpc.deserialize<user_info_pb.SmsValidateRequest>;
    responseSerialize: grpc.serialize<user_info_pb.SmsValidateResponse>;
    responseDeserialize: grpc.deserialize<user_info_pb.SmsValidateResponse>;
}
interface IUserServiceService_IChangePassword extends grpc.MethodDefinition<user_info_pb.ChangePasswordRequest, user_info_pb.User> {
    path: "/services.UserService/ChangePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.ChangePasswordRequest>;
    requestDeserialize: grpc.deserialize<user_info_pb.ChangePasswordRequest>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ISmsChangePassword extends grpc.MethodDefinition<user_info_pb.SmsChangePasswordRequest, user_info_pb.User> {
    path: "/services.UserService/SmsChangePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.SmsChangePasswordRequest>;
    requestDeserialize: grpc.deserialize<user_info_pb.SmsChangePasswordRequest>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_IBindThirdPartyLogin extends grpc.MethodDefinition<user_info_pb.ThirdPartyLoginInfo, user_info_pb.User> {
    path: "/services.UserService/BindThirdPartyLogin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.ThirdPartyLoginInfo>;
    requestDeserialize: grpc.deserialize<user_info_pb.ThirdPartyLoginInfo>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_IRemoveThirdPartyLogin extends grpc.MethodDefinition<user_info_pb.ThirdPartyLoginInfo, user_info_pb.User> {
    path: "/services.UserService/RemoveThirdPartyLogin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.ThirdPartyLoginInfo>;
    requestDeserialize: grpc.deserialize<user_info_pb.ThirdPartyLoginInfo>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_IThirdPartyLogin extends grpc.MethodDefinition<user_info_pb.ThirdPartyLoginInfo, user_info_pb.User> {
    path: "/services.UserService/ThirdPartyLogin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.ThirdPartyLoginInfo>;
    requestDeserialize: grpc.deserialize<user_info_pb.ThirdPartyLoginInfo>;
    responseSerialize: grpc.serialize<user_info_pb.User>;
    responseDeserialize: grpc.deserialize<user_info_pb.User>;
}
interface IUserServiceService_ICreateOauthInfo extends grpc.MethodDefinition<user_info_pb.OauthInfo, user_info_pb.OauthInfo> {
    path: "/services.UserService/CreateOauthInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.OauthInfo>;
    requestDeserialize: grpc.deserialize<user_info_pb.OauthInfo>;
    responseSerialize: grpc.serialize<user_info_pb.OauthInfo>;
    responseDeserialize: grpc.deserialize<user_info_pb.OauthInfo>;
}
interface IUserServiceService_IRefreshOauthToken extends grpc.MethodDefinition<user_info_pb.OauthInfo, user_info_pb.OauthInfo> {
    path: "/services.UserService/RefreshOauthToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.OauthInfo>;
    requestDeserialize: grpc.deserialize<user_info_pb.OauthInfo>;
    responseSerialize: grpc.serialize<user_info_pb.OauthInfo>;
    responseDeserialize: grpc.deserialize<user_info_pb.OauthInfo>;
}
interface IUserServiceService_ICheckAccessToken extends grpc.MethodDefinition<user_info_pb.OauthInfo, user_info_pb.OauthInfo> {
    path: "/services.UserService/CheckAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.OauthInfo>;
    requestDeserialize: grpc.deserialize<user_info_pb.OauthInfo>;
    responseSerialize: grpc.serialize<user_info_pb.OauthInfo>;
    responseDeserialize: grpc.deserialize<user_info_pb.OauthInfo>;
}
interface IUserServiceService_IDeleteAccessToken extends grpc.MethodDefinition<user_info_pb.OauthInfo, user_info_pb.OauthInfo> {
    path: "/services.UserService/DeleteAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.OauthInfo>;
    requestDeserialize: grpc.deserialize<user_info_pb.OauthInfo>;
    responseSerialize: grpc.serialize<user_info_pb.OauthInfo>;
    responseDeserialize: grpc.deserialize<user_info_pb.OauthInfo>;
}
interface IUserServiceService_ICreatePayment extends grpc.MethodDefinition<user_info_pb.SubscriptionPayment, user_info_pb.SubscriptionPayment> {
    path: "/services.UserService/CreatePayment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.SubscriptionPayment>;
    requestDeserialize: grpc.deserialize<user_info_pb.SubscriptionPayment>;
    responseSerialize: grpc.serialize<user_info_pb.SubscriptionPayment>;
    responseDeserialize: grpc.deserialize<user_info_pb.SubscriptionPayment>;
}
interface IUserServiceService_ICompletePayment extends grpc.MethodDefinition<user_info_pb.SubscriptionPayment, user_info_pb.SubscriptionPayment> {
    path: "/services.UserService/CompletePayment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.SubscriptionPayment>;
    requestDeserialize: grpc.deserialize<user_info_pb.SubscriptionPayment>;
    responseSerialize: grpc.serialize<user_info_pb.SubscriptionPayment>;
    responseDeserialize: grpc.deserialize<user_info_pb.SubscriptionPayment>;
}
interface IUserServiceService_IFailedPayment extends grpc.MethodDefinition<user_info_pb.SubscriptionPayment, user_info_pb.SubscriptionPayment> {
    path: "/services.UserService/FailedPayment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.SubscriptionPayment>;
    requestDeserialize: grpc.deserialize<user_info_pb.SubscriptionPayment>;
    responseSerialize: grpc.serialize<user_info_pb.SubscriptionPayment>;
    responseDeserialize: grpc.deserialize<user_info_pb.SubscriptionPayment>;
}
interface IUserServiceService_IRequestChangePhone extends grpc.MethodDefinition<user_info_pb.LaterAction, user_info_pb.LaterAction> {
    path: "/services.UserService/RequestChangePhone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.LaterAction>;
    requestDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
    responseSerialize: grpc.serialize<user_info_pb.LaterAction>;
    responseDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
}
interface IUserServiceService_IRequestRemoveAccount extends grpc.MethodDefinition<user_info_pb.LaterAction, user_info_pb.LaterAction> {
    path: "/services.UserService/RequestRemoveAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.LaterAction>;
    requestDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
    responseSerialize: grpc.serialize<user_info_pb.LaterAction>;
    responseDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
}
interface IUserServiceService_ICancelLaterAction extends grpc.MethodDefinition<user_info_pb.LaterAction, user_info_pb.LaterAction> {
    path: "/services.UserService/CancelLaterAction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.LaterAction>;
    requestDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
    responseSerialize: grpc.serialize<user_info_pb.LaterAction>;
    responseDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
}
interface IUserServiceService_IChangePhone extends grpc.MethodDefinition<user_info_pb.LaterAction, user_info_pb.LaterAction> {
    path: "/services.UserService/ChangePhone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.LaterAction>;
    requestDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
    responseSerialize: grpc.serialize<user_info_pb.LaterAction>;
    responseDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
}
interface IUserServiceService_IGetLaterAction extends grpc.MethodDefinition<user_info_pb.LaterAction, user_info_pb.LaterAction> {
    path: "/services.UserService/GetLaterAction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.LaterAction>;
    requestDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
    responseSerialize: grpc.serialize<user_info_pb.LaterAction>;
    responseDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
}
interface IUserServiceService_IDeleteAccount extends grpc.MethodDefinition<user_info_pb.LaterAction, user_info_pb.LaterAction> {
    path: "/services.UserService/DeleteAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.LaterAction>;
    requestDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
    responseSerialize: grpc.serialize<user_info_pb.LaterAction>;
    responseDeserialize: grpc.deserialize<user_info_pb.LaterAction>;
}
interface IUserServiceService_IAfterLogin extends grpc.MethodDefinition<user_info_pb.Online, user_info_pb.Online> {
    path: "/services.UserService/AfterLogin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.Online>;
    requestDeserialize: grpc.deserialize<user_info_pb.Online>;
    responseSerialize: grpc.serialize<user_info_pb.Online>;
    responseDeserialize: grpc.deserialize<user_info_pb.Online>;
}
interface IUserServiceService_IAfterLogout extends grpc.MethodDefinition<user_info_pb.Online, user_info_pb.Online> {
    path: "/services.UserService/AfterLogout";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.Online>;
    requestDeserialize: grpc.deserialize<user_info_pb.Online>;
    responseSerialize: grpc.serialize<user_info_pb.Online>;
    responseDeserialize: grpc.deserialize<user_info_pb.Online>;
}
interface IUserServiceService_IListOnline extends grpc.MethodDefinition<user_info_pb.Online, user_info_pb.OnlineList> {
    path: "/services.UserService/ListOnline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_info_pb.Online>;
    requestDeserialize: grpc.deserialize<user_info_pb.Online>;
    responseSerialize: grpc.serialize<user_info_pb.OnlineList>;
    responseDeserialize: grpc.deserialize<user_info_pb.OnlineList>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    create: grpc.handleUnaryCall<user_info_pb.User, user_info_pb.User>;
    smsCreate: grpc.handleUnaryCall<user_info_pb.SmsCreateRequest, user_info_pb.User>;
    get: grpc.handleUnaryCall<user_info_pb.User, user_info_pb.User>;
    findOne: grpc.handleUnaryCall<user_info_pb.User, user_info_pb.User>;
    login: grpc.handleUnaryCall<user_info_pb.User, user_info_pb.User>;
    smsLogin: grpc.handleUnaryCall<user_info_pb.SmsValidateRequest, user_info_pb.User>;
    smsChangePhone: grpc.handleUnaryCall<user_info_pb.SmsValidateRequestChange, user_info_pb.User>;
    loginDirect: grpc.handleUnaryCall<user_info_pb.User, user_info_pb.User>;
    logoff: grpc.handleUnaryCall<user_info_pb.User, user_info_pb.User>;
    update: grpc.handleUnaryCall<user_info_pb.User, user_info_pb.User>;
    findNextOne: grpc.handleUnaryCall<user_info_pb.User, user_info_pb.User>;
    checkCanCreateFile: grpc.handleUnaryCall<user_info_pb.User, user_info_pb.User>;
    updateStatistics: grpc.handleUnaryCall<user_info_pb.User, user_info_pb.User>;
    smsDeleteAccount: grpc.handleUnaryCall<user_info_pb.SmsDeleteAccountRequest, user_info_pb.User>;
    sendSms: grpc.handleUnaryCall<user_info_pb.SmsRequest, user_info_pb.SmsResponse>;
    validateSms: grpc.handleUnaryCall<user_info_pb.SmsValidateRequest, user_info_pb.SmsValidateResponse>;
    changePassword: grpc.handleUnaryCall<user_info_pb.ChangePasswordRequest, user_info_pb.User>;
    smsChangePassword: grpc.handleUnaryCall<user_info_pb.SmsChangePasswordRequest, user_info_pb.User>;
    bindThirdPartyLogin: grpc.handleUnaryCall<user_info_pb.ThirdPartyLoginInfo, user_info_pb.User>;
    removeThirdPartyLogin: grpc.handleUnaryCall<user_info_pb.ThirdPartyLoginInfo, user_info_pb.User>;
    thirdPartyLogin: grpc.handleUnaryCall<user_info_pb.ThirdPartyLoginInfo, user_info_pb.User>;
    createOauthInfo: grpc.handleUnaryCall<user_info_pb.OauthInfo, user_info_pb.OauthInfo>;
    refreshOauthToken: grpc.handleUnaryCall<user_info_pb.OauthInfo, user_info_pb.OauthInfo>;
    checkAccessToken: grpc.handleUnaryCall<user_info_pb.OauthInfo, user_info_pb.OauthInfo>;
    deleteAccessToken: grpc.handleUnaryCall<user_info_pb.OauthInfo, user_info_pb.OauthInfo>;
    createPayment: grpc.handleUnaryCall<user_info_pb.SubscriptionPayment, user_info_pb.SubscriptionPayment>;
    completePayment: grpc.handleUnaryCall<user_info_pb.SubscriptionPayment, user_info_pb.SubscriptionPayment>;
    failedPayment: grpc.handleUnaryCall<user_info_pb.SubscriptionPayment, user_info_pb.SubscriptionPayment>;
    requestChangePhone: grpc.handleUnaryCall<user_info_pb.LaterAction, user_info_pb.LaterAction>;
    requestRemoveAccount: grpc.handleUnaryCall<user_info_pb.LaterAction, user_info_pb.LaterAction>;
    cancelLaterAction: grpc.handleUnaryCall<user_info_pb.LaterAction, user_info_pb.LaterAction>;
    changePhone: grpc.handleUnaryCall<user_info_pb.LaterAction, user_info_pb.LaterAction>;
    getLaterAction: grpc.handleUnaryCall<user_info_pb.LaterAction, user_info_pb.LaterAction>;
    deleteAccount: grpc.handleUnaryCall<user_info_pb.LaterAction, user_info_pb.LaterAction>;
    afterLogin: grpc.handleUnaryCall<user_info_pb.Online, user_info_pb.Online>;
    afterLogout: grpc.handleUnaryCall<user_info_pb.Online, user_info_pb.Online>;
    listOnline: grpc.handleUnaryCall<user_info_pb.Online, user_info_pb.OnlineList>;
}

export interface IUserServiceClient {
    create(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    create(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    create(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsCreate(request: user_info_pb.SmsCreateRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsCreate(request: user_info_pb.SmsCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsCreate(request: user_info_pb.SmsCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    get(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    get(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    get(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    findOne(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    findOne(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    findOne(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    login(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    login(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    login(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsLogin(request: user_info_pb.SmsValidateRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsLogin(request: user_info_pb.SmsValidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsLogin(request: user_info_pb.SmsValidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsChangePhone(request: user_info_pb.SmsValidateRequestChange, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsChangePhone(request: user_info_pb.SmsValidateRequestChange, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsChangePhone(request: user_info_pb.SmsValidateRequestChange, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    loginDirect(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    loginDirect(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    loginDirect(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    logoff(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    logoff(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    logoff(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    update(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    update(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    update(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    findNextOne(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    findNextOne(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    findNextOne(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    checkCanCreateFile(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    checkCanCreateFile(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    checkCanCreateFile(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    updateStatistics(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    updateStatistics(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    updateStatistics(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsDeleteAccount(request: user_info_pb.SmsDeleteAccountRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsDeleteAccount(request: user_info_pb.SmsDeleteAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsDeleteAccount(request: user_info_pb.SmsDeleteAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    sendSms(request: user_info_pb.SmsRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsResponse) => void): grpc.ClientUnaryCall;
    sendSms(request: user_info_pb.SmsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsResponse) => void): grpc.ClientUnaryCall;
    sendSms(request: user_info_pb.SmsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsResponse) => void): grpc.ClientUnaryCall;
    validateSms(request: user_info_pb.SmsValidateRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsValidateResponse) => void): grpc.ClientUnaryCall;
    validateSms(request: user_info_pb.SmsValidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsValidateResponse) => void): grpc.ClientUnaryCall;
    validateSms(request: user_info_pb.SmsValidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsValidateResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: user_info_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    changePassword(request: user_info_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    changePassword(request: user_info_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsChangePassword(request: user_info_pb.SmsChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsChangePassword(request: user_info_pb.SmsChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    smsChangePassword(request: user_info_pb.SmsChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    bindThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    bindThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    bindThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    removeThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    removeThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    removeThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    thirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    thirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    thirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    createOauthInfo(request: user_info_pb.OauthInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    createOauthInfo(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    createOauthInfo(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    refreshOauthToken(request: user_info_pb.OauthInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    refreshOauthToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    refreshOauthToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    checkAccessToken(request: user_info_pb.OauthInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    checkAccessToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    checkAccessToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    deleteAccessToken(request: user_info_pb.OauthInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    deleteAccessToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    deleteAccessToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    createPayment(request: user_info_pb.SubscriptionPayment, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    createPayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    createPayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    completePayment(request: user_info_pb.SubscriptionPayment, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    completePayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    completePayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    failedPayment(request: user_info_pb.SubscriptionPayment, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    failedPayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    failedPayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    requestChangePhone(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    requestChangePhone(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    requestChangePhone(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    requestRemoveAccount(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    requestRemoveAccount(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    requestRemoveAccount(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    cancelLaterAction(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    cancelLaterAction(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    cancelLaterAction(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    changePhone(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    changePhone(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    changePhone(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    getLaterAction(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    getLaterAction(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    getLaterAction(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    deleteAccount(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    deleteAccount(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    deleteAccount(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    afterLogin(request: user_info_pb.Online, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    afterLogin(request: user_info_pb.Online, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    afterLogin(request: user_info_pb.Online, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    afterLogout(request: user_info_pb.Online, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    afterLogout(request: user_info_pb.Online, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    afterLogout(request: user_info_pb.Online, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    listOnline(request: user_info_pb.Online, callback: (error: grpc.ServiceError | null, response: user_info_pb.OnlineList) => void): grpc.ClientUnaryCall;
    listOnline(request: user_info_pb.Online, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.OnlineList) => void): grpc.ClientUnaryCall;
    listOnline(request: user_info_pb.Online, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.OnlineList) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public create(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public create(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsCreate(request: user_info_pb.SmsCreateRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsCreate(request: user_info_pb.SmsCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsCreate(request: user_info_pb.SmsCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public findOne(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public findOne(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public findOne(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public login(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public login(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public login(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsLogin(request: user_info_pb.SmsValidateRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsLogin(request: user_info_pb.SmsValidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsLogin(request: user_info_pb.SmsValidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsChangePhone(request: user_info_pb.SmsValidateRequestChange, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsChangePhone(request: user_info_pb.SmsValidateRequestChange, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsChangePhone(request: user_info_pb.SmsValidateRequestChange, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public loginDirect(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public loginDirect(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public loginDirect(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public logoff(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public logoff(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public logoff(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public update(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public update(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public update(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public findNextOne(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public findNextOne(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public findNextOne(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public checkCanCreateFile(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public checkCanCreateFile(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public checkCanCreateFile(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public updateStatistics(request: user_info_pb.User, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public updateStatistics(request: user_info_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public updateStatistics(request: user_info_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsDeleteAccount(request: user_info_pb.SmsDeleteAccountRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsDeleteAccount(request: user_info_pb.SmsDeleteAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsDeleteAccount(request: user_info_pb.SmsDeleteAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public sendSms(request: user_info_pb.SmsRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsResponse) => void): grpc.ClientUnaryCall;
    public sendSms(request: user_info_pb.SmsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsResponse) => void): grpc.ClientUnaryCall;
    public sendSms(request: user_info_pb.SmsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsResponse) => void): grpc.ClientUnaryCall;
    public validateSms(request: user_info_pb.SmsValidateRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsValidateResponse) => void): grpc.ClientUnaryCall;
    public validateSms(request: user_info_pb.SmsValidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsValidateResponse) => void): grpc.ClientUnaryCall;
    public validateSms(request: user_info_pb.SmsValidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.SmsValidateResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: user_info_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public changePassword(request: user_info_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public changePassword(request: user_info_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsChangePassword(request: user_info_pb.SmsChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsChangePassword(request: user_info_pb.SmsChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public smsChangePassword(request: user_info_pb.SmsChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public bindThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public bindThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public bindThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public removeThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public removeThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public removeThirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public thirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public thirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public thirdPartyLogin(request: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.User) => void): grpc.ClientUnaryCall;
    public createOauthInfo(request: user_info_pb.OauthInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public createOauthInfo(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public createOauthInfo(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public refreshOauthToken(request: user_info_pb.OauthInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public refreshOauthToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public refreshOauthToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public checkAccessToken(request: user_info_pb.OauthInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public checkAccessToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public checkAccessToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public deleteAccessToken(request: user_info_pb.OauthInfo, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public deleteAccessToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public deleteAccessToken(request: user_info_pb.OauthInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.OauthInfo) => void): grpc.ClientUnaryCall;
    public createPayment(request: user_info_pb.SubscriptionPayment, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    public createPayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    public createPayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    public completePayment(request: user_info_pb.SubscriptionPayment, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    public completePayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    public completePayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    public failedPayment(request: user_info_pb.SubscriptionPayment, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    public failedPayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    public failedPayment(request: user_info_pb.SubscriptionPayment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.SubscriptionPayment) => void): grpc.ClientUnaryCall;
    public requestChangePhone(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public requestChangePhone(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public requestChangePhone(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public requestRemoveAccount(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public requestRemoveAccount(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public requestRemoveAccount(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public cancelLaterAction(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public cancelLaterAction(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public cancelLaterAction(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public changePhone(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public changePhone(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public changePhone(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public getLaterAction(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public getLaterAction(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public getLaterAction(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public deleteAccount(request: user_info_pb.LaterAction, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public deleteAccount(request: user_info_pb.LaterAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public deleteAccount(request: user_info_pb.LaterAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.LaterAction) => void): grpc.ClientUnaryCall;
    public afterLogin(request: user_info_pb.Online, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    public afterLogin(request: user_info_pb.Online, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    public afterLogin(request: user_info_pb.Online, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    public afterLogout(request: user_info_pb.Online, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    public afterLogout(request: user_info_pb.Online, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    public afterLogout(request: user_info_pb.Online, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.Online) => void): grpc.ClientUnaryCall;
    public listOnline(request: user_info_pb.Online, callback: (error: grpc.ServiceError | null, response: user_info_pb.OnlineList) => void): grpc.ClientUnaryCall;
    public listOnline(request: user_info_pb.Online, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_info_pb.OnlineList) => void): grpc.ClientUnaryCall;
    public listOnline(request: user_info_pb.Online, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_info_pb.OnlineList) => void): grpc.ClientUnaryCall;
}
