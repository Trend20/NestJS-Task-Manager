import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './types/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  // create user
  createUser(createUserDto: CreateUserDto): User {
    const { username, age, email, location } = createUserDto;
    const user: User = {
      id: uuidv4(),
      username,
      age,
      email,
      location,
      userStatus: UserStatus.ACTIVE,
    };
    this.users.push(user);
    return user;
  }

  // get all users
  getAllUsers(): User[] {
    return this.users;
  }

  // get user by id
  getUser(id: string): User {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  // update user by id
  updateUser(id: string, userStatus: UserStatus): User {
    const user = this.getUser(id);
    user.userStatus = userStatus;
    return user;
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
