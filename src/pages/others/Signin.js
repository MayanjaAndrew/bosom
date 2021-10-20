import React from 'react'
import "./signin.css";
import "../bootstrap.css";
import Logo from '../VIP/ASEI-3D-Logo.png'


function Signin() {
    return (
   
    <section class="signin__section">
 <div className="container">
 
 <div class="logos">
 <div className="signin-image">
     <img src={Logo}></img>
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
  <button type="submit" className="button">SignIn</button>
  </form>

  <p class="signin-p">--Or sign in with--</p>

  <div class="signin-opts">
   <div class="signin-opt">Basicc</div>
   <div  class="signin-opt-middle">Basic</div>
   <div  class="signin-opt">Basic</div>
  </div>
  <div class="signup-set">Don't have an account?Sign Up</div>
 </div>
</section>
    )
}

export default Signin

