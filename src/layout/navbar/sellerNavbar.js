import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/navbar_logo.png";
import MobileMenu from "./mobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/authSelector";
import { logout } from "../../redux/reducers";
import { FaMagnifyingGlass, FaBars, FaXmark } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import "./style.scss";

function SellerNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const navLinks = [
    { name: "Dashboard", path: "/seller" },
    { name: "My Products", path: "/seller/products" },
    { name: "Stock Management", path: "/seller/stock" },
    { name: "Reviews", path: "/review" },
  ];

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/seller">
          <img src={logo} alt="Giftbox Logo" />
        </Navbar.Brand>

        {/* Desktop links */}
        <Navbar.Collapse className="d-none d-lg-flex justify-content-between">
          <Nav navbarScroll>
            {navLinks.map((link) => (
              <Nav.Link as={Link} to={link.path} key={link.name}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>

          <div className="navbar-icons d-none d-lg-flex">
            <IoIosContact onClick={() => navigate("/login")} />
          </div>
        </Navbar.Collapse>

        {/* Mobile toggle button */}
        <div
          className="d-lg-none ms-auto hide-above-1024"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
        </div>

        {/* Mobile menu */}
        <div className="d-lg-none ">
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            navLinks={navLinks}
            user={user}
            handleLogout={handleLogout}
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default SellerNavbar;
