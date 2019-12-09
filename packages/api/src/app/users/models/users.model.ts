import { Field, ID, ObjectType } from 'type-graphql';
import { Post } from '../../posts/models/posts.model';

@ObjectType()
export class User {
  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  hobbies: string[];

  @Field(type => [Post])
  posts?: Post[];
}
