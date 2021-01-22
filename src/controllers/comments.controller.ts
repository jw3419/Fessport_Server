import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from '../interfaces/auth.interface';
import commentService from '../services/comments.service';

import { Comment } from '../interfaces/comments.interface';
import { User } from '../interfaces/users.interface';

class CommentsController {
  public commentService = new commentService();

  public getComments = async (req: Request, res: Response, next: NextFunction) => {
    // query parameter라서 type 지정 못함
    const { postId } = req.query;
    try {
      const findAllCommentData: (string | Comment)[] = await this.commentService.findAllComment(postId);
      res.status(200).json(findAllCommentData);
    } catch (error) {
      next(error);
    }
  };

  public createComment = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const commentData: Comment = req.body;
    const userData: User = req.user;

    try {
      const createCommentData: Comment = await this.commentService.createComment(commentData, userData);
      res.status(201).json(createCommentData);
    } catch (error) {
      next(error);
    }
  };
}

export default CommentsController;
