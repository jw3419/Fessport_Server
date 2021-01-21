//import { Festival } from '../interfaces/festivals.interface';
import festivalModel from '../models/festivals.model';
import genreModel from '../models/genres.model';
import countryModel from '../models/countries.model';
import userModel from '../models/users.model';
import wishlistModel from '../models/wishlists.model';

class FestivalService {
  public festivals = festivalModel;
  public country = countryModel;
  public genre = genreModel;
  public users = userModel;
  public wishlists = wishlistModel;

  //: Promise<Festival[]>
  public async findAllFestival() {
    const festivals = await this.festivals.find({}, 'name poster genre').populate('genre', 'genre');
    return festivals;
  }

  //: Promise<Festival[]>
  public async findFestivalByCountryId(countryId) {
    const findFestivals = await this.festivals
      .find({ country: countryId }, 'name poster genre')
      .populate('genre', 'genre');
    return findFestivals;
  }

  //: Promise<Festival[]>
  public async findOneFestivalById(festivalId) {
    const festival = await this.festivals
      .findById(festivalId, 'name description artists startDate endDate video poster homepage genre country')
      .populate('genre')
      .populate('country');
    return festival;
  }

  public async createFestivalDetailData(festivalId, userData) {
    const festivalDetail = await this.findOneFestivalById(festivalId);
    // userData가 없다는 것은 로그인 및 인증을 거치지 않은 사용자
    if (!userData) {
      return {
        ...festivalDetail._doc,
        // 구현 필요
        companions: ['6007158d433bf3a0fda619ed'],
        reviews: ['6007158d433bf3a0fda619ed'],
        resells: ['6007158d433bf3a0fda619ed'],
      };
    }

    let isLiked = false;
    if (userData.wishlists) {
      // 꼭 이렇게 구현해야하는가?!
      const wishlist = await this.wishlists.findOne({ _id: userData.wishlists }, 'festivals');

      // 위시리스트 컬렉션을 다 뒤져보니 user의 위시리스트가 있고, 그 내부 festivals 필드(배열)에 무언가 값이 존재한다
      if (wishlist.festivals.length) {
        for (let i = 0; i < wishlist.festivals.length; i++) {
          if (String(festivalId) === String(wishlist.festivals[i])) {
            isLiked = true;
            break;
          }
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
