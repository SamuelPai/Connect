import React from "react";
import LoginButton from "../../components/LoginButton/LoginButton";
import "./Navbar.css";
import { Navbar, Nav, NavItem, NavLink, Button, Jumbotron } from "reactstrap";
const Example = props => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
    <Jumbotron style={{background:"rgb(231, 210, 228", padding:"0px", margin:"0px"}} fluid className="display">
    <div class="logo">
          <img style={{marginBottom:"30px"}} src="https://media.giphy.com/media/l1J9wQIaj0He3bTSU/giphy.gif" alt="gify" width="200" />
          <img style={{marginLeft:"600px"}} src="/images/logo.png" alt="logo" width="250" height="80"></img>
        </div>
      </Jumbotron>
    <div>
      <Navbar style={{marginTop:"-32px"}} light expand="md">
        {/* <NavbarBrand href="/">
          <a href="/">
            <img src="logo.png" height="33" width="120" />
          </a>
        </NavbarBrand> */}
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar> */}
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/MyTrip">TRIP</NavLink>
          </NavItem>
   
        
        </Nav>
       
        {/* </Collapse> */}
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <div>
                <a>  <LoginButton />
                </a>
                
               
              </div>
            </li>
            {/* <li class="nav-item">
          
              <a href="/logon">
                <Button>Log On</Button>
               
              </a>
            </li> */}

            <li class="nav-item">
              <a
                class="btn btn-outline-dark btn-social text-right rounded-circle"
                href="https://www.facebook.com"
              >
                <i class="fa fa-fw fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="btn btn-outline-dark btn-social text-right rounded-circle"
                href="https://www.instagram.com"
              >
                <i class="fa fa-fw fa-instagram"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="btn btn-outline-dark btn-social text-right rounded-circle"
                href="https://www.pinterest.com"
              >
                <i class="fa fa-fw fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </Navbar>
    </div>

    </div>
  );
};
export default Example;
