import {environment} from "../../../environments/environment";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserProfile {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  image: string;
  isSocailLogin: boolean;
  gender: string;


}

