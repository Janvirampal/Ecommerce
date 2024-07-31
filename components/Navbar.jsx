import  { useState } from "react";
import './Navbar.css';
import { BsCart4 } from "react-icons/bs";
import download from '../Assets/download.jpeg';
import { Link } from "react-router-dom";

const Navbar=()=>{
    const [menu,setMenu]=useState("Home");
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={download}></img>
                <p>OrganicClub</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>setMenu('Home')}><Link style={{textDecoration:'none', color:'white'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu('Fruits')}><Link  style={{textDecoration:'none', color:'white'}}to='/fruits'>Fruits</Link>{menu==="Fruits"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu('Vegetables')}><Link style={{textDecoration:'none', color:'white'}}to='/vegetables'>Vegetables</Link>{menu==="Vegetables"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu('Fresh Nuts')}><Link style={{textDecoration:'none', color:'white'}}to='/freshnuts'> Fresh Nuts</Link>{menu==="Fresh Nuts"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'style={{textDecoration:'none', color:'white'}}><button>Login</button></Link>
                <Link to='/cart'style={{textDecoration:'none', color:'white'}}><BsCart4 className="cart"/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
export default Navbar