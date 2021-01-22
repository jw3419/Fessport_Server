import HttpException from '../exceptions/HttpException';
import { isEmpty } from '../utils/util';
import { Board } from '../interfaces/boards.interface';
import { User } from '../interfaces/users.interface';
import boardModel from '../models/boards.model';
import festivalModel from '../models/festivals.model';
import { Festival } from '../interfaces/festivals.interface';

class BoardService {
  public boards = boardModel;
  public festivals = festivalModel;

  public async findAllFestivalCategory(): Promise<Festival[]> {
    const festivalCategories: Festival[] = await this.festivals.find({}, 'name');
    return festivalCategories;
  }

  public async findBoardList(postCategoryId: string): Promise<Board[]> {
    if (isEmpty(postCategoryId)) throw new HttpException(400, 'The post category number was not passed.');

    const boardList: Board[] = await this.boards
      .find({ postCategory: postCategoryId })
      .populate('user', 'email image')
      .populate('festival', 'name');
    return boardList;
  }

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

  public async updateBoard(boardData): Promise<Board> {
    const { postId, title, description, image } = boardData;

    const updateBoardData: Board = await this.boards.findByIdAndUpdate(
      postId,
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

  public async deleteBoard(postId: string): Promise<Board> {
    const deleteBoardData: Board = await this.boards.findByIdAndDelete(postId);

    if (!deleteBoardData) throw new HttpException(409, 'Fail to delete');
    return deleteBoardData;
  }
}

export default BoardService;
