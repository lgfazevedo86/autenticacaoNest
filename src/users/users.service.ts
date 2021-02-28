import { User, UserDocument } from './schema/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { debug } from 'console';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private usuarioModel: Model<UserDocument>

    ) { }

    async findOne(email: string): Promise<User | undefined> {
        return this.usuarioModel.findOne(user => email === email);

    }


    


}
