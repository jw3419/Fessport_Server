import { Router } from 'express';
import BoardsController from '../controllers/boards.controller';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';

class BoardsRoute implements Route {
  public path = '/board';
  public router = Router();
  public boardsController = new BoardsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/category/festival`, this.boardsController.getFestivalCategories);
    this.router.get(`${this.path}/list`, this.boardsController.getBoardList);
    this.router.post(`${this.path}/create`, authMiddleware, this.boardsController.createBoard);
    this.router.post(`${this.path}/edit`, authMiddleware, this.boardsController.updateBoard);
    this.router.post(`${this.path}/delete`, authMiddleware, this.boardsController.deleteBoard);
  }
}

export default BoardsRoute;
