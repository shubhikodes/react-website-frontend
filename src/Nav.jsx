import React from 'react';
import {Routes,Route} from "react-router-dom"
import {Link} from "react-router-dom"
import Services from "./Services"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"

const Nav =()=>{
    const vanish=()=>{
        const home=document.querySelector(".home");
        console.log(home);
        console.log("clicked");
        home.style.display="none";
    }

    const appear=()=>{
        const home=document.querySelector(".home");
        console.log(home);
        console.log("clicked");
        home.style.display="inline-block";
    }
    
    return(
        <>
            <div className="nav">
            <p className="oname">Thoughtful Technical</p>
                   <div className="navinner">
                    <Link to="/" className="homelink" onClick={appear}>Home</Link>
                    <Link to="/services" onClick={vanish}>Services</Link>
                    <Link to="/about" onClick={vanish}>About</Link>
                    <Link to="/contact" onClick={vanish}>Contact</Link>
                   </div>
            </div>
                <Routes>
                    <Route exact path='/' element={<Home/>}></Route>
                    <Route exact path='/services' element={<Services/>}></Route>
                    <Route exact path='/about' element={<About/>}></Route>
                    <Route exact path='/contact' element={<Contact/>}></Route>
                </Routes>         
        </>
    )
}
export default Nav;