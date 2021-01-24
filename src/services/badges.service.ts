import userModel from '../models/users.model';
import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/users.interface';
import badgeModel from '../models/badges.model';
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
  //public async createCountryBadge(userId: string): Promise<User> {}
  //public async createGenreBadge(userId: string): Promise<User> {}
}

export default BadgeService;
