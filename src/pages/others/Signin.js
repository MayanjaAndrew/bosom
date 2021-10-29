import React from 'react'
import "./signin.css";
import "../bootstrap.css";
import Logo from '../media/Real MyBosom Logo 2nd Draft Trans.png'
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";



function Signin() {
  const handler=()=>{

  }
    return (
   
    <section class="signin__section">
 <Container id="sigin_container">
   <div class="logos">
 <div className="signin-image">
     <img src={Logo} alt="logo"></img>
 </div> 
 </div>
 <h4 class="h4">Login to your Account</h4>

   <form>
   
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Email" id="email"/>
   </div>
   <div className="form-group">
    <input type="password" className="form-control" placeholder="Password" id="pwd"/>
  </div>
  <div className="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <Link to="/classintro"><Button type="submit" className="button" id="siginin-button">SignIn</Button></Link>

  </form>

  <p class="signin-p">--Or sign in with--</p>

  <div class="signin-opts">
   <div class="signin-opt"></div>
  </div>
  <div class="signup-set">Don't have an account?<Link to="/Register">Sign Up</Link></div>
 </Container>
</section>
    )
}

export default Signin

