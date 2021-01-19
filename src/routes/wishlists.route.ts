import { Router } from 'express';
import WishlistsController from '../controllers/wishlists.controller';
import Route from '../interfaces/routes.interface';
//import authMiddleware from '../middlewares/auth.middleware';

class WishlistsRoute implements Route {
  public path = '/wishlist';
  public router = Router();
  public WishlistsController = new WishlistsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.WishlistsController.getWishlistById);
  }
}

export default WishlistsRoute;
