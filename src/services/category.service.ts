import countryModel from '../models/countries.model';
import { Country } from '../interfaces/countries.interface';

class CategoryService {
  public countries = countryModel;

  public async findAllCountryName(): Promise<Country[]> {
    const allCountry: Country[] = await this.countries.find({}, 'name');
    return allCountry;
  }
}

export default CategoryService;
