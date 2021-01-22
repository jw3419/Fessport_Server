import HttpException from '../exceptions/HttpException';
import { isEmpty } from '../utils/util';
import commentModel from '../models/comments.model';
import boardModel from '../models/boards.model';

import { Comment } from '../interfaces/comments.interface';
import { User } from '../interfaces/users.interface';
import { Board } from '../interfaces/boards.interface';

class CommentService {
  public comments = commentModel;
  public boards = boardModel;

  public async createComment(commentData: Comment, userData: User): Promise<Comment> {
    if (isEmpty(commentData)) throw new HttpException(400, "It's not a comment data");
    const { board, description } = commentData;

    const preCommentData = {
      description: description,
      user: userData._id,
      board: board,
    };

    const findBoardData: Board = await this.boards.findById(board);
    const createCommentData: Comment = await this.comments.create(preCommentData);

    findBoardData.comments.push(createCommentData._id);
    const updateBoardData: Board = await this.boards.findByIdAndUpdate(board, findBoardData, { new: true });
    const findCommentData: Comment = await this.comments.findById(createCommentData._id).populate('user', 'nickname');

    return findCommentData;
  }
}

export default CommentService;
