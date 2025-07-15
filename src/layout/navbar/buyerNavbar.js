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
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/authSelector";
import { logout } from "../../redux/reducers";
import "./style.scss";

function BuyerNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Giftbox Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/category">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/deals">
              Deals
            </Nav.Link>
            <Nav.Link as={Link} to="/reviews">
              Reviews
            </Nav.Link>
            <Nav.Link as={Link} to="/return">
              Return & Refund
            </Nav.Link>
          </Nav>

          <Form className="search-button">
            <Form.Control type="search" placeholder="Search gift boxes..." />
            <FaMagnifyingGlass />
          </Form>

          <div className="navbar-icons">
            <FaCartShopping onClick={() => navigate("/cart")} />

            <Dropdown align="end">
              <Dropdown.Toggle
                as="span"
                id="dropdown-custom-components"
                style={{ cursor: "pointer" }}
              >
                <IoIosContact size={22} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {user ? (
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                ) : (
                  <Dropdown.Item onClick={() => navigate("/login")}>
                    Login
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BuyerNavbar;
