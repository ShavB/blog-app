import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop()
  title: string;

  @Prop()
  desc: string;

  @Prop()
  img: string;

  @Prop()
  date: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
