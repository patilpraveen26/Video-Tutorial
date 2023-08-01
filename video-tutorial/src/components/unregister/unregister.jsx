import { Link } from "react-router-dom";

export function Unregister(){
    return(
        <div>
            <h2>Unable to find your Account</h2>
            <p><Link to="/register">Register</Link></p>
        </div>
    )
}