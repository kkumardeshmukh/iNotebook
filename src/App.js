
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <div>

      <NoteState>

      <BrowserRouter>
      <Navbar title="The iNotebooks"/>
      <Alert message="Action done"/>
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
      </Routes>
      </BrowserRouter>

      </NoteState>
     
    </div>
  );
}

export default App;
