import { NextFunction, Request, Response } from 'express';
import { BoardCategory } from '../interfaces/boardCategories.interface'; // 바꿔줘야해
import Service from '../services/fakeData.service';

import { Artist } from '../interfaces/artists.interface';
import { Festival } from '../interfaces/festivals.interface';
class FakeDataController {
  public service = new Service();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const data: BoardCategory = req.body; // 바꿔줘야해

    try {
      const createData: Festival[] = await this.service.create(data); // 바꿔줘야해
      res.status(201).json({ data: createData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default FakeDataController;
