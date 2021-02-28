import { AuthGuard } from '@nestjs/passport';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { CreateForgotPasswordDto } from './dto/create-forgot-password.dto';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { VerifyUuidDto } from './dto/verify-uuid.dto';
import { ApiOperation, ApiOkResponse, ApiCreatedResponse, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { Body, Controller, HttpCode, HttpStatus, Post, Req, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {


    constructor(
        private readonly userService: UsersService,
        ) {}

    // @Post('verify-email')
    // @HttpCode(HttpStatus.OK)
    // @ApiOperation({})
    // @ApiOkResponse({})
    // async verifyEmail(@Req() req: Request, @Body() verifyUuidDto: VerifyUuidDto) {
    //     return await this.userService.verifyEmail(req, verifyUuidDto);
    // }

    // @Post('login')
    // @HttpCode(HttpStatus.OK)
    // @ApiOperation({})
    // @ApiOkResponse({})
    // async login(@Req() req: Request, @Body() loginUserDto: LoginUserDto) {
    //     return await this.userService.login(req, loginUserDto);
    // }

    // @Post('refresh-access-token')
    // @HttpCode(HttpStatus.CREATED)
    // @ApiOperation({})
    // @ApiCreatedResponse({})
    // async refreshAccessToken(@Body() refreshAccessTokenDto: RefreshAccessTokenDto) {
    //     return await this.userService.refreshAccessToken(refreshAccessTokenDto);
    // }

    // @Post('forgot-password')
    // @HttpCode(HttpStatus.OK)
    // @ApiOperation({})
    // @ApiOkResponse({})
    // async forgotPassword(@Req() req: Request, @Body() createForgotPasswordDto: CreateForgotPasswordDto) {
    //     return await this.userService.forgotPassword(req, createForgotPasswordDto);
    // }

    // @Post('forgot-password-verify')
    // @HttpCode(HttpStatus.OK)
    // @ApiOperation({})
    // @ApiOkResponse({})
    // async forgotPasswordVerify(@Req() req: Request, @Body() verifyUuidDto: VerifyUuidDto) {
    //     return await this.userService.forgotPasswordVerify(req, verifyUuidDto);
    // }

    // @Post('reset-password')
    // @HttpCode(HttpStatus.OK)
    // @ApiOperation({})
    // @ApiBearerAuth()
    // @ApiHeader({
    //     name: 'Bearer',
    //     description: 'the token we need for auth.'
    // })
    // @ApiOkResponse({})
    // async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    //     return await this.userService.resetPassword(resetPasswordDto);
    // }

    // @Get('data')
    // @UseGuards(AuthGuard('jwt'))
    // // @Roles('admin')
    // @ApiBearerAuth()
    // @ApiOperation({})
    // @ApiHeader({
    //     name: 'Bearer',
    //     description: 'the token we need for auth.'
    // })
    // @HttpCode(HttpStatus.OK)
    // @ApiOkResponse({})
    // findAll() {
    //     return this.userService.findAll();
    // }
}
