import './login.css'
import {useState} from 'react'
import axios from 'axios'

function Login() {
    
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [admin,setAdmin] = useState<boolean>(false)

    async function handleLogin(e:any){
        e.preventDefault()
        const isChecked:any=document.querySelector('.chkbx')
        setAdmin(isChecked.checked)
        const loginCredentials = JSON.stringify({email,password,admin})
        const success:any = await axios.get('/api/login',{
            params:loginCredentials
        })
        console.log(success.data.success)

    }

    return (
        <div className="main">
            <p className="sign" >Sign in</p>
            <form className="form1">
                <input className="un " type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input className="un" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <div className="login">
                <button className="submit" onClick={(e)=>handleLogin(e)}>Sign in</button>
                <div className="checkbox">
                    <input type="checkbox" className="chkbx"/>
                    Login as admin
                </div>
                </div>
            </form>
        </div>
        )
    }
    
    export default Login
    