import { Router } from 'express';
import fakeDataController from '../controllers/fakeData.controller';
import Route from '../interfaces/routes.interface';

class FakeDataRoute implements Route {
  public path = '/fake';
  public router = Router();
  public fakeDataController = new fakeDataController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.fakeDataController.create);
  }
}

export default FakeDataRoute;
