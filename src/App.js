import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import MainChat from './pages/MainChat';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/*' element={<Main/>} />
        <Route exact path='/chat' element={<MainChat/>} />
        <Route path = '/login' element={<Login/>}></Route>
        <Route path = '/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
