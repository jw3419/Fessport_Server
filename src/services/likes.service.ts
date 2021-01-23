import userModel from '../models/users.model';
import { User } from '../interfaces/users.interface';
import { isEmpty } from '../utils/util';
import HttpException from '../exceptions/HttpException';
import { Festival } from '../interfaces/festivals.interface';
import festivalModel from '../models/festivals.model';
import artistModel from '../models/artists.model';
import { Artist } from '../interfaces/artists.interface';

class LikeService {
  public festivals = festivalModel;
  public artists = artistModel;
  public users = userModel;

  public async findOneFestivalById(festivalId: string): Promise<Festival> {
    const festival: Festival = await this.festivals.findById(festivalId);
    if (!festival) throw new HttpException(409, 'error');
    return festival;
  }

  public async findOneArtistById(artistId: string): Promise<Artist> {
    const artist: Artist = await this.artists.findById(artistId);
    if (!artist) throw new HttpException(409, 'error');
    return artist;
  }

  public async updateLikeFestivals(festivalId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'error');
    if (!festivalId) throw new HttpException(409, 'error');

    const likeFestival: Festival = await this.findOneFestivalById(festivalId);
    if (!likeFestival) throw new HttpException(409, 'error');
    const updateUserLikeFestivals: User = await this.users.findByIdAndUpdate(
      userData._id,
      {
        $push: { wishFestivals: likeFestival._id },
      },
      { new: true },
    );
    if (!updateUserLikeFestivals) throw new HttpException(409, 'error');
    return updateUserLikeFestivals;
  }

  public async updateLikeArtists(artistId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'error');
    if (!artistId) throw new HttpException(409, 'error');

    const likeArtist: Artist = await this.findOneArtistById(artistId);
    if (!likeArtist) throw new HttpException(409, 'error');
    const updateUserLikeArtists: User = await this.users.findByIdAndUpdate(
      userData._id,
      {
        $push: { wishArtists: likeArtist._id },
      },
      { new: true },
    );
    if (!updateUserLikeArtists) throw new HttpException(409, 'error');
    return updateUserLikeArtists;
  }
}

export default LikeService;
