import { Genre } from './genres.interface';
import { Festival } from './festivals.interface';

export interface Artist {
  _id: string;
  name: string;
  description: string;
  image: string;
  video: string;
  genre: Genre;
  festivals: Festival[];
  createdAt?: Date;
  updatedAt?: Date;
}
