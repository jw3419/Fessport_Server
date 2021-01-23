import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import CategoryController from '../controllers/category.controller';

class CategoryRoute implements Route {
  public path = '/category';
  public router = Router();
  public categoryController = new CategoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/country`, this.categoryController.getCountryNames);
    this.router.get(`${this.path}/genre`, this.categoryController.getGenreNames);
  }
}

export default CategoryRoute;
