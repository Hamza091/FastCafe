import './nav.css';
import {Link} from 'react-router-dom';
import { RootState } from '../../redux/store';
import {useSelector} from 'react-redux'

function Nav() {
    const loginCredentials = useSelector((state:RootState) => state.LoginReducer)
    return (
        <div className="nav-container">
            <div className="nav-logo">FASTCafe</div>
               
               {loginCredentials.admin?
                    
                    <div className="nav-links">
                        <Link to="/" className="link"><p >Home</p></Link>
                        <a href="/" className="a-link">Logout</a>
                    </div>
                    
                    :
                    
                    <div className="nav-links">
                        <Link to="/" className="link"><p >Home</p></Link>
                        <Link to="/items" className="link"><p >Items</p></Link>
                        <Link to="/orders" className="link"><p >Orders</p></Link>
                        <a href="/" className="a-link">Logout</a>       
                    </div>
                }
                
        </div>
    )
}

export default Nav
