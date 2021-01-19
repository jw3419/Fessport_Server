import { model, Schema, Document } from 'mongoose';
import { Board } from '../interfaces/boards.interface';

const boardSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  festival: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Festival',
  },
  postCategory: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'PostCategory',
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const boardModel = model<Board & Document>('Board', boardSchema);

export default boardModel;
