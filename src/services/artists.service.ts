import artistModel from '../models/artists.model';
import { Artist } from '../interfaces/artists.interface';
import { User } from '../interfaces/users.interface';
import genreModel from '../models/genres.model';
import { isEmpty } from '../utils/util';
import HttpException from '../exceptions/HttpException';
import festivalModel from '../models/festivals.model';

class ArtistService {
  public festivals = festivalModel;
  public artists = artistModel;
  public genre = genreModel;

  public async findAllArtist(): Promise<Artist[]> {
    const artists: Artist[] = await this.artists.find({}, 'name image description genre').populate('genre', 'genre');
    return artists;
  }

  public async findOneArtistById(artistId: string): Promise<Artist> {
    if (isEmpty(artistId)) throw new HttpException(400, 'error');

    const artist: Artist = await this.artists
      .findById(artistId, 'name image description genre video festivals')
      .populate('genre', 'genre')
      .populate('festivals', 'name poster');
    if (!artist) throw new HttpException(409, 'error');
    return artist;
  }

  public async createArtistDetailData(artistId: string, userData: User): Promise<Artist> {
    if (!artistId) throw new HttpException(400, 'error');

    const artistDetail: Artist = await this.findOneArtistById(artistId);
    if (!artistDetail) throw new HttpException(409, 'error');

    // userData가 없다는 것은 로그인 및 인증을 거치지 않은 사용자
    if (isEmpty(userData)) return artistDetail;

    let isLiked = false;
    if (userData.wishArtists.length) {
      for (let i = 0; i < userData.wishArtists.length; i++) {
        if (String(artistId) === String(userData.wishArtists[i])) {
          isLiked = true;
          break;
        }
      }
    }
    return {
      ...artistDetail._doc,
      isLiked,
    };
  }
}

export default ArtistService;
