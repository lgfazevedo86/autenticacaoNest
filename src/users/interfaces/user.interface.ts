import { Document } from 'mongoose';

export interface User extends Document {
  readonly userId: string
  readonly email: string
  readonly password: string

}

