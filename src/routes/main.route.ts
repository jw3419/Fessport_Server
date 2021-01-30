import { Router } from 'express';
import MainController from '../controllers/main.controller';
import Route from '../interfaces/routes.interface';
import InsertDataController from '../controllers/heeseok.controller';

class MainRoute implements Route {
  public path = '/main';
  public router = Router();
  public mainController = new MainController();
  public InsertDataController = new InsertDataController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.mainController.getMaps);
    //this.router.get(`${this.path}/heeseok/user`, this.InsertDataController.insertUsers);
    this.router.get(`${this.path}/heeseok/genre`, this.InsertDataController.insertGenres);
    //this.router.get(`${this.path}/heeseok/board`, this.InsertDataController.insertBoards);
    this.router.get(`${this.path}/heeseok/badge`, this.InsertDataController.insertBadges);
    this.router.get(`${this.path}/heeseok/artist`, this.InsertDataController.insertArtists);
    this.router.get(`${this.path}/heeseok/country`, this.InsertDataController.insertCountries);
    this.router.get(`${this.path}/heeseok/festival`, this.InsertDataController.insertFestivals);
  }
}

export default MainRoute;
