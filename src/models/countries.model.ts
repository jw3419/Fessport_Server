import { model, Schema, Document } from 'mongoose';
import { Country } from '../interfaces/countries.interface';

const countrySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  flagImage: {
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

const countryModel = model<Country & Document>('Country', countrySchema);

export default countryModel;
