import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import ArtistsController from '../controllers/artists.controller';

class ArtistsRoute implements Route {
  public path = '/artist';
  public router = Router();
  public artistsController = new ArtistsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/list`, this.artistsController.getArtists);
    this.router.get(`${this.path}/detail/:id`, authMiddleware, this.artistsController.getArtistDetailById);
  }
}

export default ArtistsRoute;
