import LikeService from '../services/likes.service';
import { User } from '../interfaces/users.interface';
import { isEmpty } from '../utils/util';
import HttpException from '../exceptions/HttpException';
import userModel from '../models/users.model';
import { Festival } from '../interfaces/festivals.interface';

class DislikeService {
  public likeService = new LikeService();
  public users = userModel;

  public async updateWishFestivals(festivalId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'error');
    if (!festivalId) throw new HttpException(409, 'error');

    const dislikeFestival: Festival = await this.likeService.findOneFestivalById(festivalId);
    if (!dislikeFestival) throw new HttpException(409, 'error');
    const updateUserDislikeFestivals: User = await this.users.findByIdAndUpdate(
      userData._id,
      {
        $pull: { wishFestivals: dislikeFestival._id },
      },
      { new: true },
    );
    if (!updateUserDislikeFestivals) throw new HttpException(409, 'error');
    return updateUserDislikeFestivals;
  }
}

export default DislikeService;
