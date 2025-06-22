import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/navbar_logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import "./style.scss";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Giftbox Logo" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#deals">Deals</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
          </Nav>
          <Form className="search-button">
            <Form.Control type="search" placeholder="Search gift boxes..." />
            <FaMagnifyingGlass />
          </Form>
          <div className="navbar-icons">
            <FaCartShopping />
            <IoIosContact />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
