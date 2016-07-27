import Home from '../ui/pages/Home.jsx';
import Profile from '../ui/pages/Profile.jsx';
import About from '../ui/pages/About.jsx';

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
];

export default routes;
