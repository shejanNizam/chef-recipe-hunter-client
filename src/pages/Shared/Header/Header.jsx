import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
// import ReactTooltip from "react-tooltip";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

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
            <Link
              to="/"
              className={`items ${activeLink === "/" ? "active" : ""}`}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/blogs"
              className={`items ${activeLink === "/blogs" ? "active" : ""}`}
            >
              <li>Blogs</li>
            </Link>
            <Link
              to="/about"
              className={`items ${activeLink === "/about" ? "active" : ""}`}
            >
              <li>About</li>
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
                  data-tip="Tooltip text"
                ></Image>
                {/* <ReactTooltip effect="solid" /> */}
              </div>
            ) : (
              <FaUserAlt style={{ fontSize: "2rem" }} />
            )}
            <Button variant="outline-info">
              {user ? (
                <Link onClick={handleLogOut}>Logout</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
