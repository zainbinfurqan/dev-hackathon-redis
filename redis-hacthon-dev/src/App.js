import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Auth from './pages/auth';
import Home from './pages/home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
