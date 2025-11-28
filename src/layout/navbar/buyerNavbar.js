import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/navbar_logo.png";
import { FaCartShopping, FaBars, FaXmark } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/authSelector";
import { logout } from "../../redux/reducers";
import MobileMenu from "./mobileMenu";
import "./style.scss";

function BuyerNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024);

  const handleResize = () => setIsMobileView(window.innerWidth <= 1024);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/category" },
    { name: "Deals", path: "/deals" },
    { name: "Reviews", path: "/reviews" },
    { name: "Return & Refund", path: "/return" },
  ];

  return (
    <Navbar className="custom-navbar">
      <Container fluid>
        {!isMobileView && (
          <div className="d-flex justify-content-between align-items-center w-100">
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="Giftbox Logo" />
            </Navbar.Brand>

            <div className="desktop-nav d-flex align-items-center ms-auto">
              <Nav className="me-4">
                {navLinks.map((link) => (
                  <Nav.Link as={Link} to={link.path} key={link.name}>
                    {link.name}
                  </Nav.Link>
                ))}
              </Nav>

              <Form className="search-form me-3 d-flex align-items-center">
                <Form.Control
                  type="search"
                  placeholder="Search gift boxes..."
                  className="rounded-pill"
                />
              </Form>

              <div className="navbar-icons d-flex align-items-center gap-3">
                <FaCartShopping
                  size={22}
                  className="icon hover-effect"
                  onClick={() => navigate("/cart")}
                />
                <Dropdown align="end">
                  <Dropdown.Toggle
                    as="button"
                    id="dropdown-custom-components"
                    aria-label="User menu"
                    className="user-dropdown-toggle icon hover-effect"
                  >
                    <IoIosContact size={22} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {user ? (
                      <Dropdown.Item onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    ) : (
                      <Dropdown.Item onClick={() => navigate("/login")}>
                        Login
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        )}

        {/* Mobile view ≤425px */}
        {isMobileView && (
          <div className="row align-items-center w-100 mt-2">
            {/* Logo */}
            <div className="col-12">
              <Navbar.Brand as={Link} to="/">
                <img src={logo} alt="Giftbox Logo" className="img-fluid" />
              </Navbar.Brand>
            </div>

            {/* Search */}
            <div className="col-8 mt-2">
              <Form className="search-form d-flex w-100">
                <Form.Control
                  type="search"
                  placeholder="Search gift boxes..."
                  className="rounded-pill"
                />
              </Form>
            </div>

            <div className="col-4 d-flex justify-content-end align-items-center gap-2 mt-2">
              <FaCartShopping
                size={22}
                className="icon hover-effect"
                onClick={() => navigate("/cart")}
              />
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
              </div>
            </div>

            {/* Mobile sliding menu */}
            <MobileMenu
              isOpen={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              navLinks={navLinks}
              user={user}
              handleLogout={handleLogout}
            />
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default BuyerNavbar;
