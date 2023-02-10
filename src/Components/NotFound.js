import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h2> Not Found </h2>
            <p> Lost in the Skys? Please go back to your flight path ;-) </p>
            <Link to = '/'> Click here to go back to Aerodrome... </Link>
        </div>
     );
}
 
export default NotFound;                                                