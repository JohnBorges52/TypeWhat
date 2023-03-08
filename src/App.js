import { Routes, Route, useNavigate } from "react-router-dom";


import MainPage from "./components/MainPage";
import Register from "./components/Register";
import Test from "./components/Test";


function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />

      </Routes>

    </div >
  );
}

export default App;
