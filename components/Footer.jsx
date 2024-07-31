import download from '../Assets/download.jpeg';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Footer.css';
const Footer=()=>{
    return(
    <div className="footer">
        <div className="footer-item">
            <img src={download}/>
            <p>OrganicClub</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <FaInstagram  className="yeah"/>
             <FaFacebook className="yeah"/>
             <FaTwitter className="yeah"/>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @2024 - All Rights Reserved</p>
            </div> 
           
    </div>
    )
}
export default Footer