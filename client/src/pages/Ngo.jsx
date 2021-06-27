import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import NGOdashboard from '../components/NGO/NGOdashboard';
import Button from '../components/Button/Button';

const Ngo = () => {
    const { logout } = useAuth();

    return (
        <h1>
            NGO Page
            <NavLink to='/'>Home</NavLink>
            <Button variant='secondary' onClick={logout}>
                Sign Out
            </Button>
            <NGOdashboard />
        </h1>
    );
};

export default Ngo;
