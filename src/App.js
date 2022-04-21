import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Deputados from './pages/Deputados';

function App() {
  return (
    <div> 
    <BrowserRouter>
    <Menu/> 
    <Routes>
    <Route path="/Deputados" element={<Deputados />} />
    </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;