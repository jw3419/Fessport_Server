import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import VisitsController from '../controllers/visits.controller';

class VisitsRoute implements Route {
  public path = '/visit';
  public router = Router();
  public visitsController = new VisitsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/festival`, authMiddleware, this.visitsController.visitFestival);
  }
}

export default VisitsRoute;
