import './login.css'

function Login() {
    return (
        <div className="main">
            <p className="sign" >Sign in</p>
            <form className="form1">
                <input className="un " type="text" placeholder="Email" />
                <input className="un" type="password" placeholder="Password" />
                <button className="submit" >Sign in</button> 
            </form>
        </div>
        )
    }
    
    export default Login
    