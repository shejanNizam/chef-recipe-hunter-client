/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <h1 className="text-info">
          Chef<span style={{ color: "orange" }}>Savvy</span>
        </h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" ms-4 me-auto">
            <Link to="/" className="items">
              <li>Home</li>
            </Link>
            <Link to="/blogs" className="items">
              <li>Blogs</li>
            </Link>
            <Link to="/about" className="items">
              <li>About</li>
            </Link>
          </Nav>
          <Nav>
            {user && <FaUserAlt style={{ fontSize: "2rem" }} />}

            {user ? (
              <Button onClick={handleLogOut} variant="secondary">
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
