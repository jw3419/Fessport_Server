import { Router } from 'express';
import MainController from '../controllers/main.controller';
import Route from '../interfaces/routes.interface';
//import InsertDataController from '../controllers/heeseok.controller';

class MainRoute implements Route {
  public path = '/main';
  public router = Router();
  public mainController = new MainController();
  //public InsertDataController = new InsertDataController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.mainController.getMaps);
    //this.router.get(`${this.path}/heeseok`, this.InsertDataController.insertArtists);
  }
}

export default MainRoute;
