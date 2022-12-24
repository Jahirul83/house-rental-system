import { MenuItems } from "./MenuItems"
import React, { Component } from "react";
import './Navbar.css';
import { Button } from "../Button";
import { Link } from "react-router-dom";



class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })

    }
    render() {

        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <a href="/" className="logo"> <i class="fa-solid fa-house"></i>Rent</a>
                </h1>
                <div className="manu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
                </div>
                <ui className={this.state.clicked ? "nav-menu active" : "nav-manu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    }
                    )}

                </ui>
                <Link to="/Login">
                    <Button>Login</Button>
                </Link>
                <p className="navebutton"></p>
                <Link to="/SignUp">
                    <Button>Sign Up</Button>
                </Link>
            </nav>
        )
    }
}

export default Navbar


// import React from 'react';
// import { Container, Nav, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
              
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
// };

// export default Navbar;
