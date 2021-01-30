import HttpException from '../exceptions/HttpException';
import { BoardCategory } from '../interfaces/boardCategories.interface'; // 바꿔줘야해
import Model from '../models/boardCategories.model'; // 바꿔줘야해
import { isEmpty } from '../utils/util';

// import genreModel from '../models/genres.model';
// import countryModel from '../models/countries.model';

class Service {
  public boardCategories = Model; // 바꿔줘야해

  public async create(data): Promise<BoardCategory> {
    // 바꿔줘야해
    if (isEmpty(data)) throw new HttpException(400, "You're not userData");

    // const findGenreData = await genreModel.findOne({ name: data.genre });
    // const findCountryData = await countryModel.findOne({ name: data.country });
    // data.genre = findGenreData._id;
    // data.country = findCountryData._id;

    const createData: BoardCategory = await this.boardCategories.create(data); // 바꿔줘야해
    return createData;
  }
}

export default Service;
