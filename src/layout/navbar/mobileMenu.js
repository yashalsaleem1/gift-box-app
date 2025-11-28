// MobileMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

function MobileMenu({ isOpen, onClose, navLinks, user, handleLogout }) {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="mobile-menu-header">
        <FaXmark size={24} onClick={onClose} />
      </div>

      <ul className="mobile-menu-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path} onClick={onClose}>
              {link.name}
            </Link>
          </li>
        ))}

        {user ? (
          <li>
            <button
              className="btn btn-link p-0"
              onClick={() => {
                handleLogout();
                onClose();
              }}
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login" onClick={onClose}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default MobileMenu;
