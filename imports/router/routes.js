import Home from '../ui/pages/Home.jsx';
import Profile from '../ui/pages/Profile.jsx';
import Register from '../ui/pages/Register.jsx';
//import Threat from '../ui/pages/Threat.jsx';
import About from '../ui/pages/About.jsx';
import NewThreat from '../ui/pages/NewThreat.jsx';

const routes = [
  {
    path: '/',
    component: Home
  },
  // {
  //   path: '/mythreats',
  //   component: Threat
  // },
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
  {
    path: '/newthreat',
    component: NewThreat
  },
];

export default routes;
