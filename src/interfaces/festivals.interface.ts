import { Genre } from './genres.interface';
import { Country } from './countries.interface';
import { Artist } from './artists.interface';
import { Types } from 'mongoose';

interface MongoResult {
  _doc?: any;
}

export interface Festival extends MongoResult {
  _id: string;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  video?: string;
  thumbnail?: string;
  poster?: string;
  homepage?: string;
  stamp?: string;
  genre?: Types.ObjectId | Genre;
  country?: Types.ObjectId | Country;
  artists?: Types.ObjectId[] | Artist[];
  createdAt?: Date;
  updatedAt?: Date;
}
