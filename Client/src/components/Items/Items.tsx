import './items.css';

function Items() {
    return (
        <div className="customer-main">
            <div className="add-btn">
                <button className="btn btn-success btn-lg btn-txt">Add Item</button>
            </div>
            <div className="head">
                Items
            </div>
            <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
                <tr>
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
                    <td>
                        <div className="btn-container">
                            <button className="btn btn-primary btn-lg btn-wid">Update</button>
                            <button className="btn btn-danger btn-lg btn-wid">Delete</button>
                        </div>
                    </td>
                </tr>
                
            </table>
        </div>
    )
}

export default Items
