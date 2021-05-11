import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './NavMenu.css';


const NavMenu = ({ count }) => {
  const [collapsed, setCollapsed] = useState();

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

  return (
    <header>
      <Navbar style={{ backgroundColor: '#90caf9' }} className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navbar-custom" expand="md" light>
        <Container>
          <NavbarBrand tag={Link} to="/">
            <Typography color="inherit" variant="h6">
              <Button color="inherit" style={{ fontWeight: 950 }}>t g i f
                drinks</Button>
            </Typography>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/"></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/products">
                  <Typography color="inherit" variant="h6" >
                    <Button color="inherit" style={{ fontWeight: 850 }}>Products</Button>
                  </Typography>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/shopping-trolley">
                  <Typography color="inherit" variant="h6">
                    <Button color="inherit" style={{ fontWeight: 850 }}>
                      Trolley
                      <Badge badgeContent={count} color="secondary">
                        <ShoppingCartIcon style={{ fontSize: 25 }} />
                      </Badge >
                    </Button>
                  </Typography>
                </NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header >
  );
}
export default NavMenu;