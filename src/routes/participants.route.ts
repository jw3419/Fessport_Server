import { Router } from 'express';
import ParticipantsController from '../controllers/participants.controller';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';

class BoardsRoute implements Route {
  public path = '/participant';
  public router = Router();
  public participantsController = new ParticipantsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/list`, this.participantsController.getParticipants);
    this.router.post(`${this.path}/create`, authMiddleware, this.participantsController.createParticipant);
    // this.router.post(`${this.path}/delete`, authMiddleware, this.participantsController.deleteParticipant);
  }
}

export default BoardsRoute;
