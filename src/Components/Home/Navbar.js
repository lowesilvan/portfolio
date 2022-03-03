import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand mx-3" href="/Portfolio"><span className="dot align-top mr-3">do</span>Lowe Mbonda</a>
            <a href className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#toggleMobileMenu" aria-controls="#toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon "></span> */}
                <span></span>
                <span></span>
                <span></span>
            </a>
            <div className="collapse navbar-collapse" id="toggleMobileMenu">
                <ul className="navbar-nav ml-auto text-center">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">ABOUT ME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link">PROJECTS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/resume" className="nav-link">RESUME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;