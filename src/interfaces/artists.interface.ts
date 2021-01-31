import { Genre } from './genres.interface';
import { Festival } from './festivals.interface';

interface MongoResult {
  _doc?: any;
}

export interface Artist extends MongoResult {
  _id?: string;
  name: string;
  description?: string;
  image?: string;
  video?: string[];
  genre?: string | Genre;
  festivals?: string[] | Festival[];
  createdAt?: Date;
  updatedAt?: Date;
}
