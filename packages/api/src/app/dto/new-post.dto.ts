import { IsOptional, Length, MaxLength, IsNumber } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class NewPostInput {
  @Field()
  @MaxLength(30)
  content: string;
}
