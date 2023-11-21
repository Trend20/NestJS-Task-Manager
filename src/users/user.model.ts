export interface User {
  id: string;
  username: string;
  email: string;
  age: number;
  location: string;
  userStatus: string;
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  IN_ACTIVE = 'IN_ACTIVE',
}
