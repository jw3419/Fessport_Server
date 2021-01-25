import { Badge } from './badges.interface';
import { Festival } from './festivals.interface';
import { Artist } from './artists.interface';
import { Board } from './boards.interface';

export interface User {
  _id?: string;
  email?: string;
  password?: string;
  nickname?: string;
  image?: string;
  wishFestivals?: string[] | Festival[];
  wishArtists?: string[] | Artist[];
  badges?: string[] | Badge[];
  visits?: string[] | Festival[];
  boards?: string[] | Board[];
  createdAt?: Date;
  updatedAt?: Date;
}
