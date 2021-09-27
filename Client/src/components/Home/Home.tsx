import './home.css';

function Home() {
    return (
        <div className="customer-main">
            <div className="contents">
                <button className="btn btn-success btn-lg btn-txt">Serve</button>
            <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>Alfreds sldkfj lksdjFutterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            Serve
                        </label>
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
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" >
                                Serve
                            </label>
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
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            Serve
                        </label>
                    </div>
                    </td>
                </tr>
                
            </table>
        </div>
        </div>
    )
}

export default Home
