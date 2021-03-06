import { NextFunction, Request, Response } from 'express';
import CategoryService from '../services/category.service';
import { Country } from '../interfaces/countries.interface';
import { Genre } from '../interfaces/genres.interface';

class CategoryController {
  public categoryService = new CategoryService();

  public getCountryNames = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCountryNameData: Country[] = await this.categoryService.findAllCountryName();
      res.status(200).json(findAllCountryNameData);
    } catch (error) {
      next(error);
    }
  };

  public getGenreNames = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllGenreNameData: Genre[] = await this.categoryService.findAllGenreName();
      res.status(200).json(findAllGenreNameData);
    } catch (error) {
      next(error);
    }
  };
}

export default CategoryController;
