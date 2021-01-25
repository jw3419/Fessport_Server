import { NextFunction, Response } from 'express';
import VisitService from '../services/visits.service';
import { RequestWithUser } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';

class VisitsController {
  public visitService = new VisitService();

  public visitFestival = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const festivalId: string = req.body.festivalId;
    const userData: User = req.user;

    try {
      const updateUser = await this.visitService.updateVisitFestival(festivalId, userData);
      res.status(200).json(updateUser);
    } catch (error) {
      next(error);
    }
  };

  public visitCancel = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const festivalId: string = req.body.festivalId;
    const userData: User = req.user;

    try {
      const updateUser = await this.visitService.updateVisitCancel(festivalId, userData);
      res.status(200).json(updateUser);
    } catch (error) {
      next(error);
    }
  };
}

export default VisitsController;
