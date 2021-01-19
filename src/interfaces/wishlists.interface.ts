import { Festival } from './festivals.interface';
import { Artist } from './artists.interface';

export interface Wishlist {
  _id: string;
  festivals?: Festival[];
  artists?: Artist[];
  createdAt: Date;
  updatedAt: Date;
}
