import { model, Schema, Document } from 'mongoose';
import { Genre } from '../interfaces/genres.interface';

const genreSchema: Schema = new Schema({
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

const genreModel = model<Genre & Document>('Genre', genreSchema);

export default genreModel;
