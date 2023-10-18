import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Naavbar.css';



const Naavbar = () => {
  return (
    <div>

        <Navbar style={{backgroundColor:'aqua'}}  bg="blue" expand="lg">
      <Container fluid>

        <Navbar.Brand href="#">AQUAGREEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="me-auto my-2 my-lg-0" style={{ color:'aqua', maxHeight: '50000px' }}     navbarScroll   >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Product</Nav.Link>
            <Nav.Link href="#action2">Etude</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            
          <Form className="d-flex" style={{float:'50%'}} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Naavbar;



