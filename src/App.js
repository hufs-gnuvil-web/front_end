import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainChat from './pages/MainChat'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/*' element={<MainChat/>} />
        <Route path = '/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
