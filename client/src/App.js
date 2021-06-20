import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import api from './axios';
import PrivateRoute from './PrivateRoute';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Volunteer from './pages/Volunteer';
import Ngo from './pages/Ngo';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    const { user } = useAuth();

    useEffect(() => {
        api.get('/').then((res) => console.log(res.data));
    }, []);

    return (
        <div className='App'>
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home} />
                    {!user.isAuthorised && <Route path='/register' exact component={Register} />}
                    {!user.isAuthorised && <Route path='/login' exact component={Login} />}
                    <PrivateRoute path='/dashboard' component={user.isVolunteer ? Volunteer : Ngo} />
                    <Route path='*' exact>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </Layout>
        </div>
    );
};

export default App;
