import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config";
import "./Header.css";

const auth = getAuth(app);

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in state", currentUser);
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);

  const logout = () => {
    signOut(auth);
  };

  return (
    <Navbar className="p-3 header-design" bg="blue" expand="lg">
      <Container>
        <Navbar.Brand className="nav-logo">
          <a href="/" className="logo">
            {" "}
            <i class="fa-solid fa-house"></i>Rent
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto me-0 menu">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>

            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQ</Link>
            {user?.uid ? (
              <div>
                <Link to="/addrent">Add rent</Link>
                <Button onClick={logout} variant="primary">
                  Logout
                </Button>
              </div>


            ) : (
              <>
                <Link to="/Login">
                  <Button>Login</Button>
                </Link>
                <p className="navebutton"></p>
                <Link to="/SignUp">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
