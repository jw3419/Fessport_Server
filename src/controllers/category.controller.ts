import { NextFunction, Request, Response } from 'express';
import CategoryService from '../services/category.service';
import { Country } from '../interfaces/countries.interface';
import { Genre } from '../interfaces/genres.interface';
import { Artist } from '../interfaces/artists.interface';

import { Festival } from '../interfaces/festivals.interface';
class CategoryController {
  public categoryService = new CategoryService();

  public getFestivalCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const festivalCategoryData: Festival[] = await this.categoryService.findAllFestivalCategory();
      res.status(200).json(festivalCategoryData);
    } catch (error) {
      next(error);
    }
  };

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

  public getArtistCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const artistCategoryData: Artist[] = await this.categoryService.findAllArtistName();
      res.status(200).json(artistCategoryData);
    } catch (error) {
      next(error);
    }
  };
}

export default CategoryController;
