//import { Festival } from '../interfaces/festivals.interface';
import festivalModel from '../models/festivals.model';
import genreModel from '../models/genres.model';

class FestivalService {
  public festivals = festivalModel;
  public genre = genreModel;

  //: Promise<Festival[]>
  public async findAllFestival() {
    const festivals = await this.festivals.find({}, 'name poster genre').populate('genre', 'genre');
    return festivals;
  }

  //: Promise<Festival[]>
  public async findFestivalByCountryId(countryId) {
    console.log(countryId);
    console.log(typeof countryId);
    const findFestivals = await this.festivals
      .find({ country: countryId }, 'name poster genre')
      .populate('genre', 'genre');
    return findFestivals;
  }
}

export default FestivalService;
