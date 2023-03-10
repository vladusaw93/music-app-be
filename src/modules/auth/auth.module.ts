import { Module } from '@nestjs/common';
import {JwtModule, JwtService} from '@nestjs/jwt';
import { AuthController } from './controller';
import { AuthService } from './service';
import { UserModule } from '../user/user.module';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [UserModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, RtStrategy, AtStrategy, JwtService],
})
export class AuthModule {}
