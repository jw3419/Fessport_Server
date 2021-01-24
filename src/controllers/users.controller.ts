import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../interfaces/users.interface';
import userService from '../services/users.service';
import { RequestWithUser } from '../interfaces/auth.interface';

class UsersController {
  public userService = new userService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: User[] = await this.userService.findAllUser();
      res.status(200).json(findAllUsersData);
    } catch (error) {
      next(error);
    }
  };

  public getMyWishlist = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userData: User = req.user;

    try {
      const findWishlist: User = await this.userService.findWishlist(userData._id);
      res.status(200).json(findWishlist);
    } catch (error) {
      next(error);
    }
  };

  public getMyFessport = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userData: User = req.user;

    try {
      const findMyFessport: User = await this.userService.findFessport(userData._id);
      res.status(200).json(findMyFessport);
    } catch (error) {
      next(error);
    }
  };

  public getMyPosts = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userData: User = req.user;

    try {
      const findMyPosts: User = await this.userService.findMyPosts(userData._id);
      res.status(200).json(findMyPosts);
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id;

    try {
      const findOneUserData: User = await this.userService.findUserById(userId);
      res.status(200).json(findOneUserData);
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    const userData: CreateUserDto = req.body;

    try {
      const createUserData: User = await this.userService.createUser(userData);
      res.status(201).json(createUserData);
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId: string = req.user._id;
    const userData: User = req.body;

    try {
      const updateUserData: User = await this.userService.updateUser(userId, userData);
      res.status(200).json(updateUserData);
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id;

    try {
      const deleteUserData: User = await this.userService.deleteUserData(userId);
      res.status(200).json(deleteUserData);
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
