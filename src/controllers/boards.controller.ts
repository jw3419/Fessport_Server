import { NextFunction, Request, Response } from 'express';
import { Board } from '../interfaces/boards.interface';
import { User } from '../interfaces/users.interface';
import boardService from '../services/boards.service';

class BoardsController {
  public boardService = new boardService();

  public createBoard = async (req: Request, res: Response, next: NextFunction) => {
    const boardData: Board = req.body;
    const userData: User = req.user;

    try {
      const createBoardData: Board = await this.boardService.createBoard(boardData, userData);
      res.status(201).json(createBoardData);
    } catch (error) {
      next(error);
    }
  };

  public findBoard = async (req: Request, res: Response, next: NextFunction) => {
    const postCategoryId: string = req.params.postCategoryId;
    console.log('DDDD: ', postCategoryId);
    try {
      const findBoardData: Board[] = await this.boardService.findBoard(postCategoryId);
      res.status(200).json(findBoardData);
    } catch (error) {}
  };
}

export default BoardsController;
