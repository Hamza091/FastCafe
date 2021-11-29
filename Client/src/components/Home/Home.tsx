import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { RootState } from '../../redux/store'
import {RetrieveItemsAction} from '../../redux/actions/RetrieveItemsAction'
import {useDispatch} from 'react-redux'
import './home.css';

function Home() {

    const dispatch = useDispatch()
    const Items = useSelector((state:RootState) => state.ItemReducer)

    useEffect(() => {
        RetrieveItems()
    }, [])

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
                        Items.map((item)=><tr>
                            <td>{item.item_id}</td>
                            <td>{item.iname}</td>
                            <td>{item.price}</td>
                            <td>{item.available_qty}</td>
                                {/* category to be implemented */}
                            <td>xyz</td> 
                            
                        </tr>)
                    }
                    
                </table>
            </div>
        </div>
    )
}

export default Home
