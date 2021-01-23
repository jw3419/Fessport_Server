import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import DislikesController from '../controllers/dislikes.controller';

class DislikesRoute implements Route {
  public path = '/dislike';
  public router = Router();
  public dislikesController = new DislikesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/festival`, authMiddleware, this.dislikesController.dislikeFestival);
  }
}

export default DislikesRoute;
