import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const MovieNavbar = () => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand tag={Link} to="/">Movie Finder</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/about">About</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default MovieNavbar;
