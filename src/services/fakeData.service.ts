import HttpException from '../exceptions/HttpException';

import { isEmpty } from '../utils/util';

import { Artist } from '../interfaces/artists.interface';
import { BoardCategory } from '../interfaces/boardCategories.interface'; // 바꿔줘야해

import Model from '../models/boardCategories.model'; // 바꿔줘야해
import festivalModel from '../models/festivals.model';
import artistModel from '../models/artists.model';
import genreModel from '../models/genres.model';
import countryModel from '../models/countries.model';
import { Festival } from '../interfaces/festivals.interface';

class Service {
  public boardCategories = Model; // 바꿔줘야해
  public festivals = festivalModel;
  public artists = artistModel;

  public async create(data): Promise<Festival[]> {
    // 바꿔줘야해
    if (isEmpty(data)) throw new HttpException(400, "You're not userData");

    // const findGenreData = await genreModel.findOne({ name: data.genre });
    // const findCountryData = await countryModel.findOne({ name: data.country });
    // data.genre = findGenreData._id;
    // data.country = findCountryData._id;
    // await this.festivals.updateMany({}, { artists: [] });
    const findArtistData: Artist[] = await this.artists.find({}, '_id');
    const findFestivalData: Festival[] = await this.festivals.find();
    let count = 0;
    let k = 0;

    while (count < findFestivalData.length) {
      for (let i = k; i < k + 8; i++) {
        findFestivalData[count].artists.push(findArtistData[i]._id);
      }
      k += 8;
      if (findArtistData.length - k < 8) k = 0;

      await this.festivals.findByIdAndUpdate(findFestivalData[count]._id, { artists: findFestivalData[count].artists });
      count++;
    }
    // const createData: BoardCategory = await this.boardCategories.create(data); // 바꿔줘야해
    return findFestivalData;
  }
}

export default Service;
