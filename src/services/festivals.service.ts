import { Festival } from '../interfaces/festivals.interface';
import festivalModel from '../models/festivals.model';
import genreModel from '../models/genres.model';
import countryModel from '../models/countries.model';
import { User } from '../interfaces/users.interface';
import { isEmpty } from '../utils/util';
import HttpException from '../exceptions/HttpException';

class FestivalService {
  public festivals = festivalModel;
  public country = countryModel;
  public genre = genreModel;

  public async findAllFestival(): Promise<Festival[]> {
    const festivals: Festival[] = await this.festivals.find({}, 'name poster genre').populate('genre', 'genre');
    return festivals;
  }

  public async findFestivalByCountryId(countryId: string): Promise<Festival[]> {
    if (isEmpty(countryId)) throw new HttpException(400, 'error');

    const findFestivals: Festival[] = await this.festivals
      .find({ country: countryId }, 'name poster genre')
      .populate('genre', 'genre');
    return findFestivals;
  }

  public async findOneFestivalById(festivalId: string): Promise<Festival> {
    if (isEmpty(festivalId)) throw new HttpException(400, 'error');

    const festival: Festival = await this.festivals
      .findById(festivalId, 'name description artists startDate endDate video poster homepage genre country')
      .populate('genre')
      .populate('country');
    if (!festival) throw new HttpException(409, 'error');
    return festival;
  }

  public async createFestivalDetailData(festivalId: string, userData: User): Promise<Festival> {
    if (!festivalId) throw new HttpException(400, 'error');

    const festivalDetail: Festival = await this.findOneFestivalById(festivalId);
    if (!festivalDetail) throw new HttpException(409, 'error');

    // userData가 없다는 것은 로그인 및 인증을 거치지 않은 사용자
    if (isEmpty(userData)) {
      return {
        ...festivalDetail._doc,
        // 구현 필요
        companions: ['6007158d433bf3a0fda619ed'],
        reviews: ['6007158d433bf3a0fda619ed'],
        resells: ['6007158d433bf3a0fda619ed'],
      };
    }

    let isLiked = false;
    if (userData.wishFestivals.length) {
      for (let i = 0; i < userData.wishFestivals.length; i++) {
        if (String(festivalId) === String(userData.wishFestivals[i])) {
          isLiked = true;
          break;
        }
      }
    }

    let visited = false;
    for (let i = 0; i < userData.visits.length; i++) {
      if (String(festivalId) === String(userData.visits[i])) {
        visited = true;
        break;
      }
    }

    return {
      ...festivalDetail._doc,
      visited,
      isLiked,
      // 구현 필요
      companions: ['6007158d433bf3a0fda619ed'],
      reviews: ['6007158d433bf3a0fda619ed'],
      resells: ['6007158d433bf3a0fda619ed'],
    };
  }
}

export default FestivalService;
