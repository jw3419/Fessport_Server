import artistModel from '../models/artists.model';
import { Artist } from '../interfaces/artists.interface';
import genreModel from '../models/genres.model';

class ArtistService {
  public artists = artistModel;
  public genre = genreModel;

  public async findAllArtist(): Promise<Artist[]> {
    const artists: Artist[] = await this.artists.find({}, 'name image description genre').populate('genre', 'genre');
    return artists;
  }
}

export default ArtistService;
