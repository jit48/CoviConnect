import { Fragment } from 'react';
import './Donate.scss';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

const Donate = ({ funds }) => {
    return (
        <Fragment>
            <h1>Donate Page</h1>
            <br />
            <br />
            <div className='funds'>
                {funds.map((fund) => (
                    <div className='fundCard'>
                        <img src={fund.file} alt='Donation_Image' style={{ height: '200px', width: '200px' }} />
                        <h3>{fund.title}</h3>
                        <p>Amount to Raise: </p>
                        <h4>{fund.amount}</h4>
                        <br />
                        <Link to={`/fund/donate/${fund._id}`}>
                            <Button variant='primary'>Donate</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Donate;
