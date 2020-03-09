/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.19.577 on 2020-03-05 11:16:13.

export interface AbstractModel {
    id?: number;
}

export interface Raid extends AbstractModel {
    date: DateAsNumber;
    comment?: string;
    raidType: RaidType;
    raidLog?: string;
    discordMessageId?: string;
    formattedDate?: string;
}

export interface RaidParticipant extends AbstractModel {
    raid: Raid;
    character: UserCharacter;
}

export interface RaidSubscription extends AbstractModel {
    raid: Raid;
    response: RaidSubscriptionResponse;
    character?: UserCharacter;
    user: User;
}

export interface RosterMember extends AbstractModel {
    raidType: RaidType;
    userCharacter: UserCharacter;
}

export interface User extends AbstractModel {
    name: string;
    discordId?: string;
}

export interface UserCharacter extends AbstractModel {
    name: string;
    spec: CharacterSpec;
    main: boolean;
    user: User;
}

export interface ApplicationSettings {
    roasterEnabled: boolean;
}

export interface Session {
    user: User;
    roles: UserRole[];
}

export interface HttpClient<O> {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; options?: O; }): RestResponse<R>;
}

export class RaidControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /raids
     * Java method: be.hehehe.lapinstance.controller.RaidController.findAllRaids
     */
    findAllRaids(options?: O): RestResponse<Raid[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raids`, options: options });
    }

    /**
     * HTTP POST /raids
     * Java method: be.hehehe.lapinstance.controller.RaidController.saveRaid
     */
    saveRaid(raid: Raid, options?: O): RestResponse<Raid> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`raids`, data: raid, options: options });
    }

    /**
     * HTTP DELETE /raids/{id}
     * Java method: be.hehehe.lapinstance.controller.RaidController.deleteRaid
     */
    deleteRaid(id: number, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`raids/${id}`, options: options });
    }

    /**
     * HTTP GET /raids/{id}
     * Java method: be.hehehe.lapinstance.controller.RaidController.getRaid
     */
    getRaid(id: number, options?: O): RestResponse<Raid> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raids/${id}`, options: options });
    }

    /**
     * HTTP GET /raids/{raidId}/missingSubscriptions
     * Java method: be.hehehe.lapinstance.controller.RaidController.findMissingRaidSubscriptions
     */
    findMissingRaidSubscriptions(raidId: number, options?: O): RestResponse<User[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raids/${raidId}/missingSubscriptions`, options: options });
    }

    /**
     * HTTP POST /raids/{raidId}/missingSubscriptions/notify
     * Java method: be.hehehe.lapinstance.controller.RaidController.notifyMissingRaidSubscriptions
     */
    notifyMissingRaidSubscriptions(raidId: number, users: User[], options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`raids/${raidId}/missingSubscriptions/notify`, data: users, options: options });
    }

    /**
     * HTTP GET /raids/{raidId}/subscriptions
     * Java method: be.hehehe.lapinstance.controller.RaidController.findRaidSubscriptions
     */
    findRaidSubscriptions(raidId: number, options?: O): RestResponse<RaidSubscription[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raids/${raidId}/subscriptions`, options: options });
    }

    /**
     * HTTP POST /raids/{raidId}/subscriptions
     * Java method: be.hehehe.lapinstance.controller.RaidController.saveRaidSubscription
     */
    saveRaidSubscription(raidId: number, raidSubscription: RaidSubscription, options?: O): RestResponse<RaidSubscription> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`raids/${raidId}/subscriptions`, data: raidSubscription, options: options });
    }
}

export class UserCharacterControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /userCharacters
     * Java method: be.hehehe.lapinstance.controller.UserCharacterController.findAllUserCharacters
     */
    findAllUserCharacters(options?: O): RestResponse<UserCharacter[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`userCharacters`, options: options });
    }
}

export class ApplicationSettingsControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /applicationSettings
     * Java method: be.hehehe.lapinstance.controller.ApplicationSettingsController.getApplicationSettings
     */
    getApplicationSettings(options?: O): RestResponse<ApplicationSettings> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`applicationSettings`, options: options });
    }
}

export class UserControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /users
     * Java method: be.hehehe.lapinstance.controller.UserController.findAllUsers
     */
    findAllUsers(options?: O): RestResponse<User[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`users`, options: options });
    }

    /**
     * HTTP GET /users/{userId}/characters
     * Java method: be.hehehe.lapinstance.controller.UserController.findAllUserCharacters
     */
    findAllUserCharacters(userId: number, options?: O): RestResponse<UserCharacter[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`users/${userId}/characters`, options: options });
    }

    /**
     * HTTP POST /users/{userId}/characters
     * Java method: be.hehehe.lapinstance.controller.UserController.saveUserCharacter
     */
    saveUserCharacter(userId: number, character: UserCharacter, options?: O): RestResponse<UserCharacter> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`users/${userId}/characters`, data: character, options: options });
    }

    /**
     * HTTP GET /users/{userId}/rosterMemberships
     * Java method: be.hehehe.lapinstance.controller.UserController.findAllRosterMemberships
     */
    findAllRosterMemberships(userId: number, options?: O): RestResponse<RosterMember[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`users/${userId}/rosterMemberships`, options: options });
    }

    /**
     * HTTP GET /users/{userId}/subscriptions
     * Java method: be.hehehe.lapinstance.controller.UserController.findAllSubscriptions
     */
    findAllSubscriptions(userId: number, options?: O): RestResponse<RaidSubscription[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`users/${userId}/subscriptions`, options: options });
    }
}

export class SessionControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /session/user
     * Java method: be.hehehe.lapinstance.controller.SessionController.getCurrentUser
     */
    getCurrentUser(options?: O): RestResponse<Session> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`session/user`, options: options });
    }
}

export class RaidTypeControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /raidTypes/{raidType}/nextReset
     * Java method: be.hehehe.lapinstance.controller.RaidTypeController.nextReset
     */
    nextReset(raidType: RaidType, options?: O): RestResponse<DateAsNumber> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raidTypes/${raidType}/nextReset`, options: options });
    }
}

export class RosterControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP POST /roster
     * Java method: be.hehehe.lapinstance.controller.RosterController.addRosterMember
     */
    addRosterMember(member: RosterMember, options?: O): RestResponse<RosterMember> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`roster`, data: member, options: options });
    }

    /**
     * HTTP GET /roster
     * Java method: be.hehehe.lapinstance.controller.RosterController.findAllRosterMembers
     */
    findAllRosterMembers(options?: O): RestResponse<RosterMember[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`roster`, options: options });
    }

    /**
     * HTTP DELETE /roster
     * Java method: be.hehehe.lapinstance.controller.RosterController.removeRosterMember
     */
    removeRosterMember(member: RosterMember, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`roster`, data: member, options: options });
    }
}

export type RestResponse<R> = Promise<Axios.GenericAxiosResponse<R>>;

export type DateAsNumber = number;

export enum CharacterClass {
    WARRIOR = "WARRIOR",
    PALADIN = "PALADIN",
    DRUID = "DRUID",
    PRIEST = "PRIEST",
    ROGUE = "ROGUE",
    MAGE = "MAGE",
    WARLOCK = "WARLOCK",
    HUNTER = "HUNTER",
}

export enum CharacterRole {
    HEAL = "HEAL",
    TANK = "TANK",
    DPS_RANGED = "DPS_RANGED",
    DPS_CAC = "DPS_CAC",
}

export enum CharacterSpec {
    WARRIOR_TANK = "WARRIOR_TANK",
    PALADIN_PROT = "PALADIN_PROT",
    DRUID_TANK = "DRUID_TANK",
    PRIEST_HEAL = "PRIEST_HEAL",
    PALADIN_HEAL = "PALADIN_HEAL",
    DRUID_RESTO = "DRUID_RESTO",
    ROGUE = "ROGUE",
    WARRIOR_DPS = "WARRIOR_DPS",
    PALADIN_RET = "PALADIN_RET",
    DRUID_CAT = "DRUID_CAT",
    MAGE = "MAGE",
    WARLOCK = "WARLOCK",
    HUNTER = "HUNTER",
    PRIEST_SHADOW = "PRIEST_SHADOW",
    DRUID_BALANCE = "DRUID_BALANCE",
}

export enum RaidSubscriptionResponse {
    PRESENT = "PRESENT",
    LATE = "LATE",
    BENCH = "BENCH",
    ABSENT = "ABSENT",
}

export enum RaidType {
    ONYXIA = "ONYXIA",
    MOLTEN_CORE = "MOLTEN_CORE",
    ZUL_GURUB = "ZUL_GURUB",
    BLACKWING_LAIR = "BLACKWING_LAIR",
    AHN_QIRAJ_20 = "AHN_QIRAJ_20",
    AHN_QIRAJ_40 = "AHN_QIRAJ_40",
    NAXXRAMAS = "NAXXRAMAS",
}

export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
}

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}


// Added by 'AxiosClientExtension' extension

import axios from "axios";
import * as Axios from "axios";

declare module "axios" {
    export interface GenericAxiosResponse<R> extends Axios.AxiosResponse {
        data: R;
    }
}

class AxiosHttpClient implements HttpClient<Axios.AxiosRequestConfig> {

    constructor(private axios: Axios.AxiosInstance) {
    }

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; options?: Axios.AxiosRequestConfig; }): RestResponse<R> {
        function assign(target: any, source?: any) {
            if (source != undefined) {
                for (const key in source) {
                    if (source.hasOwnProperty(key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        }

        const config: Axios.AxiosRequestConfig = {};
        config.method = requestConfig.method as typeof config.method;  // `string` in axios 0.16.0, `Method` in axios 0.19.0
        config.url = requestConfig.url;
        config.params = requestConfig.queryParams;
        config.data = requestConfig.data;
        assign(config, requestConfig.options);
        const copyFn = requestConfig.copyFn;

        const axiosResponse = this.axios.request(config);
        return axiosResponse.then(axiosResponse => {
            if (copyFn && axiosResponse.data) {
                (axiosResponse as any).originalData = axiosResponse.data;
                axiosResponse.data = copyFn(axiosResponse.data);
            }
            return axiosResponse;
        });
    }
}

export class AxiosRaidControllerClient extends RaidControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosUserCharacterControllerClient extends UserCharacterControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosApplicationSettingsControllerClient extends ApplicationSettingsControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosUserControllerClient extends UserControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosSessionControllerClient extends SessionControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosRaidTypeControllerClient extends RaidTypeControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosRosterControllerClient extends RosterControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}