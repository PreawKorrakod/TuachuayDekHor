import "./Nav.css"
import Poplogin from "../component/loginPop";
import { Link } from "react-router-dom";

function NavHead() {
    return(
        <div className="NavBar">
            <header>
               <h2 className="Logo">DekHor</h2> 
               <nav className="Navigation">
                <Link to="/writeblog" className="write-blog">Writing</Link>
                <Link to="/contact" className="contact-us">Contact</Link>
                {/* <img id="noti" src="/notifications-outline.svg" alt="" /> */}
                <Poplogin></Poplogin>
               </nav>
            </header>
        </div>

    );
};

export default NavHead;