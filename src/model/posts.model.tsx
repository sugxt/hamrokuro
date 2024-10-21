import { RecordModel } from "pocketbase";

export type postDataType = {
  guff: string;
};
export type PostResponse = {
  isSuccess: boolean;
  message: string;
};
export type PostData = {
  isSuccess: boolean;
  message: string;
  data: RecordModel | null;
};

export type MultiPostData = {
  isSuccess: boolean;
  message: string;
  data: RecordModel[] | null;
};

export type postCommentType = {
  gaff: string;
};
