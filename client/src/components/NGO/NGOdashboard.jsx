import { Fragment, useState } from 'react';
import RaiseFund from './RaiseFund/RaiseFund';
import api from '../../axios';

const NGOdashboard = () => {
    const [fund, setFund] = useState([]);

    const fetchData = () => {
        api.get('/ngo/fundraise').then((res) => {
            setFund(res.data);
        });
        // console.log(fund);
    };

    return (
        <Fragment>
            <RaiseFund />
            <button onClick={fetchData}>Show Fund</button>
            {fund.map((elem) => (
                <div>
                    <p>{elem.title}</p>
                    <img src={elem.file} alt='fund raising' />
                </div>
            ))}
        </Fragment>
    );
};

export default NGOdashboard;
