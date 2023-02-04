import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
const Header = () => {
  const [products,setProduct]=useContext(ProductContext)
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1"><Link to="/">Home</Link></Nav.Link>
         
        </Nav>
        <Form className="d-flex">
        <h5 className='me-3'>Product count:{products.length}</h5>
        <Link to="/add">  <Button variant="outline-success">Add</Button></Link>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header