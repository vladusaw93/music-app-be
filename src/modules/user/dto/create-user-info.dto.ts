import { User } from '../shcema';
import { Types } from 'mongoose';

export class CreateUserInfoDto {
  email: string;
  _id: Types.ObjectId;
  active: boolean;
  first_name: string;
  last_name: string;
  age: number;

  constructor(model: User) {
    this._id = model._id;
    this.email = model.email;
    this.age = model.age;
    this.active = model.active;
    this.first_name = model.first_name;
    this.last_name = model.last_name;
  }
}
