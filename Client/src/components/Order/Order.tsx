import {useEffect,useState} from 'react'
import './order.css'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { RootState } from '../../redux/store'
import { RetrieveOrderAction } from '../../redux/actions/RetrieveOrderAction'
import { UpdateOrderStatusAction } from '../../redux/actions/UpdateOrderStatusAction'
import { IOrder } from '../../redux/Interface/Order'
import socketIOClient from "socket.io-client";
import {RetrieveItemsAction} from '../../redux/actions/RetrieveItemsAction'
const ENDPOINT = "https://fastcafe091.herokuapp.com/";
// const ENDPOINT = "http://localhost:8000/";


function Order() {
    
    const dispatch = useDispatch()
    const orders:Array<IOrder>  = useSelector((state:RootState)=>state.OrderReducer)
    // var showOrders:Array<IOrder> = orders
    const [showOrders, setshowOrders] = useState<Array<IOrder>>(orders)
    // F failed
    // I in progress
    // C Completed
    // R ready


    useEffect(() => {
        RetrieveOrder()
        const socket = socketIOClient(ENDPOINT);
        socket.on("Order",(orders)=>HandleOrderChange(orders))
        // socket.on("Order",(orders)=>console.log(orders))

    }, [])

    async function HandleOrderChange(orders:Array<IOrder>){
            // console.log(orders)
            dispatch(RetrieveOrderAction(orders))
            setshowOrders(orders)

            //Order is placed so items quantity must also update
        
            const items:any = await axios.get('/api/Item/retrieveItem')
            dispatch(RetrieveItemsAction(items.data[0]))
            
    }
    
    async function RetrieveOrder(){
        const res:any = await axios.get('/api/Order/retrieveOrder')
        // console.log(res.data[0])
        dispatch(RetrieveOrderAction(res.data[0]))
        setshowOrders(res.data[0])
    }

    function findItemName(order:any,item:any){
        for(let i=0; i<order.item.length; i++){
            if(order.item[i].item_id===item.item_id){
                return order.item[i].iname
            }
        }
    }
   
    function ChangeOrderDisplay(status:any){
        if(status==="A"){
           setshowOrders(orders)
        }
        else{
            setshowOrders(orders.filter((order)=>order.status===status))     
        }
    }

    function convertDate(date:any){
        const d = new Date(date)
        // console.log(d.getTime)
        const dat =d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()
        return (dat)
    }

    async function ChangeOrderStatus(uorder:any,status:any){
        const order_id = uorder.order_id
        const order= JSON.stringify({order_id,status})
        const res:any = await axios.put('/api/Order/updateStatus',{order})
        if(res.data[1].success){
            const prevStatus = uorder.status
            uorder.status=status
            
            dispatch(UpdateOrderStatusAction(uorder))
            ChangeOrderDisplay(prevStatus)
        }
        else{
            alert("Invalid order....")
        }
    }


    return (
        <div className="order-container">
            <div className="select-container">
                <select className="select" onChange={(e)=>ChangeOrderDisplay(e.target.value)}>
                    <option value="A">All</option>
                    <option value="R">Ready</option>
                    <option value="C">Completed</option>
                    <option value="I">Pending</option>
                </select>
            </div>
            {
                showOrders.map(order=>(<div className="order-card">
                <div className="order-details">
                    
                    <div>
                        <span><b>Order Id: </b></span>
                        <span >{order.order_id}</span>
                    </div>
                    <div>
                        <span><b>Name: </b></span>
                        <span>{order.students?.first_name}</span>
                    </div>
                    <div>
                        <span><b>Description: </b></span>
                        <span>{order.description}</span>
                    </div>
                    <div>
                        <span><b>Total Amount: </b></span>
                        <span>{order.total_price}</span>
                    </div>
                    <div>
                        <span><b>Start Date: </b></span>
                        <span>{convertDate(order.start_date)}</span>
                    </div>
                </div>
                {
                    order.order_items.map(itm=><div className="order-items">
                    <div>
                        <span><b>Item Name: </b></span> 
                        <span>{findItemName(order,itm)}</span>
                    </div>
                    <div>
                        <span><b>Quantity: </b></span>
                        <span>{itm.qty}</span>
                    </div>
                    <div>
                        <span><b>Price: </b></span>
                        <span>{itm.price}</span>
                    </div>
                    <br/>
                </div>)
                }
                {
                    order.status==='I'?
                    <div className="btn-container-order">
                        
                            <button className="btn btn-success btn-lg btn-wid" onClick={()=>{ChangeOrderStatus(order,"R")}}>Ready</button>
                            <button className="btn btn-primary btn-lg btn-wid" onClick={()=>{ChangeOrderStatus(order,"C")}}>Completed</button>
                        
                    </div>:order.status==='R'?<div className="btn-container-order">
                        <button className="btn btn-primary btn-lg btn-wid" onClick={()=>{ChangeOrderStatus(order,"C")}}>Completed</button>
                    <p className="completed-p">Order is Ready</p>
                    
                </div>:<p className="completed-p">Completed</p>
                    
                }
                
            </div>  
))
            }            
                    
        </div>
    )
}

export default Order
