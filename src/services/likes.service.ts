import userModel from '../models/users.model';
import { User } from '../interfaces/users.interface';
import { isEmpty } from '../utils/util';
import HttpException from '../exceptions/HttpException';
import { Festival } from '../interfaces/festivals.interface';
import festivalModel from '../models/festivals.model';

class LikeService {
  public users = userModel;
  public festivals = festivalModel;

  public async findOneFestivalById(festivalId: string): Promise<Festival> {
    const festival: Festival = await this.festivals.findById(festivalId);
    if (!festival) throw new HttpException(409, 'error');
    return festival;
  }

  public async updateWishFestivals(festivalId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'error');
    if (!festivalId) throw new HttpException(409, 'error');

    const likeFestival: Festival = await this.findOneFestivalById(festivalId);
    if (!likeFestival) throw new HttpException(409, 'error');
    const updateUserWishFestivals: User = await this.users.findByIdAndUpdate(
      userData._id,
      {
        $push: { wishFestivals: likeFestival._id },
      },
      { new: true },
    );
    if (!updateUserWishFestivals) throw new HttpException(409, 'error');
    return updateUserWishFestivals;
  }
}

export default LikeService;
/*

import userModel from '../models/users.model';
import { User } from '../interfaces/users.interface';
import { isEmpty } from '../utils/util';
import HttpException from '../exceptions/HttpException';
import { Artist } from '../interfaces/artists.interface';
import artistModel from '../models/artists.model';

class DislikeService {
  public users = userModel;
  public artists = artistModel;

  public async findOneArtistById(artistId: string): Promise<Artist> {
    const artist: Artist = await this.artists.findById(artistId);
    if (!artist) throw new HttpException(409, 'error');
    return artist;
  }

  public async updateWishArtists(artistId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'error');
    if (!artistId) throw new HttpException(409, 'error');

    const likeArtist: Artist = await this.findOneArtistById(artistId);
    if (!likeArtist) throw new HttpException(409, 'error');
    const updateUserWishArtists: User = await this.users.findByIdAndUpdate(
      userData._id,
      {
        $push: { wishArtists: likeArtist._id },
      },
      { new: true },
    );
    if (!updateUserWishArtists) throw new HttpException(409, 'error');
    return updateUserWishArtists;
  }
}

export default DislikeService;
*/
