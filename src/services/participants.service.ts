import HttpException from '../exceptions/HttpException';
import { isEmpty } from '../utils/util';
import commentModel from '../models/comments.model';
import boardModel from '../models/boards.model';

import { User } from '../interfaces/users.interface';
import { Board } from '../interfaces/boards.interface';
import userModel from '../models/users.model';

class ParticipantsService {
  public boards = boardModel;
  public users = userModel;

  public async findParticipants(boardId): Promise<void> {
    const findBoardData: Board = await this.boards.findById(boardId).populate('participants');

    console.log(findBoardData);
  }
  public async createParticipant(boardId, userData: User): Promise<User> {
    if (isEmpty(boardId)) throw new HttpException(400, 'The boardId was not passed.');

    const findBoardData: Board = await this.boards.findById(boardId);
    findBoardData.participants.push(userData._id);
    await this.boards.findByIdAndUpdate(boardId, findBoardData, { new: true });

    const findUserData: User = await this.users.findById(userData._id, 'nickname image');
    return findUserData;
  }
}

export default ParticipantsService;
