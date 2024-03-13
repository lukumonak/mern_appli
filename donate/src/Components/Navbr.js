import React, { useState } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

import { Link, Redirect } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
function Nvbar() {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate()
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const logoutFrom = () => {
    logout();
    navigate('/login')
  }

  return (
    <nav className="nvbr">
      <div className="container1">
        <h3 className="logo">logo</h3>

        <ul className={mobile ? "nv-links-mobile" : "nv-links"}>
          <Link to='/'><li>Home</li></Link>
          <Link to='/aboutus'><li>About Us</li></Link>
          <Link to='/help'><li>Need Help</li></Link>
          <Link to='/publication'><li>Publication</li></Link>
          <Link to='/donate'><li>Donate</li></Link>
          <Link to='/signuporg'><li>signuporg</li></Link>
          <li>
            <Navbar >

              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example" >
                <Nav>
                  <NavDropdown
                    title="Support us" 
                    menuVariant="dark"
                  >
                    <NavDropdown.Item href="#action/3.1">Monitary support</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Collaboration</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Volunteer</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>

            </Navbar>
          </li>
          {user && (
            <li>
              {/* <span style={{color:'red',fontSize:'4px'}}>{user.email}</span> */}
              <button onClick={logoutFrom} style={{ position: "absolute", left: '88px' }} >logout</button>
            </li>
          )}
        {!user &&(
           <li >
           <button onClick={logoutFrom} style={{  position: "absolute", left: '88px' }}>login</button>
         </li>
        )}
        </ul>





        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)} >
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>

    </nav>

  );
}
export default Nvbar