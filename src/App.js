import './App.css';
import Client from './Client';
import Inicio from './Components/Inicio';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Capsules" element={<Inicio />} />
          <Route path="/Launches" element={<Client />} />
        </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
