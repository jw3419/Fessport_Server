import { User } from './users.interface';
import { Board } from './boards.interface';

export interface Comment {
  _id: string;
  description: string;
  user: User;
  board: Board;
  createdAt: Date;
  updatedAt: Date;
}
