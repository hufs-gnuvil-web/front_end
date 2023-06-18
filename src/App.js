import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import MainChat from './pages/MainChat';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Terms from './pages/TermsOfService';
import Finish from './pages/FinishSignup';
import Mypage from './pages/Mypage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/*' element={<Main/>} />
        <Route exact path='/chat' element={<MainChat/>} />
        <Route path = '/login' element={<Login/>}></Route>
        <Route path = '/signup' element={<Signup/>}></Route>
        <Route path = '/terms' element={<Terms/>}></Route>
        <Route path = '/success' element={<Finish/>}></Route>
        <Route path = '/mypage/*' element={<Mypage/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
