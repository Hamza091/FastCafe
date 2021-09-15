import './nav.css';

function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-logo">FASTCafe</div>
            <div className="nav-links">
                <p className="link">Home</p>
                <p className="link">Items</p>
                <p className="link">Orders</p>
                {/* login logout */}
            </div>            
        </div>
    )
}

export default Nav
