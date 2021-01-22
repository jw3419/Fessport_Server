import 'dotenv/config';
import App from './app';
import validateEnv from './utils/validateEnv';
import IndexRoute from './routes/index.route';
import AuthRoute from './routes/auth.route';
import MainRoute from './routes/main.route';
import FestivalsRoute from './routes/festivals.route';
import CategoryRoute from './routes/category.route';
import ArtistsRoute from './routes/artists.route';
import UsersRoute from './routes/users.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new AuthRoute(),
  new MainRoute(),
  new FestivalsRoute(),
  new CategoryRoute(),
  new ArtistsRoute(),
  new UsersRoute(),
]);

app.listen();
