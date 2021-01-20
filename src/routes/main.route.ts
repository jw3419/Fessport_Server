import { Router } from 'express';
import MainController from '../controllers/main.controller';
//import { CreateUserDto } from '../dtos/users.dto';
import Route from '../interfaces/routes.interface';

class MainRoute implements Route {
  public path = '/main';
  public router = Router();
  public mainController = new MainController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.mainController.getMaps);
  }
}

export default MainRoute;
