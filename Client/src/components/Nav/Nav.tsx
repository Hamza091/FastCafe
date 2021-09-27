import './nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-logo">FASTCafe</div>
            <div className="nav-links">
                <Link to="/home" className="link"><p >Home</p></Link>
                <Link to="/items" className="link"><p >Items</p></Link>
                <Link to="/" className="link"><p >Orders</p></Link>
                {/* login logout */}
            </div>            
        </div>
    )
}

export default Nav
