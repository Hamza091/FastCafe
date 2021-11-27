import './items.css';

function Items() {
    const AddItem = ()=>{
        console.log('check')        
    } 
    return (
        <div className="customer-main">
            
            <div className="addItems">
                <div className="cross">
                    X
                </div>            
                <div className="itm-details">
                <div className="itm-lbl">
                    <label >Id: </label>
                    <input className="itm-input"/>
                </div>
                <div className="itm-lbl">
                    <label >Name: </label>
                    <input className="itm-input"/>
                </div>
                <div className="itm-lbl">
                    <label >Price: </label>
                    <input className="itm-input"/>
                </div>
                <div className="itm-lbl">
                    <label >Quantity: </label>
                    <input className="itm-input"/>
                </div>
                <div className="itm-lbl">
                    <label >Category: </label>
                    <input className="itm-input"/>
                </div>
                <div className="btn-md">
                    <button className="bn">Add Item</button>
                </div>
                </div>
            </div>

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
