import './assets/css/App.css'
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Success from './pages/Success';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories/:idc" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
