import { Wishlist } from './wishlists.interface';
import { Badge } from './badges.interface';
import { Festival } from './festivals.interface';
import { Board } from './boards.interface';

export interface User {
  _id?: string;
  email: string;
  password: string;
  nickname?: string;
  image?: string;
  wishlists?: Wishlist;
  badges?: Badge[];
  visits?: Festival[];
  boards?: Board[];
  createdAt?: Date;
  updatedAt?: Date;
}
