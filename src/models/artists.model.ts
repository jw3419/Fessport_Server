import { model, Schema, Document } from 'mongoose';
import { Artist } from '../interfaces/artists.interface';

const artistSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  genre: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Genre',
  },
  festivals: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Festival',
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

const artistModel = model<Artist & Document>('Artist', artistSchema);

export default artistModel;
