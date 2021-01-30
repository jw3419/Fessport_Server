import { NextFunction, Request, Response } from 'express';
import InsertDataService from '../services/heeseok.service';

class InsertDataController {
  public InsertDataService = new InsertDataService();

  // public insertUsers = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     // const data = await this.InsertDataService.insertUsers();
  //     // res.status(200).json(data);
  //     await this.InsertDataService.insertUsers();
  //     res.sendStatus(200);
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public insertBoards = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const data = await this.InsertDataService.insertBoards();
  //     res.status(200).json(data);
  //     //await this.InsertDataService.insertBoards();
  //     //res.sendStatus(200);
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public insertFestivals = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.InsertDataService.insertFestivals();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public insertBadges = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.InsertDataService.insertBadges();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public insertArtists = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.InsertDataService.insertArtists();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public insertCountries = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.InsertDataService.insertCountries();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public insertGenres = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.InsertDataService.insertGenres();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}

export default InsertDataController;
