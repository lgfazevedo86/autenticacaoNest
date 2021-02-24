import { LoginUserDto } from './users/dto/login-user.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Controller, Request, Post, UseGuards, Get, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { ApiBearerAuth, ApiHeader, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // @HttpCode(HttpStatus.OK)
  // // @ApiOperation()
  // @ApiOkResponse({})
  // async login(@Request() req:any) {

  //   return this.authService.login(req.user);
  // }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() loginDto:LoginUserDto) {
    // return req.user;
    
    return this.authService.login(req.user._doc);

  }


  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  // @ApiHeader({
  //     name: 'Bearer',
  //     description: 'the token we need for auth.'
  // })
  getProfile(@Request() req) {
    
    return req.user;
  }
}

