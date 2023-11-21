import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User, UserStatus } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getUser(@Param('id') id: string): User {
    return this.userService.getUser(id);
  }

  @Patch('/:id/userStatus')
  updateUser(
    @Param('id') id: string,
    @Body('userStatus') userStatus: UserStatus,
  ): User {
    return this.userService.updateUser(id, userStatus);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.userService.deleteUser(id);
  }
}
