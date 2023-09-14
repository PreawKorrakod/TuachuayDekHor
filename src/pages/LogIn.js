import "./LogIn.css";
import { Link } from "react-router-dom";
const LogIn = () => {
    return (
        <div className="Login">
            <div className="DekHor">DekHor</div>
            <div className="New-to-DekHor">New to DekHor?</div>
            <div className="Sign-Up">Sign Up</div>
            <div className="input-block">
                <input id="username" type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
            </div>
            <div className="remember">Remember Me</div>
            <div className="Forget-password">Forget password</div>
            <Link to={"/home"}>LOGIN</Link>
        </div>
    );
};

export default LogIn;