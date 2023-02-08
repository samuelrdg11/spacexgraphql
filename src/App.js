import './App.css';
import Launches from './Components/Launches';
import Capsules from './Components/Capsules';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Capsules" element={<Capsules />} />
          <Route path="/Launches" element={<Launches />} />
        </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
