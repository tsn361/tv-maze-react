import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './layout/Header';
import Home from './pages/Home';
import Shows from './pages/Shows';
import Footer from './layout/Footer'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<Shows />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
