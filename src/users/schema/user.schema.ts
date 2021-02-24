import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";
import { type } from "os";

export type UserDocument = User & Document

@Schema()
export class User{
    @Prop()
    userId:string
    @Prop()
    username: String
    @Prop()
    password:String
}

export const UserSchema = SchemaFactory.createForClass(User)