import { MenuItems } from "./MenuItems"
import React, { Component } from "react";
import './Navbar.css';
import { Button } from "../Button";
class Navbar extends Component {
    state={ clicked: false }

    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }



    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <i class="fa-solid fa-house"></i>Rent
                </h1>
                <div className="manu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-x":"fa-solid fa-bars"}></i>
                </div>
                <ui className={this.state.clicked ? "nav-menu active" : "nav-manu"}>
                    {MenuItems.map((item,index)=>
                    {
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
                <Button >Login</Button>
                <p className="navebutton"></p>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}
export default Navbar
