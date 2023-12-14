
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar title="The iNotebooks"/>
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
