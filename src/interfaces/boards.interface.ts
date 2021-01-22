import { User } from './users.interface';
import { Festival } from './festivals.interface';
import { PostCategory } from './postCategories.interface';
import { Comment } from './comments.interface';

export interface Board {
  _id: string;
  title: string;
  description?: string;
  image?: string;
  user: User; // 누가 썼니?
  festival: Festival; // 어떤 페스티벌에 관한 글이니?
  postCategory: PostCategory; // 동행이니? 리셀이니? 후기니?
  comments?: Comment[]; // 댓글들
  participants?: User[]; // 이 게시물에 같이 가는 사람들
  createdAt?: Date;
  updatedAt?: Date;
}
