import userModel from '../models/users.model';
import festivalModel from '../models/festivals.model';
import { isEmpty } from '../utils/util';
import HttpException from '../exceptions/HttpException';
import { Festival } from '../interfaces/festivals.interface';
import { User } from '../interfaces/users.interface';
import BadgeService from './badges.service';

class VisitService {
  public badgeService = new BadgeService();
  public festivals = festivalModel;
  public users = userModel;

  public async findOneFestivalById(festivalId: string): Promise<Festival> {
    const festival: Festival = await this.festivals.findById(festivalId);
    if (!festival) throw new HttpException(409, 'error');
    return festival;
  }

  public async updateVisitFestival(festivalId: string, userData: User): Promise<User | string> {
    if (isEmpty(userData)) throw new HttpException(400, 'error');
    if (!festivalId) throw new HttpException(409, 'error');

    const visitFestival: Festival = await this.findOneFestivalById(festivalId);
    if (!visitFestival) throw new HttpException(409, 'error');
    const { visits } = userData;
    for (const visit of visits) {
      if (String(visit) === String(visitFestival._id)) return 'already exist';
    }
    await this.users.findByIdAndUpdate(
      userData._id,
      {
        $push: { visits: visitFestival._id },
      },
      { new: true },
    );
    await this.badgeService.createNumberOfVisitsBadge(userData._id);
    await this.badgeService.createNumberOfGenresBadge(userData._id);
    await this.badgeService.createNumberOfCountiresBadge(userData._id);
    const updateUserVisitFestival: User = await this.users
      .findById(userData._id, 'badges visits')
      .populate('badges', 'name')
      .populate({ path: 'visits', select: 'genre country', populate: { path: 'genre country', select: 'name' } });
    return updateUserVisitFestival;
  }

  public async updateVisitCancel(festivalId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'error');
    if (!festivalId) throw new HttpException(409, 'error');

    const visitCancelFestival: Festival = await this.findOneFestivalById(festivalId);
    if (!visitCancelFestival) throw new HttpException(409, 'error');
    await this.users.findByIdAndUpdate(
      userData._id,
      {
        $pull: { visits: visitCancelFestival._id },
      },
      { new: true },
    );
    await this.badgeService.deleteNumberOfVisitsBadge(userData._id);
    await this.badgeService.deleteNumberOfGenresBadge(userData._id);
    await this.badgeService.deleteNumberOfCountiresBadge(userData._id);
    const updateUserVisitCancel: User = await this.users
      .findById(userData._id, 'badges visits')
      .populate('badges', 'name')
      .populate({ path: 'visits', select: 'genre country', populate: { path: 'genre country', select: 'name' } });
    return updateUserVisitCancel;
  }
}

export default VisitService;
