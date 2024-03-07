import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async signupUser(): Promise<UserModel[]> {
    return this.userService.users({});
  }
}
