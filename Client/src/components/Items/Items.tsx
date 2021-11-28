import {useState,useEffect} from 'react'
import axios from 'axios'
import './items.css';
import {useDispatch} from 'react-redux'
import {RetrieveItemsAction} from '../../redux/actions/RetrieveItemsAction'
import {AddItemAction} from '../../redux/actions/AddItemAction'
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store';
import { Iitem } from '../../redux/Interface/Item';
import { UpdateItemAction } from '../../redux/actions/UpdateItemAction';
import {DeleteItemAction} from '../../redux/actions/DeleteItemAction'

function Items() {
    
    const [iname, setIname] = useState<string>('')
    const [price,setPrice] = useState<number>(0)
    const [available_qty,setAvailableQty] = useState<number>(0)
    const [item_id,setItemId] = useState<number>()
    const [btn,setBtn] = useState<string>("Add Item") 

    //category [to be implemented]
    const dispatch = useDispatch()
    const Items = useSelector((state:RootState) => state.ItemReducer)
    
    useEffect(() => {
        RetrieveItems()
    }, [])
    
    const ChangeItemDiv = (state:string) =>{
        let itmDiv:any = document.querySelector('.addItems')
        itmDiv.style.display = state
    }
    
    function clean(){
            setIname("")
            setPrice(0)
            setAvailableQty(0)
    }

    async function RetrieveItems(){
        
        const items:any = await axios.get('/api/Item/retrieveItem')
        console.log(items.data)
        dispatch(RetrieveItemsAction(items.data[0]))
        console.log(Items)
    }

    async function AddItem(){
         
        setBtn("Add Item")
        const item = JSON.stringify({iname,price,available_qty})

        const isSuccess:any = await axios.post('/api/Item/addItem',{item})
        
        // data[0] has item data , data[1] has success status i.e true,false
        
        if(isSuccess.data[1].success){
            console.log(isSuccess.data[0])
            dispatch(AddItemAction(isSuccess.data[0]))
            ChangeItemDiv('none')
            alert('Item Added...')
            clean()
        }
        else{
            alert('Invalid item info....')
        }
    } 

    function HandleUpdateItem(item:Iitem){
            
            setBtn("Update Item")
            setIname(item.iname)
            setPrice(item.price)
            setItemId(item.item_id)
            setAvailableQty(item.available_qty)
            ChangeItemDiv('block')

    }

    async function UpdateItem(){
        const item= JSON.stringify({iname,item_id,price,available_qty})
        const res:any = await axios.put('/api/Item/updateItem',{item})
        
        if(res.data[1].success){
            
            dispatch(UpdateItemAction(res.data[0]))
            clean()
            ChangeItemDiv('none')
            alert('Item Updated...')

        }
        else{
            alert('Invalid Input...')
        }
    }

    async function DeleteItem(item_id:number){
        const item = JSON.stringify({item_id})
        const res:any = await axios.delete('/api/Item/deleteItem',{params:{item}})
        if(res.data[1].success){
            
            dispatch(DeleteItemAction(item_id))
            alert('Item Deleted...')
        }
        else{
            alert('Invalid Item...')
        }

    }

    return (
        <div className="customer-main">
            
            <div className="contents">
                <button className="btn btn-success btn-lg btn-txt" onClick={()=>ChangeItemDiv("block")}>Add Item</button>
            
            <div className="head">
                Items   
            </div>
            <div className="scrollist">
                <table id="customers">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    {
                        Items.map((item)=><tr>
                            <td>{item.item_id}</td>
                            <td>{item.iname}</td>
                            <td>{item.price}</td>
                            <td>{item.available_qty}</td>
                                {/* category to be implemented */}
                            <td>xyz</td> 
                            <td>
                            <div className="btn-container">
                                <button className="btn btn-primary btn-lg btn-wid" onClick={()=>HandleUpdateItem(item)}>Update</button>
                                <button className="btn btn-danger btn-lg btn-wid" onClick={()=>DeleteItem(item.item_id)}>Delete</button>
                            </div>
                        </td>
                        </tr>)
                    }
                    
                </table>
            </div>
        </div>



            <div className="addItems">
                <div className="cross" onClick={()=>ChangeItemDiv("none")}>
                    X
                </div>            
                <div className="itm-details">
                <div className="itm-lbl">
                    <label >Name: </label>
                    <input className="itm-input" value={iname} onChange={(e)=>{setIname(e.target.value)}}/>
                </div>
                <div className="itm-lbl">
                    <label >Price: </label>
                    <input type="number" className="itm-input" value={price}  onChange={(e)=>{setPrice(parseInt(e.target.value))}}/>
                </div>
                <div className="itm-lbl">
                    <label >Quantity: </label>
                    <input type="number" className="itm-input" value={available_qty} onChange={(e)=>{setAvailableQty(parseInt(e.target.value))}}/>
                </div>
                {/* tobe changed */}
                <div className="itm-lbl">
                    <label >Category: </label>
                    <input className="itm-input"/>
                </div>

                <div className="btn-md">
                    {
                        btn==="Add Item"?
                        <button className="bn" onClick={AddItem}>Add Item</button>
                        :
                        <button className="bn" onClick={UpdateItem}>Update Item</button>
                    }
                </div>
            
            </div>

            </div>

            
        </div>
    )
}

export default Items
