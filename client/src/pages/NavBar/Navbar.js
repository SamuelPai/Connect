import React, { useState } from "react";
import LoginButton from "../../components/LoginButton/LoginButton";
import "./Navbar.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
const Example = props => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar light expand="md">
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
          <NavItem>
            <NavLink href="/Search">SEARCH</NavLink>
          </NavItem>
          {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
        </Nav>
        <div class="logo">
          <img src="/images/logo.png" alt="logo" width="150" height="40"></img>
        </div>
        {/* </Collapse> */}
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <div>
                <a>
                  <LoginButton />
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a href="/Trip">
                <Button>Log On</Button>
              </a>
            </li>

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
  );
};
export default Example;
