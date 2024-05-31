import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from './blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

  async getBlog(): Promise<Blog[]> {
    const allBlogs = this.blogModel.find().exec();
    return allBlogs;
  }

  async getBlogById(id: string): Promise<Blog> {
    const blogById = this.blogModel.findById(id);
    return blogById;
  }

  async Create(blogModel: Blog): Promise<Blog> {
    const createdBlog = new this.blogModel(blogModel);
    return createdBlog.save();
  }

  async updateBlog(id: string, blogModel: Blog): Promise<Blog> {
    const updatedBlog = this.blogModel
      .findByIdAndUpdate(id, blogModel, { new: true })
      .exec();
    return updatedBlog;
  }
}
