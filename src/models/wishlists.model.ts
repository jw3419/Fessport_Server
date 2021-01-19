import { model, Schema, Document } from 'mongoose';
import { Wishlist } from '../interfaces/wishlists.interface';

const wishlistSchema: Schema = new Schema({
  festivals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Festival',
    },
  ],
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

const wishlistModel = model<Wishlist & Document>('Wishlist', wishlistSchema);

export default wishlistModel;
