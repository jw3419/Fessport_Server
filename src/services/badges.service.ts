import userModel from '../models/users.model';
import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/users.interface';
import badgeModel from '../models/badges.model';
import { Festival } from '../interfaces/festivals.interface';
import { Genre } from '../interfaces/genres.interface';
import { Badge } from '../interfaces/badges.interface';

class BadgeService {
  public badges = badgeModel;
  public users = userModel;

  public async createNumberOfVisitsBadge(userId: string): Promise<User | string> {
    if (!userId) throw new HttpException(409, 'error');

    const user: User = await this.users.findById(userId);
    if (!user) throw new HttpException(409, 'error');
    const { visits } = user;

    let numberOfBadge = 0;
    if (visits.length === 3) numberOfBadge = 1;
    else if (visits.length === 6) numberOfBadge = 2;
    else if (visits.length === 9) numberOfBadge = 3;
    else if (visits.length === 12) numberOfBadge = 4;
    else if (visits.length === 15) numberOfBadge = 5;

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
    if (visits.length === 2) numberOfBadge = 1;
    else if (visits.length === 5) numberOfBadge = 2;
    else if (visits.length === 8) numberOfBadge = 3;
    else if (visits.length === 11) numberOfBadge = 4;
    else if (visits.length === 14) numberOfBadge = 5;

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

  //public async createNumberOfCountiresBadge(userId: string): Promise<User> {}
}

export default BadgeService;
