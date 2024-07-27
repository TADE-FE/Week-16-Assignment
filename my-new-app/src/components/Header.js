import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">My Budget Tracker</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/budget">Budget</Nav.Link>
      <Nav.Link href="/transactions">Transactions</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
