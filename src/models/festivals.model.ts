import { model, Schema, Document } from 'mongoose';
import { Festival } from '../interfaces/festivals.interface';

const festivalSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  video: [
    {
      type: String,
    },
  ],
  thumbnail: {
    type: String,
  },
  poster: {
    type: String,
  },
  homepage: {
    type: String,
  },
  stamp: {
    type: String,
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: 'Genre',
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country',
  },
  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artist',
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

const festivalModel = model<Festival & Document>('Festival', festivalSchema);

export default festivalModel;
