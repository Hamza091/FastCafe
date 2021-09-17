import './login.css'
import {useState} from 'react'

function Login() {
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    return (
        <div className="main">
            <p className="sign" >Sign in</p>
            <form className="form1">
                <input className="un " type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input className="un" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className="submit" >Sign in</button> 
            </form>
        </div>
        )
    }
    
    export default Login
    