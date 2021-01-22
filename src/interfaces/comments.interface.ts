import { User } from './users.interface';
import { Board } from './boards.interface';

export interface Comment {
  _id?: string;
  description: string;
  user: User | string;
  board: Board | string;
  createdAt?: Date;
  updatedAt?: Date;
}
