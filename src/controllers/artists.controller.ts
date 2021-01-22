import { NextFunction, Request, Response } from 'express';
import ArtistService from '../services/artists.service';
import { User } from '../interfaces/users.interface';
import { Artist } from '../interfaces/artists.interface';
import { RequestWithUser } from '../interfaces/auth.interface';

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

  public getArtistDetailById = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const artistId: string = req.params.id;
    const userData: User = req.user;

    try {
      const findOneArtistDetailData: Artist = await this.artistService.createArtistDetailData(artistId, userData);
      res.status(200).json(findOneArtistDetailData);
    } catch (error) {
      next(error);
    }
  };
}

export default ArtistsController;
