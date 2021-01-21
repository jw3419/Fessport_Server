import { NextFunction, Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import wishlistService from '../services/wishlists.service';

class WishlistsController {
  public wishlistService = new wishlistService();

  public getWishlistById = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id;

    try {
      const findWishlist: User = await this.wishlistService.findAllWishlist(userId);
      res.status(200).json(findWishlist);
    } catch (error) {
      next(error);
    }
  };
}

export default WishlistsController;
