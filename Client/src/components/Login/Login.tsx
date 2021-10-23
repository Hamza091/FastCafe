import './login.css'
import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {LoginAction} from '../../redux/actions/LoginAction'

function Login() {
    
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const dispatch = useDispatch()

    async function handleLogin(e:any){
        
        e.preventDefault()
        const isChecked:any=document.querySelector('.chkbx')
        const admin = isChecked.checked
        const loginCredentials = JSON.stringify({email,password,admin})

        const isSuccess:any = await axios.get('/api/login',{
            params:loginCredentials
        })
        
        if(isSuccess.data.success){
            dispatch(LoginAction(isSuccess.data))
        }
        else{
            alert('Invalid Credentials...')
        }
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
    