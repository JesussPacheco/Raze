export interface AuthenticateResponse {
  id: number;
  name: string;
  username: string;
  imgProfile: string;
  age: number;
  interestId: number;
  email: string;
  userType: string;
  yearsExperience?: number;
  professionId?: number;
  roles: string[];
  token: string;
}
