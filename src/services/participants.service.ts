import HttpException from '../exceptions/HttpException';
import { isEmpty } from '../utils/util';
import boardModel from '../models/boards.model';

import { User } from '../interfaces/users.interface';
import { Board } from '../interfaces/boards.interface';
import userModel from '../models/users.model';

class ParticipantsService {
  public boards = boardModel;
  public users = userModel;

  public async findParticipants(boardId): Promise<(string | User)[]> {
    const findBoardData: Board = await this.boards.findById(boardId).populate('participants', 'nickname image');
    const { participants } = findBoardData;

    return participants;
  }
  public async createParticipant(boardId, userData: User): Promise<User> {
    if (isEmpty(boardId)) throw new HttpException(400, 'The boardId was not passed.');

    const findBoardData: Board = await this.boards.findById(boardId);
    findBoardData.participants.push(userData._id);
    await this.boards.findByIdAndUpdate(boardId, findBoardData, { new: true });

    const findUserData: User = await this.users.findById(userData._id, 'nickname image');
    return findUserData;
  }

  public async deleteParticipant(boardId, userData: User): Promise<void> {
    if (isEmpty(boardId)) throw new HttpException(400, 'The boardId was not passed.');

    const findBoardData: Board = await this.boards.findById(boardId);
    const idx = findBoardData.participants.indexOf(userData._id);
    findBoardData.participants.splice(idx, 1);
    await this.boards.findByIdAndUpdate(boardId, findBoardData, { new: true });
  }
}

export default ParticipantsService;
