import { NextFunction, Response } from 'express';
import LikeService from '../services/likes.service';
import { RequestWithUser } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';

class LikesController {
  public likeService = new LikeService();

  public likeFestival = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const festivalId: string = req.body.festivalId;
    const userData: User = req.user;

    try {
      await this.likeService.updateLikeFestivals(festivalId, userData);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public likeArtist = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const artistId: string = req.body.artistId;
    const userData: User = req.user;

    try {
      await this.likeService.updateLikeArtists(artistId, userData);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default LikesController;
