import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.dto';
import { User } from './models/users.model';
import { UserArgs } from './dto/user-args.dto';

import { uuid } from 'uuidv4';

import * as moment from 'moment';

const userData: User[] = [
  {
    id: 1,
    creationDate: new Date(new Date().toISOString()),
    description: 'First user',
    hobbies: ['biking', 'coding', 'loling'],
    name: 'Randy',
  },
  {
    id: 2,
    creationDate: new Date(new Date().toISOString()),
    hobbies: ['eating', 'sleeping'],
    name: 'Snorlax',
  },
  {
    id: 3,
    creationDate: new Date(new Date().toISOString()),
    hobbies: ['pick things up', 'put them down'],
    name: 'Arnold',
  },
  {
    id: 4,
    creationDate: new Date(new Date().toISOString()),
    hobbies: ['runniung', 'joking', 'rofling'],
    name: 'Derpshow',
  },
];

@Injectable()
export class UsersService {
  /**
   *
   */
  constructor() {
    //
  }
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */
  async create(data: NewUserInput): Promise<User> {
    const newUser = {
      id: userData.length + 2,
      creationDate: new Date(new Date().toISOString()),
      ...data,
    };
    userData.push(newUser);
    return newUser;
  }
  async getById(id: number): Promise<User> {
    return userData.find(x => x.id === id);
  }
  async findAll(UsersArgs: UserArgs): Promise<User[]> {
    return userData;
  }
  async remove(id: number): Promise<boolean> {
    return true;
  }
}
