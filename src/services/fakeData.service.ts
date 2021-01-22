import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/users.interface'; // 바꿔줘야해
import Model from '../models/users.model'; // 바꿔줘야해
import { isEmpty } from '../utils/util';

// import genreModel from '../models/genres.model';
// import countryModel from '../models/countries.model';

class Service {
  public users = Model; // 바꿔줘야해

  public async create(data: User): Promise<User> {
    // 바꿔줘야해
    if (isEmpty(data)) throw new HttpException(400, "You're not userData");

    // const findGenreData = await genreModel.findOne({genre: data.genre});
    // const findCountryData = await countryModel.findOne({name: data.country});
    // data.genre = findGenreData._id
    // data.country = findCountryData._id

    const createData: User = await this.users.create(data); // 바꿔줘야해
    return createData;
  }
}

export default Service;
