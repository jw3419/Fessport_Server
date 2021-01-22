import countryModel from '../models/countries.model';
import { Country } from '../interfaces/countries.interface';
import HttpException from '../exceptions/HttpException';
import { Genre } from '../interfaces/genres.interface';
import genreModel from '../models/genres.model';

class CategoryService {
  public countries = countryModel;
  public genres = genreModel;

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
}

export default CategoryService;
