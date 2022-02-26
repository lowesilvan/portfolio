import { NavLink } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="lost-body">
            <div className="lost-content">
                <h1>Error 404</h1>
                <h4 className="my-2">UH OH! You're lost!</h4>
                <h5>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</h5>
                <NavLink to="/" className="btn btn-secondary my-3">Back to homepage</NavLink>
            </div>
        </div>
    );
}
 
export default NotFound;