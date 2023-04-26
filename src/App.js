import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { AdminLayout, UserLayout } from './layout';
import { routesWithoutLayout, routesWithLayout, routesAdmin } from '~/routes';
import { RoleRoute } from './utils';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <RoleRoute />
      </div>
    </Router>
  );
}

export default App;
