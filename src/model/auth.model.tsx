export type AuthCreds = {
  identity: string;
  password: string;
};

export type SignUpCreds = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
};

export type AuthResponse = {
  isSuccess: boolean;
  message: string;
};

export interface AuthData {
  id: string;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  created: string;
  updated: string;
  name: string;
  avatar: string;
}
