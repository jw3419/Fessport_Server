import { model, Schema, Document } from 'mongoose';
import { BoardCategory } from '../interfaces/boardCategories.interface';

const boardCategorySchema: Schema = new Schema({
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

const boardCategoryModel = model<BoardCategory & Document>('BoardCategory', boardCategorySchema);

export default boardCategoryModel;
