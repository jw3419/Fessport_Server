import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from '../interfaces/auth.interface';
import commentService from '../services/comments.service';
import { Comment } from '../interfaces/comments.interface';
import { User } from '../interfaces/users.interface';

class CommentsController {
  public commentService = new commentService();

  public getComments = async (req: Request, res: Response, next: NextFunction) => {
    // query parameter라서 type 지정 못함
    const { boardId } = req.query;
    try {
      const findAllCommentData: (string | Comment)[] = await this.commentService.findAllComment(boardId);
      res.status(200).json(findAllCommentData);
    } catch (error) {
      next(error);
    }
  };

  public createComment = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const commentData = req.body;
    const userData: User = req.user;

    try {
      const createCommentData: Comment = await this.commentService.createComment(commentData, userData);
      res.status(201).json(createCommentData);
    } catch (error) {
      next(error);
    }
  };

  public updateComment = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const commentData = req.body;
    const userData: User = req.user;

    try {
      const updateCommentData: Comment = await this.commentService.updateComment(commentData, userData);
      res.status(201).json(updateCommentData);
    } catch (error) {
      next(error);
    }
  };

  public deleteComment = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const { commentId } = req.query;
    const userData: User = req.user;

    try {
      const deleteCommentData: Comment = await this.commentService.deleteComment(commentId, userData);
      res.status(201).json(deleteCommentData);
    } catch (error) {
      next(error);
    }
  };
}

export default CommentsController;
