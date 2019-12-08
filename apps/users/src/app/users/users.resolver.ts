import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'apollo-server-express';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { NewUserInput } from './dto/new-user.dto';
import { UserArgs } from './dto/user-args.dto';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly recipesService: UsersService) { }

  @Query(returns => User)
  async user(@Args('id') id: string): Promise<User> {
    const recipe = await this.recipesService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query(returns => [User])
  users(@Args() recipesArgs: UserArgs): Promise<User[]> {
    return this.recipesService.findAll(recipesArgs);
  }

  @Mutation(returns => User)
  async addUser(
    @Args('newUserData') newRecipeData: NewUserInput,
  ): Promise<User> {
    const recipe = await this.recipesService.create(newRecipeData);
    return recipe;
  }
}
