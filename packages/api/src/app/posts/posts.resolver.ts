import {
  Resolver,
  Args,
  Query,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from '../users/users.service';
import { PostsService } from './posts.service';
import { Post } from './models/posts.model';

@Resolver(of => Post)
export class PostsResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}

  @Query(returns => Post)
  async getPost(@Args('id') id: number) {
    return this.postsService.getPost(id);
  }

  @Query(returns => [Post])
  async posts() {
    return this.postsService.getAllPosts();
  }

  @ResolveProperty()
  async createdBy(@Parent() post: Post) {
    return this.usersService.getById(post.createdById);
  }
}
