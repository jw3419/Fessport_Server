import { NextFunction, Request, Response } from 'express';
import commentService from '../services/comments.service';

import { Comment } from '../interfaces/comments.interface';
import { User } from '../interfaces/users.interface';

class CommentsController {
  public commentService = new commentService();

  public createComment = async (req: Request, res: Response, next: NextFunction) => {
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
