import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import api from './axios';
import PrivateRoute from './PrivateRoute';
import Donate from "./components/Facility/Donate/Donate"
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Volunteer from './pages/Volunteer';
import Facility from './pages/Facility';
import Ngo from './pages/Ngo';
import Login from './pages/Login';
import Register from './pages/Register';
import DetailDonate from './components/Facility/Donate/DetailDonate';
import Recruitments from './pages/Recruitments';


const App = () => {
    const { user } = useAuth();

    useEffect(() => {
        api.get('/').then((res) => console.log(res.data));
    }, []);



    const [ funds, setFunds ] = useState([]);

    const getFundRaise = () => {
        api.get('/ngo/getFundraise')
        .then((res)=>{
            setFunds(res.data);
        })
    }
    useEffect(() => {
        console.log("Hello");
        getFundRaise();
    }, [])

    return (
        <div>
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home} />
                    {!user.isAuthorised && <Route path='/register' exact component={Register} />}
                    {!user.isAuthorised && <Route path='/login' exact component={Login} />}
                    <PrivateRoute path='/dashboard' component={user.isVolunteer ? Volunteer : Ngo} />
                    <Route path='/facility/donate'><Donate funds={funds} /></Route>
                    <PrivateRoute path='/recruitments' component={Recruitments} />
                    <Route path='/facility/:type' component={Facility} />
                    <Route path='/fund/donate/:id' component={DetailDonate} />
                    {user.isAuthorised ? (
                        <Route path={['/login', '/register']} exact>
                            <Redirect to='/dashboard' />
                        </Route>
                    ) : (
                        <Route path='*' exact>
                            <Redirect to='/' />
                        </Route>
                    )}
                </Switch>
            </Layout>
        </div>
    );
};

export default App;
