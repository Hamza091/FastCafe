import './adminhome.css';

import {useState,useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'

import {AddCafetarianAction} from '../../redux/actions/AddCafetarianAction'
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store';
import { Icafetarian } from '../../redux/Interface/Cafetarian';
import { UpdateCafetarianAction } from '../../redux/actions/UpdateCafetarianAction';
import {DeleteCafetarianAction} from '../../redux/actions/DeleteCafetarianAction'
import {RetrieveCafetarianAction} from '../../redux/actions/RetrieveCafetarianAction'

function Cafetarian() {

    const [fname, setFname] = useState<string>('')
    const [lname, setLname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [salary, setSalary] = useState<number>(0)
    const [dob,setDob] = useState<string>('')
    const [btn,setBtn] = useState<string>("Add Cafetarian") 

    const dispatch = useDispatch()
    const Cafetarians = useSelector((state:RootState) => state.CafetarianReducer)
    const admin = useSelector((state:RootState)=>state.LoginReducer)


    useEffect(() => {
        RetrieveItems()
    }, [])

    async function RetrieveItems(){
        
        const cafetarians:any = await axios.get('/api/Cafetarian/retrieveCafetarian')
        dispatch(RetrieveCafetarianAction(cafetarians.data[0]))
    
    }

    const ChangeItemDiv = (state:string) =>{
        let itmDiv:any = document.querySelector('.addItems')
        itmDiv.style.display = state
    }
    
    function clean(){
            setFname("")
            setLname("")
            setEmail("")
            setPassword("")
            setSalary(0)
            setDob("")
    }

    

    async function AddCafetarian(){
         
        setBtn("Add Cafetarian")
        const hire_date = new Date()
        const registered_by = admin.email
        const cafetarian = JSON.stringify({fname,lname,email,password,salary,dob,hire_date,registered_by})

        const isSuccess:any = await axios.post('/api/Cafetarian/addCafetarian',{cafetarian})
        
        // data[0] has item data , data[1] has success status i.e true,false
        
        if(isSuccess.data[1].success){
            console.log(isSuccess.data[0])
            dispatch(AddCafetarianAction(isSuccess.data[0]))
            ChangeItemDiv('none')
            alert('Cafetarian Added...')
            clean()
        }
        else{
            alert('Invalid info....')
        }
    } 

    function HandleAddCafetarian(){
            setBtn("Add Cafetarian")
            setFname("")
            setLname("")
            setDob("")
            setPassword("")
            setEmail("")
            setSalary(0)
            ChangeItemDiv('block')
    }
    
    function HandleUpdateCafetarian(cafetarian:Icafetarian){
            
            setBtn("Update Cafetarian")
            setFname(cafetarian.fname)
            setLname(cafetarian.lname)
            setDob(cafetarian.dob)
            setPassword(cafetarian.password)
            setEmail(cafetarian.email)
            setSalary(cafetarian.salary)
            ChangeItemDiv('block')

    }

    async function UpdateCafetarian(){

        const cafetarian= JSON.stringify({fname,lname,email,password,salary,dob})
        const res:any = await axios.put('/api/Cafetarian/updateCafetarian',{cafetarian})
        
        if(res.data[1].success){
            
            dispatch(UpdateCafetarianAction(res.data[0]))
            alert('Cafetarian Updated...')
            
        }
        else{
            alert('Invalid Input...')
        }
        ChangeItemDiv('none')
        clean()
        setBtn("Add Cafetarian")
    }

    async function DeleteCafetarian(email:string){
        const cafetarian = JSON.stringify({email})
        const res:any = await axios.delete('/api/Cafetarian/deleteCafetarian',{params:{cafetarian}})
        if(res.data[1].success){
            
            dispatch(DeleteCafetarianAction(email))
            alert('Cafetarian Deleted...')
        }
        else{
            alert('Invalid Input...')
        }

    }




    return (
        <div className="customer-main">
            <div className="contents">
                <button className="btn btn-success btn-lg btn-txt" onClick={()=>HandleAddCafetarian()}>Add Cafetarian</button>
            
            <div className="head">
                Cafetarians
            </div>
            <table id="customers">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Salary</th>
                    <th>DOB</th>
                    <th>Actions</th>
                </tr>
                {
                    Cafetarians.map(caf=><tr>
                        <td>{caf.fname}</td>
                        <td>{caf.lname}</td>
                        <td>{caf.email}</td>
                        <td>{caf.password}</td>
                        <td>{caf.salary}</td>
                        <td>{caf.dob}</td>
                        <td>
                            <div className="btn-container">
                                <button className="btn btn-primary btn-lg btn-wid" onClick={()=>HandleUpdateCafetarian(caf)}>Update</button>
                                <button className="btn btn-danger btn-lg btn-wid" onClick={()=>DeleteCafetarian(caf.email)}>Delete</button>
                            </div>
                        </td>
                    </tr>)
                }
            </table>
        </div>

            
        <div className="addItems">
                <div className="cross" onClick={()=>ChangeItemDiv("none")}>
                    X
                </div>            
                <div className="itm-details">
                <div className="itm-lbl">
                    <label >First Name: </label>
                    <input className="itm-input" value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
                </div>
                <div className="itm-lbl">
                    <label >Last Name: </label>
                    <input  className="itm-input" value={lname}  onChange={(e)=>{setLname(e.target.value)}}/>
                </div>
                <div className="itm-lbl">
                    <label >Email: </label>
                    <input  className="itm-input" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="itm-lbl">
                    <label >Salary: </label>
                    <input  className="itm-input" value={salary} onChange={(e)=>{setSalary(parseInt(e.target.value))}}/>
                </div>
                <div className="itm-lbl">
                    <label >Password: </label>
                    <input className="itm-input" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="itm-lbl">
                    <label>Date Of Birth: </label>
                    <input className="itm-input" value={dob} onChange={(e)=>{setDob(e.target.value)}}/>
                </div>

                <div className="btn-md">
                    {
                        btn==="Add Cafetarian"?
                        <button className="bn" onClick={AddCafetarian}>Add Cafetarian</button>
                        :
                        <button className="bn" onClick={UpdateCafetarian}>Update Cafetarian</button>
                    }
                </div>
            
            </div>
        
        </div>
        
        </div>
    )
}

export default Cafetarian



