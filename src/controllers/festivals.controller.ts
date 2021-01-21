import { NextFunction, Request, Response } from 'express';
import festivalService from '../services/festivals.service';
import { User } from '../interfaces/users.interface';
import { RequestWithUser } from '../interfaces/auth.interface';
import { Festival } from '../interfaces/festivals.interface';

class FestivalsController {
  public festivalService = new festivalService();

  public getFestivals = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllFestivalsData: Festival[] = await this.festivalService.findAllFestival();
      res.status(200).json(findAllFestivalsData);
    } catch (error) {
      next(error);
    }
  };

  public getFestivalByCountryId = async (req: Request, res: Response, next: NextFunction) => {
    const countryId: string = req.params.id;

    try {
      const findFestivalsData: Festival[] = await this.festivalService.findFestivalByCountryId(countryId);
      res.status(200).json(findFestivalsData);
    } catch (error) {
      next(error);
    }
  };

  public getFestivalDetailById = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const festivalId: string = req.params.id;
    const userData: User = req.user;

    try {
      const findOneFestivalDetailData: Festival = await this.festivalService.createFestivalDetailData(
        festivalId,
        userData,
      );
      res.status(200).json(findOneFestivalDetailData);
    } catch (error) {
      next(error);
    }
  };
}

export default FestivalsController;
