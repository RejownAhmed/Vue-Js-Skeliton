export interface ILoginUser {
  id?: string;
  name: string;
  email: string;
  password?: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
export interface IResetRequest {
  email: string;
}
