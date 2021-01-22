import { NextFunction, Request, Response } from 'express';
import { Board } from '../interfaces/boards.interface';
import { Festival } from '../interfaces/festivals.interface';
import { User } from '../interfaces/users.interface';
import boardService from '../services/boards.service';

class BoardsController {
  public boardService = new boardService();

  public getFestivalCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const festivalCategoryData: Festival[] = await this.boardService.findAllFestivalCategory();
      res.status(200).json(festivalCategoryData);
    } catch (error) {
      next(error);
    }
  };

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

  public findBoardList = async (req: Request, res: Response, next: NextFunction) => {
    const postCategoryId: string = req.params.postCategoryId;

    try {
      const findBoardData: Board[] = await this.boardService.findBoardList(postCategoryId);
      res.status(200).json(findBoardData);
    } catch (error) {
      next(error);
    }
  };

  public updateBoard = async (req: Request, res: Response, next: NextFunction) => {
    const boardData = req.body;

    try {
      const updateBoardData: Board = await this.boardService.updateBoard(boardData);
      res.status(201).json(updateBoardData);
    } catch (error) {
      next(error);
    }
  };

  public deleteBoard = async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.body.postId;

    try {
      const deleteBoardData: Board = await this.boardService.deleteBoard(postId);
      res.status(201).json(deleteBoardData);
    } catch (error) {
      next(error);
    }
  };
}

export default BoardsController;
