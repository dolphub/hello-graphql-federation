import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { Post } from './models/posts.model';
import { Args } from '@nestjs/graphql';
import { NewPostInput } from '../dto/new-post.dto';

const postData: Post[] = [
  {
    id: 1,
    content: 'post 1',
    createdAt: new Date(new Date().toISOString()),
    createdById: 1,
  },
  {
    id: 2,
    content: 'post 2',
    createdAt: new Date(new Date().toISOString()),
    createdById: 1,
  },
  {
    id: 3,
    content: 'post 3',
    createdAt: new Date(new Date().toISOString()),
    createdById: 2,
  },
];

@Injectable()
export class PostsService {
  async getAllPosts() {
    return postData;
  }

  async getPost(id: number) {
    return postData.find(x => x.id === id);
  }

  async getPostsForUser(id: number) {
    return postData.filter(x => x.createdById === id);
  }

  async createPost(data: NewPostInput) {
    const post: Post = {
      id: postData.length + 2,
      createdAt: new Date(new Date().toISOString()),
      createdById: 1,
      ...data,
    };
    postData.push(post);
  }
}
