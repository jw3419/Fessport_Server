import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import LikesController from '../controllers/likes.controller';

class LikesRoute implements Route {
  public path = '/like';
  public router = Router();
  public likesController = new LikesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/festival`, authMiddleware, this.likesController.likeFestival);
    this.router.post(`${this.path}/artist`, authMiddleware, this.likesController.likeArtist);
  }
}

export default LikesRoute;
