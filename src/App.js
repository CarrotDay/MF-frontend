import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import { AdminLayout, UserLayout } from './layout';
import { routesWithoutLayout, routesWithLayout, routesAdmin } from '~/routes';
import { LoginRoute } from './utils';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/">
            {routesWithoutLayout.map(({ path, Component }, index) => <Route path={path} element={<Component />} key={index} />)}
            
            <Route path="/" element={<UserLayout />}>
                {routesWithLayout.map(({ path, Component }, index) => <Route path={path} element={<Component />} key={index} />)}
            </Route>
          </Route>

          <Route path="/manage" element={<AdminLayout />}>
            {/* <Route element={<LoginRoute />}> */}
              {routesAdmin.map(({ path, Component }, index) => <Route path={path} element={<Component />} key={index} />)}
            {/* </Route> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
