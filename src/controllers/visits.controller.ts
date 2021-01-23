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
      await this.visitService.updateUserVisits(festivalId, userData);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default VisitsController;
