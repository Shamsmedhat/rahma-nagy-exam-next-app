export interface Profile {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: "user";
  isVerified: boolean;
  createdAt: Date;
}

export interface GetProfile_Response {
  message: string;
  user: Profile;
}
