export interface User {
  id: number;
  name: string;
  username: string;
  imgProfile: string;
  age: number;
  interestId: number;
  email: string;
  //password?: string;
  userType: string;
  yearsExperience?: number;
  professionId?: number;
  roles: string[];
}
