import 'dotenv/config';
import App from './app';
import MainRoute from './routes/main.route';
import AuthRoute from './routes/auth.route';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import WishlistsRoute from './routes/wishlists.route';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new WishlistsRoute(), new MainRoute()]);

app.listen();
