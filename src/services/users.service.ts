import bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/users.dto';
import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/users.interface';
import userModel from '../models/users.model';
import { isEmpty } from '../utils/util';
import { Badge } from '../interfaces/badges.interface';
import badgeModel from '../models/badges.model';
import { Mypost } from '../interfaces/myposts.interface';
import { Board } from '../interfaces/boards.interface';
import boardModel from '../models/boards.model';
import postCategoryModel from '../models/postCategories.model';
import { PostCategory } from '../interfaces/postCategories.interface';

class UserService {
  public boards = boardModel;
  public users = userModel;
  public badges = badgeModel;
  public postCategory = postCategoryModel;

  public async findAllUser(): Promise<User[]> {
    const users: User[] = await this.users.find();
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    const findUser: User = await this.users.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async findWishlist(userId: string): Promise<User> {
    const findWishlist: User = await this.users
      .findOne({ _id: userId }, 'wishArtists wishFestivals')
      .populate('wishArtists', 'name image')
      .populate('wishFestivals', 'name poster'); // festivals, artists service에서 public으로 모델 불러오기 때문에 참조 가능
    if (!findWishlist) throw new HttpException(409, 'error');
    return findWishlist;
  }

  public async findAllBadge(): Promise<Badge[]> {
    const badges: Badge[] = await this.badges.find({}, 'name image').sort('createdAt');
    return badges;
  }

  public async findFessport(userId: string): Promise<User> {
    const fessport: User = await this.users
      .findOne({ _id: userId }, 'email nickname image visits badges')
      .populate('visits', 'poster');

    const { _id, email, nickname, image, visits, badges } = fessport;
    const findFessport = { _id, email, nickname, image, visits, badges: [] };
    const findBadges: Badge[] = await this.findAllBadge();

    for (let i = 0; i < findBadges.length; i++) {
      const { _id, name, image } = findBadges[i];
      findFessport.badges.push({ _id, name, image, get: false });
      for (let j = 0; j < badges.length; j++) {
        if (String(badges[j]) === String(findBadges[i]._id)) {
          findFessport.badges[i].get = true;
          break;
        }
      }
    }
    return findFessport;
  }

  public async findMyPosts(userId: string): Promise<Mypost> {
    if (!userId) throw new HttpException(409, 'error');

    const boards: Board[] = await this.boards
      .find({ user: userId }, 'title postCategory')
      .populate('postCategory', 'name');
    if (isEmpty(boards)) throw new HttpException(409, 'error');

    const findMyPostsdivideOfCateory = {};
    for (const board of boards) {
      const { _id, title, postCategory } = board;
      const categoryName = (<PostCategory>postCategory).name;
      if (!findMyPostsdivideOfCateory[categoryName]) {
        findMyPostsdivideOfCateory[categoryName] = [];
      }
      findMyPostsdivideOfCateory[categoryName].push({ _id, title });
    }
    return findMyPostsdivideOfCateory;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });
    return createUserData;
  }

  public async updateUser(userId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const { nickname, password, image } = userData;
    const updateData = { nickname, password, image };

    if (!nickname) delete updateData.nickname;
    if (!password) delete updateData.password;
    else updateData.password = await bcrypt.hash(userData.password, 10);
    if (!image) delete updateData.image;

    const updateUserById: User = await this.users.findByIdAndUpdate(userId, updateData, { new: true });
    if (!updateUserById) throw new HttpException(409, "You're not user");
    return updateUserById;
  }

  public async deleteUserData(userId: string): Promise<User> {
    const deleteUserById: User = await this.users.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "You're not user");

    return deleteUserById;
  }
}

export default UserService;
