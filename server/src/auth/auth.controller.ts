import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CredentialsDTO, UserDTO } from '../../../models/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard())
  @Get('users')
  async users(): Promise<UserDTO[]> {
    return this.authService.findUser();
  }

  @Post('signup')
  async signup(@Body() user: UserDTO): Promise<unknown> {
    return this.authService.signup(user);
  }

  @Post('signin')
  async signin(@Body() credentials: CredentialsDTO): Promise<any> {
    return this.authService.signin(credentials);
  }
}
