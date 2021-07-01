import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from "react-router-dom";
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useHistory } from 'react-router';

const Volunteer = (props) => {
    const { volunteerLogin } = useAuth();
    const history = useHistory();

    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const volunteerLoginHandler = () => {
        volunteerLogin({ email: login.email, password: login.password });
        history.push('/dashboard');
    };

    return (
        <>
            <Input
                label='Email'
                type='email'
                required={true}
                value={login.email}
                disabled={!props.login}
                onChange={(e) => {
                    if (e.target.value.length > 0 || login.password.length > 0) props.setLogin(false);
                    else props.setLogin(true);
                    setLogin((p) => ({
                        email: e.target.value,
                        password: p.password,
                    }));
                }}
            />
            <br/>
            <Input
                label='Password'
                type='password'
                required={true}
                value={login.password}
                disabled={!props.login}
                onChange={(e) => {
                    if (e.target.value.length > 0 || login.email.length > 0) props.setLogin(false);
                    else props.setLogin(true);
                    setLogin((p) => ({
                        email: p.email,
                        password: e.target.value,
                    }));
                }}
            />
            <br/>
            <p>Don't have an account? <Link to={`/register`}>Register</Link></p>
            <br/>
            <br/>
            <Button onClick={volunteerLoginHandler} disabled={!props.login}>
                Login
            </Button>
        </>
    );
};

export default Volunteer;
