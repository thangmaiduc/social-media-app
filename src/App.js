import "./App.css";
import Home from "./page/home/Home";
import Profile from "./page/profile/Profile";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import { Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "./store/AuthContext";
import Messenger from "./page/messenger/Messenger";
function App() {
  const [state, dispatch] = useContext(AuthContext);
  const {user}=state
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
      
    </div>
  );
}

export default App;
