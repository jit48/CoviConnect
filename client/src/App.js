import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import api from './axios';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Volunteer from './pages/Volunteer';
import NGOdashboard from './components/NGO/NGOdashboard';
import Facility from './pages/Facility';

const App = () => {
    useEffect(() => {
        api.get('/').then((res) => console.log(res.data));
    }, []);

    return (
        <div>
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/volunteer/:id' component={Volunteer} />
                    <Route path='/ngo/dashboard/:id' component={NGOdashboard} />
                    <Route path='/facility/:type' component={Facility} />
                    <Route path='*' exact>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </Layout>
        </div>
    );
};

export default App;
