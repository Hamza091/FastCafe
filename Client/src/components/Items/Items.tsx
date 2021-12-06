import {useState,useEffect} from 'react'
import axios from 'axios'
import './items.css';
import {useDispatch} from 'react-redux'

import {AddItemAction} from '../../redux/actions/AddItemAction'
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store';
import { Iitem } from '../../redux/Interface/Item';
import { UpdateItemAction } from '../../redux/actions/UpdateItemAction';
import {DeleteItemAction} from '../../redux/actions/DeleteItemAction'
import Select from 'react-select'
import { AddCategory } from '../../redux/actions/AddCategoryAction';
import { Icategory } from '../../redux/Interface/Category';
import { matchPath } from 'react-router-dom';

function Items() {
    
    

    const [iname, setIname] = useState<string>('')
    const [price,setPrice] = useState<number>(0)
    const [available_qty,setAvailableQty] = useState<number>(0)
    const [item_id,setItemId] = useState<number>()
    const [btn,setBtn] = useState<string>("Add Item")
    const [catg,setCatg] = useState<any>([]) 
    
    const dispatch = useDispatch()
    const Items = useSelector((state:RootState) => state.ItemReducer)
    const category = useSelector((state:RootState)=>state.CategoryReducer)
 
    const ChangeItemDiv = (state:string) =>{
        let itmDiv:any = document.querySelector('.addItems')
        itmDiv.style.display = state
    }
    
    function clean(){
            setIname("")
            setPrice(0)
            setAvailableQty(0)
            setCatg([])
    }


    async function AddItem(){
         
        setBtn("Add Item")
        let item_category:Array<Icategory> = []
        for(let i=0; i<catg.length; i++){
            item_category = [...item_category,{"cat_id":catg[i].value,"cat_name":catg[i].label}]
        }
        const item = JSON.stringify({iname,price,available_qty,item_category})

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
            let itm:Array<any> = []
            console.log(item)
            let cat_name = null
            for(let i=0; i<item.item_category.length; i++){
                
                cat_name = category.map(itm=>item.item_category[i].cat_id===itm.cat_id?itm.cat_name:null)
                
                itm = [...itm,{"label":cat_name,"value":item.item_category[i].cat_id}]
            }
            console.log(itm)
            setCatg(itm)
            ChangeItemDiv('block')

    }
    
    

    async function UpdateItem(){

        let item_category:Array<Icategory> = []
        for(let i=0; i<catg.length; i++){
            item_category = [...item_category,{"cat_id":catg[i].value,"cat_name":catg[i].label}]
        }

        const item= JSON.stringify({iname,item_id,price,available_qty,item_category})
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

    function HandleAddItem (){
            setBtn("Add Item")
            setIname('')
            setPrice(0)
            setAvailableQty(0)
            ChangeItemDiv("block")
    }
    
  
    function mapCat(itm:any){
        for(let i=0; i<category.length; i++){
            if(itm.cat_id===category[i].cat_id){
                return category[i].cat_name
            }
        }
    }

    async function HandleAddCategory(){
        
        let cat_name:any = prompt("Category Name: ")
        if(cat_name){
            const category = JSON.stringify({cat_name})
            
            if(cat_name.length>0){
                const res:any = await axios.post('/api/Item/addCategory',{category})

                if(res.data[1].success){
                    alert('Category added...')
                    dispatch(AddCategory(res.data[0]))
                }
                else{
                    alert('Invalid category..')
                }
            }
            else{
                alert('Invalid Input')
            }
    }

    
    
    }
        
    return (
        <div className="customer-main">
            
            <div className="contents">
                <div className="top-btns">
                    <button className="btn btn-success btn-lg btn-txt" onClick={()=>HandleAddItem()}>Add Item</button>
                    <button className="btn btn-success btn-lg btn-txt" onClick={()=>HandleAddCategory()}>Add Category</button>
                </div>
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
                            <td>
                                <select >
                                    {
                                        item.item_category.map(itm=><option>{mapCat(itm)}</option>)
                                        
                                    }
                                    
                                </select>
                            </td>
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
                
                <div className="itm-lbl">
                     
                     <label >Category: </label>
                     <Select isMulti value={catg} onChange={(e)=>{setCatg(e)}} options={category.map(cat=>({"value":cat.cat_id,"label":cat.cat_name}))}></Select>
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
