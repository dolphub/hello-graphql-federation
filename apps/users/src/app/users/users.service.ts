import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.dto';
import { User } from './models/user.model';
import { UserArgs } from './dto/user-args.dto';

import { uuid } from 'uuidv4';

import * as moment from 'moment';

const userData: User[] = [
  {
    id: uuid(),
    creationDate: new Date(new Date().toISOString()),
    description: 'First user',
    hobbies: ['biking', 'coding', 'loling'],
    name: 'Randy',
  },
  {
    id: uuid(),
    creationDate: new Date(new Date().toISOString()),
    hobbies: ['eating', 'sleeping'],
    name: 'Snorlax',
  },
  {
    id: uuid(),
    creationDate: new Date(new Date().toISOString()),
    hobbies: ['pick things up', 'put them down'],
    name: 'Arnold',
  },
  {
    id: uuid(),
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
      id: uuid(),
      creationDate: new Date(new Date().toISOString()),
      ...data,
    };
    userData.push(newUser);
    return newUser;
  }
  async findOneById(id: string): Promise<User> {
    return userData.find(x => x.id === id);
  }
  async findAll(UsersArgs: UserArgs): Promise<User[]> {
    return userData;
  }
  async remove(id: string): Promise<boolean> {
    return true;
  }
}
