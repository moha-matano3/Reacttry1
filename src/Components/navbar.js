import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className ="Navbar">
            <h1> Flying In Kenyan Airspace! </h1>
            <div className = "Links">
                <Link to = "/"> Home </Link>
                <Link to = "/Create"> New Blog </Link> 
            </div>
        </div>
    );
}
 
export default Navbar;