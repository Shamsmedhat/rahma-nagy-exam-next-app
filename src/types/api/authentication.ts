import type { Profile } from "./profile";

export interface SignIn_Request {
  email: string;
  password: string;
}

export interface SignUp_Request {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

export interface SuccessfullAuth_Response {
  message: string;
  token: string;
  user: Profile;
}
