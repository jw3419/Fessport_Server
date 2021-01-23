import { NextFunction, Request, Response } from 'express';
import likeService from '../services/likes.service';
import { RequestWithUser } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';

class LikesController {
  public likeService = new likeService();

  public likeFestival = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const festivalId: string = req.body.festivalId;
    const userData: User = req.user;
    console.log('festivalid: ', festivalId);
    console.log('userData:', userData);

    try {
      await this.likeService.updateWishFestivals(festivalId, userData);
      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  };
}

export default LikesController;
