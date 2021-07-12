import '../styles/home.scss';
import { Link } from 'react-router-dom';
import facilities from '../helpers/homeFacilities';
import image from '../Images/doctor.png';


const Home = () => {

    return (
        <div className='Home'>
            <div className='Home__intro'>
                <div className='Home__text'>
                    <span className='home__text__Connecting'>Connecting</span> the <span className='home__text__Needful'>Needful...</span>
                    <br></br>to the <span className='Home__text__Helpful'>Helpful.</span>
                </div>
                <div className='Home__image'>
                    <img src={image} alt='' />
                </div>
            </div>
            <div className='Home__content'>
                {facilities.map((facility) => (
                    <div className='Home__facility'>
                        <div className='Home__facility__image'>
                            <img src={facility.img} alt='beds' />
                        </div>
                        <div className={facility.type}>{facility.type}</div>
                        <div className='Home__facility__discription'>{facility.discription}</div>
                        {facility.type!='Ngo'?
                            (<Link to={`/facility/${facility.link}`}>
                                <div className='Home__facility__link'>
                                    <Link to={`/facility/${facility.link}`}>Explore</Link>
                                </div>
                            </Link> )
                            :
                            ( <Link to={`/ngo/allNgo`}>
                                <div className='Home__facility__link'>
                                    <Link to={`/ngo/allNgo}`}>Explore</Link>
                                </div>
                            </Link>)
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
