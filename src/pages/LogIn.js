import "./LogIn.css";
import { Link } from "react-router-dom";
const LogIn = () => {
    return (
        <div className="Login">
            <div className="container">
                <h1>DekHor</h1>
                <span>
                    New to DekHor?
                    <Link to="/signup" id="signup">Sign Up</Link>
                </span>
                <div className="input-block">
                    <input id="username" type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="btn-group">
                    <span><input type="checkbox" name="remember" id="remember" />Remember Me</span>
                    <Link>Forget password</Link>
                </div>
                <Link to="/home" className="button">LOGIN</Link>
            </div>
        </div>
    );
};

export default LogIn;