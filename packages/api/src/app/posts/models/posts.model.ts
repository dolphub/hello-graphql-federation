import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '../../users/models/users.model';

@ObjectType()
export class Post {
  @Field(type => ID)
  id: number;

  @Field()
  content: string;

  createdById: number;

  @Field(type => User)
  createdBy?: User;

  @Field()
  createdAt: Date;

  @Field(type => [User], { nullable: true })
  likes?: User[];
}
