import userModel from '../models/users.model';
import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/users.interface';
import badgeModel from '../models/badges.model';
import { Festival } from '../interfaces/festivals.interface';
import { Genre } from '../interfaces/genres.interface';
import { Badge } from '../interfaces/badges.interface';
import { Country } from '../interfaces/countries.interface';

const genreBadgeList = {
  Rock: 'Y2K',
  HipHop: '정상수',
  Electronica: '박명수',
  All: '비주류',
  Etc: '편견 없으신 분',
};

class BadgeService {
  public badges = badgeModel;
  public users = userModel;

  public async createNumberOfVisitsBadge(userId: string): Promise<User | string> {
    if (!userId) throw new HttpException(409, 'error');

    const user: User = await this.users.findById(userId);
    if (!user) throw new HttpException(409, 'error');
    const { visits } = user;

    let nameOfBadge = '';
    switch (visits.length) {
      case 3:
        nameOfBadge = '페스티벌 뉴비';
        break;
      case 6:
        nameOfBadge = '페스티벌 입문자';
        break;
      case 9:
        nameOfBadge = '페스티벌 고수';
        break;
      case 12:
        nameOfBadge = '페스티벌 정복자';
        break;
      case 15:
        nameOfBadge = '인생이 축제';
        break;
      default:
        break;
    }

    if (nameOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${nameOfBadge}` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { badge: badge._id },
        },
        { new: true },
      );
      if (!updateUserBadge) throw new HttpException(409, 'error');
      return updateUserBadge;
    } else return 'get any badge';
  }

  public async deleteNumberOfVisitsBadge(userId: string): Promise<User | string> {
    if (!userId) throw new HttpException(409, 'error');

    const user: User = await this.users.findById(userId);
    if (!user) throw new HttpException(409, 'error');
    const { visits } = user;

    let nameOfBadge = '';
    switch (visits.length) {
      case 2:
        nameOfBadge = '페스티벌 뉴비';
        break;
      case 5:
        nameOfBadge = '페스티벌 입문자';
        break;
      case 8:
        nameOfBadge = '페스티벌 고수';
        break;
      case 11:
        nameOfBadge = '페스티벌 정복자';
        break;
      case 14:
        nameOfBadge = '인생이 축제';
        break;
      default:
        break;
    }

    if (nameOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${nameOfBadge}` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $pull: { badge: badge._id },
        },
        { new: true },
      );
      if (!updateUserBadge) throw new HttpException(409, 'error');
      return updateUserBadge;
    } else return 'delete any badge';
  }

  public async createNumberOfGenresBadge(userId: string): Promise<User | string> {
    if (!userId) throw new HttpException(409, 'error');

    const user: User = await this.users
      .findById(userId)
      .populate({ path: 'visits', select: 'genre', populate: { path: 'genre', select: 'name' } })
      .populate('badge', 'name');
    if (!user) throw new HttpException(409, 'error');
    const { visits, badge } = user;

    const genreObject = {};
    while (visits.length) {
      const genre = (<Genre>(<Festival>visits.pop()).genre).name.toString();
      if (!genreObject[genre]) genreObject[genre] = 1;
      else genreObject[genre] += 1;
    }

    let nameOfBadge = '';
    for (const key in genreObject) {
      let flag = true;
      for (let i = 0; i < badge.length; i++) {
        // 내가 가진 뱃지들 중에서 없는 뱃지만 만들어야함
        if ((<Badge>badge[i]).name === genreBadgeList[key]) flag = false;
      }
      if (flag && genreObject[key] === 3) nameOfBadge = genreBadgeList[key];
    }

    if (nameOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${nameOfBadge}` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { badge: badge._id },
        },
        { new: true },
      );
      if (!updateUserBadge) throw new HttpException(409, 'error');
      return updateUserBadge;
    } else return 'get any badge';
  }

  public async deleteNumberOfGenresBadge(userId: string): Promise<User | string> {
    if (!userId) throw new HttpException(409, 'error');

    const user: User = await this.users
      .findById(userId)
      .populate({ path: 'visits', select: 'genre', populate: { path: 'genre', select: 'name' } })
      .populate('badge', 'name');
    if (!user) throw new HttpException(409, 'error');
    const { visits, badge } = user;

    const genreObject = {};
    while (visits.length) {
      const genre = (<Genre>(<Festival>visits.pop()).genre).name.toString();
      if (!genreObject[genre]) genreObject[genre] = 1;
      else genreObject[genre] += 1;
    }

    let nameOfBadge = '';
    for (const key in genreObject) {
      let flag = false;
      for (let i = 0; i < badge.length; i++) {
        // 내가 가진 뱃지들 중에서 있는 뱃지만 없애야함
        if ((<Badge>badge[i]).name === genreBadgeList[key]) flag = true;
      }
      if (flag && genreObject[key] === 2) nameOfBadge = genreBadgeList[key];
    }

    if (nameOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${nameOfBadge}` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $pull: { badge: badge._id },
        },
        { new: true },
      );
      if (!updateUserBadge) throw new HttpException(409, 'error');
      return updateUserBadge;
    } else return 'delete any badge';
  }

  public async createNumberOfCountiresBadge(userId: string): Promise<User | string> {
    if (!userId) throw new HttpException(409, 'error');

    const user: User = await this.users
      .findById(userId)
      .populate({ path: 'visits', select: 'country', populate: { path: 'country', select: 'name' } });
    if (!user) throw new HttpException(409, 'error');
    const { visits } = user;

    const countryObject = {};
    while (visits.length) {
      const country = (<Country>(<Festival>visits.pop()).country).name.toString();
      if (!countryObject[country]) countryObject[country] = 1;
    }

    let nameOfBadge = '';
    switch (Object.keys(countryObject).length) {
      case 3:
        nameOfBadge = '흥선대원국';
        break;
      case 6:
        nameOfBadge = '아시아인';
        break;
      case 9:
        nameOfBadge = '욜로족';
        break;
      case 12:
        nameOfBadge = '여행가';
        break;
      case 15:
        nameOfBadge = '세계 정복';
        break;
      default:
        break;
    }

    if (nameOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${nameOfBadge}` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { badge: badge._id },
        },
        { new: true },
      );
      if (!updateUserBadge) throw new HttpException(409, 'error');
      return updateUserBadge;
    } else return 'get any badge';
  }

  public async deleteNumberOfCountiresBadge(userId: string): Promise<User | string> {
    if (!userId) throw new HttpException(409, 'error');

    const user: User = await this.users
      .findById(userId)
      .populate({ path: 'visits', select: 'country', populate: { path: 'country', select: 'name' } });
    if (!user) throw new HttpException(409, 'error');
    const { visits } = user;

    const countryObject = {};
    while (visits.length) {
      const country = (<Country>(<Festival>visits.pop()).country).name.toString();
      if (!countryObject[country]) countryObject[country] = 1;
    }

    let nameOfBadge = '';
    switch (Object.keys(countryObject).length) {
      case 2:
        nameOfBadge = '흥선대원국';
        break;
      case 5:
        nameOfBadge = '아시아인';
        break;
      case 8:
        nameOfBadge = '욜로족';
        break;
      case 11:
        nameOfBadge = '여행가';
        break;
      case 14:
        nameOfBadge = '세계 정복';
        break;
      default:
        break;
    }

    if (nameOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${nameOfBadge}` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $pull: { badge: badge._id },
        },
        { new: true },
      );
      if (!updateUserBadge) throw new HttpException(409, 'error');
      return updateUserBadge;
    } else return 'delete any badge';
  }
}

export default BadgeService;
