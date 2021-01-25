import userModel from '../models/users.model';
import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/users.interface';
import badgeModel from '../models/badges.model';
import { Festival } from '../interfaces/festivals.interface';
import { Genre } from '../interfaces/genres.interface';
import { Badge } from '../interfaces/badges.interface';
import { Country } from '../interfaces/countries.interface';

class BadgeService {
  public badges = badgeModel;
  public users = userModel;

  public async createNumberOfVisitsBadge(userId: string): Promise<User | string> {
    if (!userId) throw new HttpException(409, 'error');

    const user: User = await this.users.findById(userId);
    if (!user) throw new HttpException(409, 'error');
    const { visits } = user;

    let numberOfBadge = 0;
    switch (visits.length) {
      case 3:
        numberOfBadge = 1;
        break;
      case 6:
        numberOfBadge = 2;
        break;
      case 9:
        numberOfBadge = 3;
        break;
      case 12:
        numberOfBadge = 4;
        break;
      case 15:
        numberOfBadge = 5;
        break;
      default:
        break;
    }

    if (numberOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${numberOfBadge}번 뱃지` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { badges: badge._id },
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

    let numberOfBadge = 0;
    switch (visits.length) {
      case 2:
        numberOfBadge = 1;
        break;
      case 5:
        numberOfBadge = 2;
        break;
      case 8:
        numberOfBadge = 3;
        break;
      case 11:
        numberOfBadge = 4;
        break;
      case 14:
        numberOfBadge = 5;
        break;
      default:
        break;
    }

    if (numberOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${numberOfBadge}번 뱃지` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $pull: { badges: badge._id },
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
      .populate('badges', 'name');
    if (!user) throw new HttpException(409, 'error');
    const { visits, badges } = user;

    const genreObject = {};
    while (visits.length) {
      const genre = (<Genre>(<Festival>visits.pop()).genre).name.toString();
      if (!genreObject[genre]) genreObject[genre] = 1;
      else genreObject[genre] += 1;
    }

    let nameOfBadge = '';
    for (const key in genreObject) {
      let flag = true;
      for (let i = 0; i < badges.length; i++) {
        // 내가 가진 뱃지들 중에서 없는 뱃지만 만들어야함
        if ((<Badge>badges[i]).name === `${key} Badge`) flag = false;
      }
      if (flag && genreObject[key] === 3) nameOfBadge = key;
    }

    if (nameOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${nameOfBadge} Badge` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { badges: badge._id },
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
      .populate('badges', 'name');
    if (!user) throw new HttpException(409, 'error');
    const { visits, badges } = user;

    const genreObject = {};
    while (visits.length) {
      const genre = (<Genre>(<Festival>visits.pop()).genre).name.toString();
      if (!genreObject[genre]) genreObject[genre] = 1;
      else genreObject[genre] += 1;
    }

    let nameOfBadge = '';
    for (const key in genreObject) {
      let flag = false;
      for (let i = 0; i < badges.length; i++) {
        // 내가 가진 뱃지들 중에서 있는 뱃지만 없애야함
        if ((<Badge>badges[i]).name === `${key} Badge`) flag = true;
      }
      if (flag && genreObject[key] === 2) nameOfBadge = key;
    }

    if (nameOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${nameOfBadge} Badge` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $pull: { badges: badge._id },
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

    let numberOfBadge = 0;
    switch (Object.keys(countryObject).length) {
      case 3:
        numberOfBadge = 11;
        break;
      case 6:
        numberOfBadge = 12;
        break;
      case 9:
        numberOfBadge = 13;
        break;
      case 12:
        numberOfBadge = 14;
        break;
      case 15:
        numberOfBadge = 15;
        break;
      default:
        break;
    }

    if (numberOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${numberOfBadge}번 뱃지` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { badges: badge._id },
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

    let numberOfBadge = 0;
    switch (Object.keys(countryObject).length) {
      case 2:
        numberOfBadge = 11;
        break;
      case 5:
        numberOfBadge = 12;
        break;
      case 8:
        numberOfBadge = 13;
        break;
      case 11:
        numberOfBadge = 14;
        break;
      case 14:
        numberOfBadge = 15;
        break;
      default:
        break;
    }

    if (numberOfBadge) {
      const badge: Badge = await this.badges.findOne({ name: `${numberOfBadge}번 뱃지` });
      if (!badge) throw new HttpException(409, 'error');
      const updateUserBadge: User = await this.users.findByIdAndUpdate(
        { _id: userId },
        {
          $pull: { badges: badge._id },
        },
        { new: true },
      );
      if (!updateUserBadge) throw new HttpException(409, 'error');
      return updateUserBadge;
    } else return 'delete any badge';
  }
}

export default BadgeService;
