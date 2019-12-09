import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PostsService } from '../posts/posts.service';

@Module({
  providers: [UsersService, UsersResolver, PostsService, DateScalar],
})
export class UsersModule {}
