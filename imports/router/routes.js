import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import Profile from '../ui/pages/Profile.jsx';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/profile',
    component: Profile
  }, 
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
