import { Router } from 'express';
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import AuthController from '../controllers/auth.controller';
import { CreateUserDto, LoginUserDto } from '../dtos/users.dto';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'fessport-image',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(null, file.originalname);
    },
    limits: { fileSize: 5 * 1024 * 1024 }, // 용량 제한
  }),
});

class AuthRoute implements Route {
  public path = '/auth';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`/signup`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
    this.router.post(`/login`, validationMiddleware(LoginUserDto, 'body'), this.authController.logIn);
    this.router.post(`/signout`, authMiddleware, this.authController.logOut);
    this.router.post(`/imgUpload`, upload.single('img'), this.authController.imageUpload);
    this.router.get(`${this.path}/kakao`, this.authController.kakaoAuth);
    this.router.get(`${this.path}/kakao/callback`, this.authController.kakaoLoginCallback);
  }
}

export default AuthRoute;
