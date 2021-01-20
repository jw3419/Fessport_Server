import { NextFunction, Request, Response } from 'express';
import MainService from '../services/main.service';

class MainController {
  public mainService = new MainService();

  public getMaps = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getMainMaps = await this.mainService.mainMap();
      res.status(200).json({ data: getMainMaps, message: 'main map' });
    } catch (error) {
      next(error);
    }
  };
}

export default MainController;
