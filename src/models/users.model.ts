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
  ninkname: {
    type: String,
  },
  image: {
    type: String,
  },
  wishlists: {
    type: Schema.Types.ObjectId,
    ref: 'Wishlist',
  },
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
  boards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Board',
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
