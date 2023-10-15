import "./App.css";
import Home from "./screen/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./screen/Signup";
import Login from "./screen/Login";
import Services from "./screen/Services";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
          <Route path="/services" element={<Services/>} />
          
          
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
