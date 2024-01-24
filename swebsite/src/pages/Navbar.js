import {Link} from "react-router-dom"
import "./Navbar.css"

export default function Navbar(){
    return (
        <div className="navbar">
            <div >
                <Link className="navtext" to="/">Home</Link>
            </div>
            <div>
                <Link className="navtext" to="/projects">Selected Projects</Link>
            </div>
        </div>
    );
}