import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Body from './components/Body';
import Admin from './components/Admin'
import Start from './components/Start'
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element={<Start/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
