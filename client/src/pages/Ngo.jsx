<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import NGOdashboard from '../components/NGO/NGOdashboard'
import Button from '../components/Button/Button';
=======
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import NGOdashboard from '../components/NGO/NGOdashboard'
import Button from '../components/Button/Button'
import '../styles/Ngo.scss';
>>>>>>> 0a218eaab7a356988618e6cdf01e6f2317e7680c

const Ngo = () => {
  const { logout } = useAuth()

<<<<<<< HEAD
    return (
        <h1>
            NGO Page
            <NavLink to='/'>Home</NavLink>
                <NGOdashboard />
            <Button variant='secondary' onClick={logout}>
                Sign Out
            </Button>
        </h1>
    );
};
=======
  return (
    <div className="NgoPage">
      NGO Page
      <NavLink to="/">Home</NavLink>
      <NGOdashboard />
      <Button variant="secondary" onClick={logout}>
        Sign Out
      </Button>
    </div>
  )
}
>>>>>>> 0a218eaab7a356988618e6cdf01e6f2317e7680c

export default Ngo
