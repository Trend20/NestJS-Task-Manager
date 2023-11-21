export interface User {
  username: string;
  email: string;
  age: number;
  location: string;
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  IN_ACTIVE = 'IN_ACTIVE',
}
