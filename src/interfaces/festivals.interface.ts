import { Genre } from './genres.interface';
import { Country } from './countries.interface';
import { Artist } from './artists.interface';

interface MongoResult {
  _doc?: any;
}

export interface Festival extends MongoResult {
  _id: string;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  video?: string[];
  thumbnail?: string;
  poster?: string;
  homepage?: string;
  stamp?: string;
  genre?: string | Genre;
  country?: string | Country;
  artists?: (string | Artist)[];
  createdAt?: Date;
  updatedAt?: Date;
}
