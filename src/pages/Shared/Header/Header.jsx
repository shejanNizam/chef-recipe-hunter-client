/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
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
            <Link className="items">
              <>
                {user ? (
                  <Link onClick={handleLogOut}>Logout</Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </>
            </Link>
          </Nav>
          <Nav>
            {user?.photoURL ? (
              <div className="d-flex">
                <h3 style={{ color: "orange" }}>{user?.displayName}</h3>
                <Image
                  style={{ height: "40px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              </div>
            ) : (
              <FaUserAlt style={{ fontSize: "2rem" }} />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
