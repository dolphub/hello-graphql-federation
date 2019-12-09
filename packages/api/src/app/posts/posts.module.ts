import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { UsersService } from '../users/users.service';

@Module({
  providers: [PostsService, PostsResolver, UsersService],
})
export class ProductsModule {}
