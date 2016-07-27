import Home from '../ui/pages/Home.jsx';
import Profile from '../ui/pages/Profile.jsx';
import Register from '../ui/pages/Register.jsx';
import About from '../ui/pages/About.jsx';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/myprofile',
    component: Profile
  },
];

export default routes;
