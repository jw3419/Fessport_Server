import festivalModel from '../models/festivals.model';
import countryModel from '../models/countries.model';

class MainService {
  public festivals = festivalModel;
  public countries = countryModel;

  public async mainMap() {
    const allFestival = await this.findAllFestival();
    const allCountry = await this.findAllCountry();

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

  // 이 함수를 다른 곳에서 쓸 일이 없다면 private으로,
  public async findAllFestival() {
    const festivals = await this.festivals.find();
    return festivals;
  }

  // 다른 곳에서 쓸 일이 있을 것 같다.
  public async findAllCountry() {
    const countries = await this.countries.find();
    return countries;
  }
}

export default MainService;

/*
const countries = await this.findAllCountry();
    const result = () => {
      return countries.map(async value => {
        const festivals = await this.festivals.find({ country: value._id }).limit(2);
        return {
          _id: value._id,
          name: value.name,
          y: value.y,
          x: value.x,
          flagImage: value.flagImage,
          festivals,
        };
      });
    };
    console.log(result());
  }
  */
