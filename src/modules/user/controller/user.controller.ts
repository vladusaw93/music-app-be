import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service';
import { GetCurrentUserId } from '../../common/decorators';
import { Types } from 'mongoose';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  getCurrentUser(@GetCurrentUserId() _id: Types.ObjectId) {
    return this.userService.getUserInfo(_id);
  }
}
