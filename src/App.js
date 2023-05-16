import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./pages/Info";
import Main from "./pages/Main";
import Error from "./pages/Error";
import './styles/App.css';
import Test from "./pages/Test";

function App() {
  return ( 
    <BrowserRouter>    
      <Routes>        
        <Route path="info" element={<Info />} />
        <Route path="/" element={<Main />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App;
