import { Routes, Route, useNavigate } from "react-router-dom";


import MainPage from "./components/MainPage";
import TopNavBar from "./components/TopNavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import './styles/style.scss'


function App() {
  return (
    <div className="App">
      <div className='main-container'>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/play" element={<GamePage />} />

        </Routes>
      </div>
    </div >
  );
}

export default App;
