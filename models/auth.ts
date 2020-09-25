import { DataShape } from "./DataShape";

export interface CredentialsDTO {
  username: string;
  password: string;
}

export interface UserDTO {
  username: string;
  password: string;
  email: string;
  admin: boolean;
  salt?: string;
}

export interface User extends UserDTO, DataShape {}
