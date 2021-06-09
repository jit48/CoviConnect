import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Volunteer from './pages/Volunteer';

const App = () => {
    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <div className='App'>
            <h1>Hello world ! 😪</h1>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/volunteer/:id' component={Volunteer} />
                <Route path='*' exact>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
