import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogDto } from './blog.dto';
import { AuthGuard } from 'src/auth/auth.guard';
// import { Blog } from './blog.schema';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getBlog(): Promise<BlogDto[]> {
    return this.blogService.getBlog();
  }

  @Get(':id')
  async getBlogById(@Param('id') id: string): Promise<BlogDto> {
    return this.blogService.getBlogById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  createBlog(@Body() blogDto: BlogDto) {
    return this.blogService.Create(blogDto);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  updateBlog(
    @Param('id') id: string,
    @Body() blogDto: BlogDto,
  ): Promise<BlogDto> {
    return this.blogService.updateBlog(id, blogDto);
  }
}
