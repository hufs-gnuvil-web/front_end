import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import MainChat from './pages/MainChat';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Terms from './pages/TermsOfService';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/*' element={<Main/>} />
        <Route exact path='/chat' element={<MainChat/>} />
        <Route path = '/login' element={<Login/>}></Route>
        {/* step별로 signup/1 -> signup/2 -> signup/3 으로 만들기 */}
        <Route path = '/signup' element={<Signup/>}></Route>
        <Route path = '/signup/2' element={<Terms/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
