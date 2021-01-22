import 'dotenv/config';
import App from './app';
import AuthRoute from './routes/auth.route';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import WishlistsRoute from './routes/wishlists.route';
import FakeDataRoute from './routes/fakeData.route';
import BoardsRoute from './routes/boards.route';
import CommentsRoute from './routes/comments.route';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new WishlistsRoute(),
  new FakeDataRoute(),
  new BoardsRoute(),
  new CommentsRoute(),
]);

app.listen();
