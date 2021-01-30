import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      // res.sendStatus(200);
      res.status(200).send("Hello I'm In Docker Container Now!");
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
