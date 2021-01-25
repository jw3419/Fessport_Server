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

  public async findAllComment(boardId): Promise<(string | Comment)[]> {
    const findBoardData: Board = await this.boards.findById(boardId).populate({
      path: 'comments',
      select: 'description user createdAt updatedAt',
      populate: { path: 'user', select: 'nickname' },
    });

    return findBoardData.comments;
  }

  public async createComment(commentData, userData: User): Promise<Comment> {
    if (isEmpty(commentData)) throw new HttpException(400, 'Comment data is empty');
    const { boardId } = commentData;

    const preCommentData = {
      description: commentData.description,
      user: userData._id,
      board: boardId,
    };

    const findBoardData: Board = await this.boards.findById(boardId);
    const createCommentData: Comment = await this.comments.create(preCommentData);

    findBoardData.comments.push(createCommentData._id);
    await this.boards.findByIdAndUpdate(boardId, findBoardData, { new: true });
    const findCommentData: Comment = await this.comments
      .findById(createCommentData._id, 'description user createAt updatedAt')
      .populate('user', 'nickname');

    return findCommentData;
  }

  public async updateComment(commentData, userData: User): Promise<Comment> {
    const { commentId, description } = commentData;
    const findCommentData: Comment = await this.comments.findById(commentId).populate('user');

    if (userData.email !== findCommentData.user.email)
      throw new HttpException(400, 'You are not the user who wrote this comment.');

    const updateCommentData: Comment = await this.comments.findByIdAndUpdate(
      commentId,
      { description: description },
      { new: true },
    );

    return updateCommentData;
  }

  public async deleteComment(commentId, userData: User): Promise<Comment> {
    const findCommentData: Comment = await this.comments.findById(commentId).populate('user');

    if (userData.email !== findCommentData.user.email)
      throw new HttpException(400, 'You are not the user who wrote this comment.');

    const deleteCommentData: Comment = await this.comments.findByIdAndDelete(commentId);

    return deleteCommentData;
  }
}

export default CommentService;
