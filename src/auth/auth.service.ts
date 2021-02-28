import { LoginUserDto } from './../users/dto/login-user.dto';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService

  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }


  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // async findRefreshToken(token: string) {
  //   const refreshToken = await this.refreshTokenModel.findOne({refreshToken: token});
  //   if (!refreshToken) {
  //     throw new UnauthorizedException('User has been logged out.');
  //   }
  //   return refreshToken.userId;
  // }
}
