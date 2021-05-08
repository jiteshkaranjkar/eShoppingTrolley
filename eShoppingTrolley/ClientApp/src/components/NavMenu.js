import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import CartWithBadge from './controls/CartWithBadge';
import './NavMenu.css';


const NavMenu = ({ count }) => {
  //const [count, setCount] = useState(0);
  const [collapsed, setCollapsed] = useState();

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

  return (
    <header>
      <Navbar style={{ backgroundColor: '#90caf9' }} className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navbar-custom" expand="md" light>
        <Container>
          <NavbarBrand tag={Link} to="/">eShoppingTrolley</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/"></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/shopping-trolley">Shopping Trolley</NavLink>
              </NavItem>
              <NavItem>
                <CartWithBadge count={count}/>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header >
  );
}
export default NavMenu;