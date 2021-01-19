import { model, Schema, Document } from 'mongoose';
import { Badge } from '../interfaces/badges.interface';

const badgeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
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

const badgeModel = model<Badge & Document>('Badge', badgeSchema);

export default badgeModel;
