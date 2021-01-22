import HttpException from '../exceptions/HttpException';
import { isEmpty } from '../utils/util';
import { Board } from '../interfaces/boards.interface';
import { User } from '../interfaces/users.interface';
import boardModel from '../models/boards.model';
import festivalModel from '../models/festivals.model';

class BoardService {
  public boards = boardModel;
  public festival = festivalModel;

  public async createBoard(data: Board, userData: User): Promise<Board> {
    if (isEmpty(data)) throw new HttpException(400, "It's not a board data");

    const boardData = {
      title: data.title,
      description: data.description,
      image: data.image,
      user: userData._id,
      festival: data.festival,
      postCategory: data.postCategory,
      comments: [],
      participants: [],
    };

    const createBoardData: Board = await this.boards.create(boardData);
    return createBoardData;
  }

  public async findBoardList(postCategoryId: string): Promise<Board[]> {
    if (isEmpty(postCategoryId)) throw new HttpException(400, 'The post category number was not passed.');

    const boardList: Board[] = await this.boards
      .find({ postCategory: postCategoryId })
      .populate('user', 'email image')
      .populate('festival', 'name');
    return boardList;
  }

  public async updateBoard(boardData): Promise<Board> {
    console.log(boardData);
    const { title, description, image } = boardData;
    const updateBoardData: Board = await this.boards.findByIdAndUpdate(
      boardData.postId,
      {
        title: title,
        description: description,
        image: image,
      },
      {
        new: true,
      },
    );

    return updateBoardData;
  }
}

export default BoardService;
