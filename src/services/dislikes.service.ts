import LikeService from '../services/likes.service';
import { User } from '../interfaces/users.interface';
import { isEmpty } from '../utils/util';
import HttpException from '../exceptions/HttpException';
import userModel from '../models/users.model';
import { Festival } from '../interfaces/festivals.interface';
import { Artist } from '../interfaces/artists.interface';

class DislikeService {
  public likeService = new LikeService();
  public users = userModel;

  public async updateDislikeFestivals(festivalId: string, userData: User): Promise<User> {
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

  public async updateDislikeArtists(artistId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'error');
    if (!artistId) throw new HttpException(409, 'error');

    const dislikeArtist: Artist = await this.likeService.findOneArtistById(artistId);
    if (!dislikeArtist) throw new HttpException(409, 'error');
    const updateUserDislikeArtists: User = await this.users.findByIdAndUpdate(
      userData._id,
      {
        $pull: { wishArtists: dislikeArtist._id },
      },
      { new: true },
    );
    if (!updateUserDislikeArtists) throw new HttpException(409, 'error');
    return updateUserDislikeArtists;
  }
}

export default DislikeService;
