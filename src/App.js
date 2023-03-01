import { Routes, Route } from "react-router-dom";


import MainPage from "./components/MainPage";
import Register from "./components/Register";
import GamePage from "./components/GamePage";


function App() {
  return (
    <div className="App">
      <div className='main-container'>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/play" element={<GamePage />} />


        </Routes>
      </div>
    </div >
  );
}

export default App;
