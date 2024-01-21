import {Link} from "react-router-dom"
import "./Navbar.css"

export default function Navbar(){
    return (
        <div className="navbar">
            <div >
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/projects">Selected Projects</Link>
            </div>
        </div>
    );
}