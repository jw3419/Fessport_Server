import { Router } from 'express';
import Route from '../interfaces/routes.interface';
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
  }
}

export default ArtistsRoute;
