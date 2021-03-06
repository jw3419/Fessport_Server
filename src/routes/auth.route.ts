import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { CreateUserDto, LoginUserDto } from '../dtos/users.dto';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

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
    this.router.post(`/logout`, authMiddleware, this.authController.logOut);
    this.router.get(`${this.path}/kakao`, this.authController.kakaoAuth);
    this.router.get(`${this.path}/kakao/callback`, this.authController.kakaoLoginCallback);
  }
}

export default AuthRoute;
