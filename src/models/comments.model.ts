import { model, Schema, Document } from 'mongoose';
import { Comment } from '../interfaces/comments.interface';

const commentSchema: Schema = new Schema({
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  board: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Board',
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

const commentModel = model<Comment & Document>('Comment', commentSchema);

export default commentModel;
