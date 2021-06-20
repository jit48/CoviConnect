import { Fragment, useState } from "react";
import RaiseFund from "./RaiseFund/RaiseFund";
import api from "../../axios";

const NGOdashboard = () => {

    const [ fund, setFund ] = useState([{}]);

    const fetchData = () => {
        api.get('/fundraise')
        .then((res)=> {
            setFund(res.data)
        })
    }

    return(
        <Fragment>
            <RaiseFund />
            <button onClick={fetchData}>Show Fund</button>
            {fund.map((elem)=> {
                return elem.title;
            })}
        </Fragment>
    )
}

export default NGOdashboard;