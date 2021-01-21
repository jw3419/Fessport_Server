import countryModel from '../models/countries.model';
import { Country } from '../interfaces/countries.interface';
import HttpException from '../exceptions/HttpException';

class CategoryService {
  public countries = countryModel;

  public async findAllCountryName(): Promise<Country[]> {
    const allCountry: Country[] = await this.countries.find({}, 'name');
    if (!allCountry) throw new HttpException(409, 'error');
    return allCountry;
  }
}

export default CategoryService;
