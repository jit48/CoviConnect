import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import NGOdashboard from '../components/NGO/NGOdashboard'
import Button from '../components/Button/Button'
import '../styles/Ngo.scss';

const Ngo = () => {
  const { logout } = useAuth()

  return (
    <div className="NgoPage">
      <NGOdashboard />
    </div>
  )
}

export default Ngo
