import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { RootState } from '../../redux/store'
import {RetrieveItemsAction} from '../../redux/actions/RetrieveItemsAction'
import {useDispatch} from 'react-redux'
import './home.css';
import { RetrieveCategoryAction } from '../../redux/actions/RetrieveCategoryAction'

function Home() {

    const dispatch = useDispatch()
    const Items = useSelector((state:RootState) => state.ItemReducer)
    const category = useSelector((state:RootState)=>state.CategoryReducer)
    
    useEffect(() => {
        RetrieveItems()
        RetrieveCategory()
    }, [])

    function mapCat(itm:any){
        for(let i=0; i<category.length; i++){
            if(itm.cat_id===category[i].cat_id){
                return category[i].cat_name
            }
        }
    }

    async function RetrieveCategory(){
        const category:any = await axios.get('/api/Item/retrieveCategory')
  
        dispatch(RetrieveCategoryAction(category.data[0]))
      
    }

    async function RetrieveItems(){
        
        const items:any = await axios.get('/api/Item/retrieveItem')
        console.log(items.data)
        dispatch(RetrieveItemsAction(items.data[0]))
        console.log(Items)
    }

    return (
        <div className="contents">
        <div className="customer-main">
                <table id="customers">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                    </tr>
                    {
                        Items.map((item)=><tr className={item.available_qty<5?"displayRed":"normal"}>
                            <td>{item.item_id}</td>
                            <td>{item.iname}</td>
                            <td>{item.price}</td>
                            <td >{item.available_qty}</td>
                            <td>
                                <select >
                                    {
                                        item.item_category.map(itm=><option>{mapCat(itm)}</option>)
                                        
                                    }
                                    
                                </select>
                            </td>
                            
                        </tr>)
                    }
                    
                </table>
            </div>
        </div>
    )
}

export default Home
