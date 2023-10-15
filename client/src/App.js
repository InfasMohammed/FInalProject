import "./App.css";
import Home from "./screen/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./screen/Signup";
import Login from "./screen/Login";
import About from "./screen/About";
import Contact from "./screen/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
