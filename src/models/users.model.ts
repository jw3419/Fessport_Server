import { model, Schema, Document } from 'mongoose';
import { User } from '../interfaces/users.interface';

const userSchema: Schema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  wishFestivals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Festival',
    },
  ],
  wishArtists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artist',
    },
  ],
  badge: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Badge',
    },
  ],
  visits: [
    {
      type: Schema.Types.ObjectId,
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

const userModel = model<User & Document>('User', userSchema);

export default userModel;
