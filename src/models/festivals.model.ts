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
  video: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  homepage: {
    type: String,
    required: true,
  },
  stamp: {
    type: String,
    required: true,
  },
  genre: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Genre',
  },
  country: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Country',
  },
  artists: [
    {
      type: Schema.Types.ObjectId,
      required: true,
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
