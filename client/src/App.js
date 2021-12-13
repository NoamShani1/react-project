import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
//import JWTest from './JWTest';
import Navbar from './components/Navbar';
import NewTweet from './pages/NewTweet';


function App() {
  return (
    <div className="App">
      {/* <JWTest /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/post/new' element={<NewTweet />} />

      </Routes>
    </div>
  );
}

export default App;
