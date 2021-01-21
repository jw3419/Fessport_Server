import { NextFunction, Request, Response } from 'express';
import festivalService from '../services/festivals.service';
import { User } from '../interfaces/users.interface';
import { RequestWithUser } from '../interfaces/auth.interface';

class FestivalsController {
  public festivalService = new festivalService();

  public getFestivals = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllFestivalsData = await this.festivalService.findAllFestival();
      console.log(findAllFestivalsData);
      res.status(200).json(findAllFestivalsData);
    } catch (error) {
      next(error);
    }
  };

  public getFestivalByCountryId = async (req: Request, res: Response, next: NextFunction) => {
    const countryId = req.params.id;

    try {
      const findFestivalsData = await this.festivalService.findFestivalByCountryId(countryId);
      res.status(200).json(findFestivalsData);
    } catch (error) {
      next(error);
    }
  };

  public getFestivalDetailById = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const festivalId: string = req.params.id;
    const userData: User = req.user;

    try {
      const findOneFestivalDetailData = await this.festivalService.createFestivalDetailData(festivalId, userData);
      res.status(200).json(findOneFestivalDetailData);
    } catch (error) {
      next(error);
    }
  };
}

export default FestivalsController;
