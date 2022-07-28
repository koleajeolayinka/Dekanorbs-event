import './App.css';
import Login from "./views/Authentication/Login";
import Register from "./views/Authentication/Register";
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;