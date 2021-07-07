import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import NGOdashboard from '../components/NGO/NGOdashboard';
import Button from '../components/Button/Button';

const Ngo = () => {
    const { logout } = useAuth();

    return (
        <div className='NgoPage'>
            NGO Page
            <NavLink to='/'>Home</NavLink>
            <NGOdashboard />
            <Button variant='secondary' onClick={logout}>
                Sign Out
            </Button>
        </div>
    );
};

export default Ngo;
