import { NextFunction, Request, Response } from 'express';
import { User } from '../interfaces/users.interface'; // 바꿔줘야해
import Service from '../services/fakeData.service';

class FakeDataController {
  public service = new Service();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const data: User = req.body; // 바꿔줘야해

    try {
      const createData: User = await this.service.create(data); // 바꿔줘야해
      res.status(201).json({ data: createData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default FakeDataController;
