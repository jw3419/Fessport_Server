import { NextFunction, Request, Response } from 'express';
import ArtistService from '../services/artists.service';
import { Artist } from '../interfaces/artists.interface';

class ArtistsController {
  public artistService = new ArtistService();

  public getArtists = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllArtistsData: Artist[] = await this.artistService.findAllArtist();
      res.status(200).json(findAllArtistsData);
    } catch (error) {
      next(error);
    }
  };
}

export default ArtistsController;
