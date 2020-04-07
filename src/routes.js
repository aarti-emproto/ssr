import Home from './home';
import Login from './login';
import NotFound from './notFound';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    component: NotFound
  }
];

export default Routes;