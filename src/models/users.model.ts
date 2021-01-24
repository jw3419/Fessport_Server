import { model, Schema, Document } from 'mongoose';
import { User } from '../interfaces/users.interface';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
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
  badges: [
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
