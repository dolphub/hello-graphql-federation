import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
// import { PubSub } from 'apollo-server-express';
import { UsersService } from './users.service';
import { User } from './models/users.model';
import { NewUserInput } from './dto/new-user.dto';
import { UserArgs } from './dto/user-args.dto';
import { PostsService } from '../posts/posts.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}

  @Query(returns => User)
  async user(@Args('id') id: number): Promise<User> {
    const recipe = await this.usersService.getById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query(returns => [User])
  users(@Args() userArgs: UserArgs): Promise<User[]> {
    return this.usersService.findAll(userArgs);
  }

  @Mutation(returns => User)
  async addUser(
    @Args('newUserData') newRecipeData: NewUserInput,
  ): Promise<User> {
    const recipe = await this.usersService.create(newRecipeData);
    return recipe;
  }

  @ResolveProperty()
  async posts(@Parent() user: User) {
    console.log(user);
    return this.postsService.getPostsForUser(user.id);
  }
}
