import countryModel from '../models/countries.model';
import { Country } from '../interfaces/countries.interface';
import HttpException from '../exceptions/HttpException';
import { Genre } from '../interfaces/genres.interface';
import genreModel from '../models/genres.model';
import artistModel from '../models/artists.model';
import { Artist } from '../interfaces/artists.interface';
import { Festival } from '../interfaces/festivals.interface';
import festivalModel from '../models/festivals.model';

class CategoryService {
  public countries = countryModel;
  public genres = genreModel;
  public artists = artistModel;
  public festivals = festivalModel;

  public async findAllFestivalCategory(): Promise<Festival[]> {
    const festivalCategories: Festival[] = await this.festivals.find({}, 'name');
    return festivalCategories;
  }

  public async findAllCountryName(): Promise<Country[]> {
    const allCountry: Country[] = await this.countries.find({}, 'name');
    if (!allCountry) throw new HttpException(409, 'error');
    return allCountry;
  }

  public async findAllGenreName(): Promise<Genre[]> {
    const allGenre: Genre[] = await this.genres.find({}, 'name');
    if (!allGenre) throw new HttpException(409, 'error');
    return allGenre;
  }

  public async findAllArtistName(): Promise<Artist[]> {
    const allArtist: Artist[] = await this.artists.find({}, 'name');
    if (!allArtist) throw new HttpException(409, 'error');
    return allArtist;
  }
}

export default CategoryService;
