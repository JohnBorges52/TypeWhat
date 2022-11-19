import './styles/app.scss'
import { Routes, Route, useNavigate } from "react-router-dom";


import MainPage from "./components/MainPage";
import TopNavBar from "./components/TopNavBar";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div >
  );
}

export default App;
