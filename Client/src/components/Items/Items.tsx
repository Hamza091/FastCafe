import './items.css';

function Items() {
    const AddItem = ()=>{
        console.log('check')        
    } 
    return (
        <div className="customer-main">
            <div className="contents">
                <button className="btn btn-success btn-lg btn-txt" onClick={AddItem}>Add Item</button>
            
            <div className="head">
                Items   
            </div>
            <table id="customers">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    {/* <th>Country</th>
                    <th>Actions</th> */}
                </tr>
                {/* <tr>
                    <td>Alfreds sldkfj lksdjFutterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>
                        <div className="btn-container">
                            <button className="btn btn-primary btn-lg btn-wid">Update</button>
                            <button className="btn btn-danger btn-lg btn-wid">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>
                        <div className="btn-container">
                            <button className="btn btn-primary btn-lg btn-wid">Update</button>
                            <button className="btn btn-danger btn-lg btn-wid">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>
                        <div className="btn-container">
                            <button className="btn btn-primary btn-lg btn-wid">Update</button>
                            <button className="btn btn-danger btn-lg btn-wid">Delete</button>
                        </div>
                    </td>
                </tr> */}
                
            </table>
        </div>
        </div>
    )
}

export default Items
