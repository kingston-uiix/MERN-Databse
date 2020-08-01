import React from 'react'
import {Link} from "react-router-dom";


const Navbar = () => {
    return (

<nav className="navbar">
  
  <div className="contain">
    
  <Link to="/"><h1 className="logo"><a href="#"><span><i class="fa fa-gamepad" aria-hidden="true"></i></span> GS</a></h1></Link>
    <ul className="nav nav-right">
    <Link to="/add-article"> <li className="big"><a href="#">Review</a></li></Link>

    </ul>
  </div>
  
</nav>






    )
}

export default Navbar;


//<li><Link to="/add-article">Add Article</Link></li>
//<Link to="/"> <h1><span className="highlight"><i className="fa fa-gamepad" aria-hidden="true"></i></span> GS</h1></Link>