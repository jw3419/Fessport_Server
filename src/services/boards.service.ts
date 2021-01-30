import HttpException from '../exceptions/HttpException';
import { isEmpty } from '../utils/util';
import { Board } from '../interfaces/boards.interface';
import { User } from '../interfaces/users.interface';
import boardModel from '../models/boards.model';

class BoardService {
  public boards = boardModel;

  public async findBoardList(boardCategoryId): Promise<Board[]> {
    if (isEmpty(boardCategoryId)) throw new HttpException(400, 'The boardCategoryId was not passed.');

    const boardList: Board[] = await this.boards
      .find(
        { boardCategory: boardCategoryId },
        'title description image user festival comments participants createdAt updatedAt',
      )
      .populate('user', 'nickname image')
      .populate('festival', 'name')
      .populate({
        path: 'comments',
        select: 'description user createdAt updatedAt',
        populate: { path: 'user', select: 'nickname image' },
      })
      .populate('participants', 'nickname');

    return boardList;
  }

  public async createBoard(boardData, userData: User): Promise<Board> {
    if (isEmpty(boardData)) throw new HttpException(400, "It's not a board data");

    const preBoardData = {
      title: boardData.title,
      description: boardData.description,
      image: boardData.image,
      user: userData._id,
      festival: boardData.festivalId,
      boardCategory: boardData.boardCategoryId,
      comments: [],
      participants: [],
    };

    const createBoardData: Board = await this.boards.create(preBoardData);
    return createBoardData;
  }

  public async updateBoard(boardData, userData: User): Promise<Board> {
    const { boardId } = boardData;
    const findBoardData: Board = await this.boards.findById(boardId).populate('user');

    if (userData.email !== findBoardData.user.email)
      throw new HttpException(400, 'You are not the user who wrote this board.');

    const updateBoardData: Board = await this.boards.findByIdAndUpdate(
      boardId,
      {
        title: boardData.title,
        description: boardData.description,
        image: boardData.image,
      },
      {
        new: true,
      },
    );

    if (!updateBoardData) throw new HttpException(409, 'Fail to update');

    return updateBoardData;
  }

  public async deleteBoard(boardId, userData: User): Promise<Board> {
    const findBoardData: Board = await this.boards.findById(boardId).populate('user');

    if (userData.email !== findBoardData.user.email)
      throw new HttpException(400, 'You are not the user who wrote this board.');

    const deleteBoardData: Board = await this.boards.findByIdAndDelete(boardId);

    if (!deleteBoardData) throw new HttpException(409, 'Fail to delete');
    return deleteBoardData;
  }
}

export default BoardService;
