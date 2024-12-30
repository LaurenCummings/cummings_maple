import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/About" element={<AboutUs />} />
            <Route path="/" element={<Shop />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
