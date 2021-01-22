import { NextFunction, Request, Response } from 'express';
import MainService from '../services/main.service';
import { Country } from '../interfaces/countries.interface';

class MainController {
  public mainService = new MainService();

  public getMaps = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getMainMaps: Country[] = await this.mainService.mainMap();
      res.status(200).json(getMainMaps);
    } catch (error) {
      next(error);
    }
  };
}

export default MainController;
