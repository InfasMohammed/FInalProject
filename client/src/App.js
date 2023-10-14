import Index from "./screen";
import "./App.css";
import InnerPage from "./screen/innerPage";
import Portfolio from "./screen/portfolio";
import Home from "./screen/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./screen/Signup";
import Login from "./screen/Login";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
          
          
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
