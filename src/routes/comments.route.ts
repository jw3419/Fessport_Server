import { Router } from 'express';
import CommentsController from '../controllers/comments.controller';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';

class BoardsRoute implements Route {
  public path = '/comment';
  public router = Router();
  public commentsController = new CommentsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/create`, authMiddleware, this.commentsController.createComment);
  }
}

export default BoardsRoute;
