import { RecordModel } from "pocketbase";

export interface GuffadiResponse {
    isSuccess:boolean;
    data:RecordModel | null;
    message:string
}

export interface GuffadiGuffType {
    isSuccess:boolean;
    data:RecordModel[] | null;
    message:string;
}