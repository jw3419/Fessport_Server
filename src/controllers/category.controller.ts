import { NextFunction, Request, Response } from 'express';
import CategoryService from '../services/category.service';
import { Country } from '../interfaces/countries.interface';

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
}

export default CategoryController;
