import { Router } from 'express';
import Route from '../interfaces/routes.interface';
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
  }
}

export default FestivalsRoute;
