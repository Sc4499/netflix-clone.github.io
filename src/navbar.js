import React, { useEffect, useState } from 'react';
import "./navbar.css";
import logo from "./media/R.png";
import avatar from "./media/avatat.png";

const Navbar = () => {
    const [show, handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100){
                handleShow(true);
        } else handleShow(false);
});
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);
  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <div className="navbar_logo">
          <img className="logo" src={logo} alt=""></img>
      </div>
      <img className="avatar" src={avatar} alt=""></img>
      </div>
  )
}

export default Navbar;
