import React from "react";
import './navbar.css';
import {Link,NavLink} from "react-router-dom";

class Nav extends React.Component{

    dark=()=>{
         document.getElementById("nav-toggle").checked=false;

    }
    render(){
        return(
    <>
    <header id="header">
    <div class="closure">
    <div class="logos"><h1 class="logo">BOSOM</h1></div>
    </div>
        <input type="checkbox" id="nav-toggle" class="nav-toggle"/>
        <nav id="nav">

            <ul>
            <li><NavLink to="/" onClick={()=>this.dark()} class="link" id="link">
            Account
            </NavLink>
            </li>
            <li><NavLink to="/" onClick={()=>this.dark()} id="link" class="link">
            Menu
            </NavLink>
            </li>
            <li><NavLink to="/" onClick={()=>this.dark()} class="link" id="link">
            RideHistory
            </NavLink>
            </li>
            <li><Link to="/" onClick={()=>this.dark()} class="link" id="link">Settings</Link></li>
            <li><Link to="/" onClick={()=>this.dark()} class="link" id="link">Signup to drive</Link></li>
            </ul>

        </nav>
        <label for="nav-toggle" class="nav-toggle-label"><span></span></label>
    </header>
    </>
        );
    }
    
}

export default Nav;