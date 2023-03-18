import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import routes from '~/routes';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {routes.map(({ path, Component }, index) => <Route path={path} element={<Component />} key={index} />)}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
