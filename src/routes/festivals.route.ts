import { Router, NextFunction, Request, Response } from 'express';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import FestivalsController from '../controllers/festivals.controller';

class FestivalsRoute implements Route {
  public path = '/festival';
  public router = Router();
  public festivalsController = new FestivalsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/list`, (req: Request, res: Response, next: NextFunction) => {
      if (req.query.genre_id) this.festivalsController.getFestivalByGenreId(req, res, next);
      else if (req.query.country_id) this.festivalsController.getFestivalByCountryId(req, res, next);
      else this.festivalsController.getFestivals(req, res, next);
    });
    this.router.get(`${this.path}/detail/:id`, authMiddleware, this.festivalsController.getFestivalDetailById);
  }
}

export default FestivalsRoute;
