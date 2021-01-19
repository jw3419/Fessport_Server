import { model, Schema, Document } from 'mongoose';
import { PostCategory } from '../interfaces/postCategories.interface';

const postCategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const postCategoryModel = model<PostCategory & Document>('PostCategory', postCategorySchema);

export default postCategoryModel;
