import React from "react";
import '../styles/Navbar.css';

// The user will be able to navigate the portfolio using navigation tabs at the top of the page

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Work"
          onClick={() => handlePageChange("Work")}
          className={currentPage === "Work" ? "nav-link active" : "nav-link"}
        >
          My Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
