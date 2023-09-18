import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import { useEffect } from 'react';
import ReactDOM from "react-dom"

const App=()=>{

  return(
    <>
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App;
