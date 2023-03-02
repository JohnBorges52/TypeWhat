import { Routes, Route } from "react-router-dom";


import MainPage from "./components/MainPage";
import Register from "./components/Register";
import Test from "./components/Test";


function App() {
  return (
    <div className="App">
      <div className='main-container'>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Register />} />

          <Route path="/test" element={<Test />} />


        </Routes>
      </div>
    </div >
  );
}

export default App;
