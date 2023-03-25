import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { routesWithoutLayout, routesWithLayout } from '~/routes';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routesWithoutLayout.map(({ path, Component }, index) => <Route path={path} element={<Component />} key={index} />)}

          <Route element={(
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          )}>
              {routesWithLayout.map(({ path, Component }, index) => <Route path={path} element={<Component />} key={index} />)}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
