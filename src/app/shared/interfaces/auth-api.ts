import { User } from "./user";

export interface AuthApi {
  user: User;
  token: string;
}
