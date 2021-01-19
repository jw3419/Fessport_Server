import bcrypt from 'bcrypt'; // 비밀번호 해시(암호화) 저장, nodejs 라이브러리
import jwt from 'jsonwebtoken';
import { CreateUserDto } from '../dtos/users.dto';
import HttpException from '../exceptions/HttpException';
import { DataStoredInToken, TokenData } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';
import userModel from '../models/users.model';
import { isEmpty } from '../utils/util';

class AuthService {
  public users = userModel;

  public async signup(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email }); // user의 이메일로 db에서 user를 찾는다.
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`); // 이미 있는 이메일인지 확인한다.

    const hashedPassword = await bcrypt.hash(userData.password, 10); // 비밀번호를 암호화한다.
    const createUserData: User = await this.users.create({ ...userData, password: hashedPassword }); // user를 만들고 db에 해싱된 비밀번호와 함께 저장한다.

    return createUserData;
  }

  public async login(userData: CreateUserDto): Promise<{ cookie: string; findUser: User }> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email }); // user의 이메일로 db에서 user를 찾는다.
    if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);

    const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password); // user의 비밀번호가 해싱된 비밀번호가 맞는지 확인한다.
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

    const tokenData = this.createToken(findUser); // create token
    const cookie = this.createCookie(tokenData); // create cookie

    return { cookie, findUser };
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ password: userData.password }); // user의 password로 user를 찾는다.
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  // create token function
  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secret: string = process.env.JWT_SECRET;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: jwt.sign(dataStoredInToken, secret, { expiresIn }) };
  }

  // create cookie function
  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
