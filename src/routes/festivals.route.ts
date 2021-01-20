import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import FestivalsController from '../controllers/festivals.controller';

class FestivalsRoute implements Route {
  public path = '/festivals';
  public router = Router();
  public festivalsController = new FestivalsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/list`, this.festivalsController.getFestivals);
    this.router.get(`${this.path}/list/:id`, this.festivalsController.getFestivalByCountryId);
    this.router.get(`${this.path}/detail/:id`, authMiddleware, this.festivalsController.getFestivalDetailById);
  }
}

export default FestivalsRoute;
