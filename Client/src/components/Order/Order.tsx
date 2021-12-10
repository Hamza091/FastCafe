import {useEffect} from 'react'
import './order.css'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { RootState } from '../../redux/store'
import { RetrieveOrderAction } from '../../redux/actions/RetrieveOrderAction'
import { IOrder } from '../../redux/Interface/Order'

function Order() {
    
    const dispatch = useDispatch()
    const orders:Array<IOrder>  = useSelector((state:RootState)=>state.OrderReducer)
    // F failed
    // I in progress
    // C Completed
    // R ready


    useEffect(() => {
        RetrieveOrder()
    }, [])
    
    async function RetrieveOrder(){
        const res:any = await axios.get('/api/Order/retrieveOrder')
        console.log(res.data[0])
        dispatch(RetrieveOrderAction(res.data[0]))
    }

    function findItemName(order:any,item:any){
        for(let i=0; i<order.item.length; i++){
            if(order.item[i].item_id===item.item_id){
                return order.item[i].iname
            }
        }
    }

    return (
        <div className="order-container">
            
            {
                orders.map(order=>(<div className="order-card">
                <div className="order-details">
                    
                    <div>
                        <span><b>Order Id: </b></span>
                        <span >{order.order_id}</span>
                    </div>
                    <div>
                        <span><b>Name: </b></span>
                        <span>{order.students.fname}</span>
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
                        <span><b>Status: </b></span>
                        <span>{order.status}</span>
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
                </div>)
                }
                    
            </div>  
))
            }            
            {/* <div className="order-card">
                <div className="order-details">
                    <div>
                        <span>Order Id: </span>
                        <span>1234</span>
                    </div>
                    <div>
                        <span>Name: </span>
                        <span>Hamza</span>
                    </div>
                    <div>
                        <span>Total Amount: </span>
                        <span>1234</span>
                    </div>
                    <div>
                        <span>Status: </span>
                        <span>Completed</span>
                    </div>
                </div>
                <div className="order-items">
                        <div>
                            <span>Item Name: </span>
                            <span>abc</span>
                        </div>
                        <div>
                            <span>Quantity: </span>
                            <span>1234</span>
                        </div>
                        <div>
                            <span>Price: </span>
                            <span>120</span>
                        </div>
                    </div>
                    
            </div> */}
        
        </div>
    )
}

export default Order
