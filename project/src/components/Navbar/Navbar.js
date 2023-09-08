import react from "react";
import { Link} from "react-router-dom";
import'./Navbar.css'
function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-collapse collapse">
                    <ul className="navbar-list">
                        <li className="navbar-item" >
                            <Link className="nav-link" to="/">
                                <button className="btn btn-outline-success btn-sm">
                                    <span className="login-text" style={{fontWeight:"bold"}}>Home</span>
                                </button>
                            </Link>
                        </li>
                        {/* <li className="navbar-item" >
                            <Link className="nav-link" to="/login">
                                <button className="btn btn-outline-success btn-sm">
                                    <span className="login-text" style={{fontWeight:"bold"}}>Login</span>
                                </button>
                            </Link>
                        </li> */}
                        <li className="navbar-item" >
                            <Link className="nav-link" to="/SignUp">
                                <button className="btn btn-outline-success btn-sm">
                                    <span className="login-text" style={{fontWeight:"bold"}}>SignUp</span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;