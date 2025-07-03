import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/navbar_logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import "./style.scss";

function SellerNavbar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/seller">
          <img src={logo} alt="Giftbox Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav navbarScroll>
            <Nav.Link as={Link} to="/seller">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              My Products
            </Nav.Link>
            <Nav.Link as={Link} to="/orders">
              Order Management
            </Nav.Link>
            <Nav.Link as={Link} to="/return">
              Return & Refund
            </Nav.Link>
            <Nav.Link as={Link} to="/reviews">
              Reviews
            </Nav.Link>
          </Nav>
          <Form className="search-button">
            <Form.Control type="search" placeholder="Search gift boxes..." />
            <FaMagnifyingGlass />
          </Form>
          <div className="navbar-icons">
            <FaCartShopping onClick={() => navigate("/cart")} />
            <IoIosContact onClick={() => navigate("/login")} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SellerNavbar;
