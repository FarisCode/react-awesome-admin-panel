// import App from './App';
import Dashboard from '../Dashboard/Dashboard';
// import UnitExplorer from '../Explorer/UnitExplorer';

// router configuration.
let routes = [
  {
    path: '/dashboard',
    name: 'Project Dashboard',
    component: Dashboard,
    exact: true,
    strict: true
  }
];

export default routes;