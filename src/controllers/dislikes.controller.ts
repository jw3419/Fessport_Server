import { NextFunction, Request, Response } from 'express';
import DisLikeService from '../services/dislikes.service';
import { RequestWithUser } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';

class DislikesController {
  public dislikeService = new DisLikeService();

  public dislikeFestival = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const festivalId: string = req.body.festivalId;
    const userData: User = req.user;

    try {
      await this.dislikeService.updateWishFestivals(festivalId, userData);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default DislikesController;
