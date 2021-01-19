import { Genre } from './genres.interface';
import { Country } from './countries.interface';
import { Artist } from './artists.interface';

export interface Festival {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  video: string;
  thumbnail: string;
  poster: string;
  homepage: string;
  stamp: string;
  genre: Genre;
  country: Country;
  artists: Artist[];
  createdAt: Date;
  updatedAt: Date;
}
