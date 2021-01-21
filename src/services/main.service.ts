import festivalModel from '../models/festivals.model';
import countryModel from '../models/countries.model';
import { Country } from '../interfaces/countries.interface';
import { Festival } from '../interfaces/festivals.interface';

class MainService {
  public festivals = festivalModel;
  public countries = countryModel;

  public async mainMap(): Promise<Country[]> {
    const allFestival: Festival[] = await this.findAllFestival();
    const allCountry: Country[] = await this.findAllCountry();

    return allCountry.map(countryObj => {
      const festivals = [];
      for (let i = 0; i < allFestival.length; i++) {
        if (String(allFestival[i].country) === String(countryObj._id)) {
          festivals.push({
            _id: allFestival[i]._id,
            name: allFestival[i].name,
            thumbnail: allFestival[i].thumbnail,
          });
        }
      }
      return {
        _id: countryObj._id,
        name: countryObj.name,
        y: countryObj.y,
        x: countryObj.x,
        flagImage: countryObj.flagImage,
        festivals,
      };
    });
  }

  public async findAllFestival(): Promise<Festival[]> {
    const festivals: Festival[] = await this.festivals.find();
    return festivals;
  }

  public async findAllCountry(): Promise<Country[]> {
    const countries: Country[] = await this.countries.find();
    return countries;
  }
}

export default MainService;
