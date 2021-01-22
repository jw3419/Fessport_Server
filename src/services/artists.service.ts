import artistModel from '../models/artists.model';
import { Artist } from '../interfaces/artists.interface';
import { User } from '../interfaces/users.interface';
import { isEmpty } from '../utils/util';
import HttpException from '../exceptions/HttpException';

class ArtistService {
  public artists = artistModel;

  public async findAllArtist(): Promise<Artist[]> {
    const artists: Artist[] = await this.artists.find({}, 'name image description genre').populate('genre', 'name');
    return artists;
  }

  public async findOneArtistById(artistId: string): Promise<Artist> {
    if (isEmpty(artistId)) throw new HttpException(400, 'error');

    const artist: Artist = await this.artists
      .findById(artistId, 'name image description video genre festivals')
      .populate('genre', 'name') // festivals.service.ts에서 genre 모델 public으로 불러와서 참조가능
      .populate('festivals', 'name poster'); // festivals.service.ts에서 festivals 모델 public으로 불러와서 참조가능
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
