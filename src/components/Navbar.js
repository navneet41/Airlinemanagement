import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';
 
  const Navbar= () => {
    return (
        <>
        <Nav>
            <Bars/>
            <NavMenu>
                <NavLink to='/'><span style={{fontWeight:'bold'}}>Home</span></NavLink>
                <NavLink to='/about'><span style={{fontWeight:'bold'}}>About Us</span></NavLink>
                <NavLink to='/admin'><span style={{fontWeight:'bold'}}>Admin</span></NavLink>
                <NavLink to='/user'><span style={{fontWeight:'bold'}}>User</span></NavLink>
                
                           </NavMenu>
            <NavBtn>
                <NavBtnLink to='/login'>Login</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
  }
 
  export default Navbar;