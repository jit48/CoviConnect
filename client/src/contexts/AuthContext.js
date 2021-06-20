import { createContext, useContext, useEffect, useState } from 'react';
import api from '../axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const setLocalToken = (token, isVolunteer) => {
        localStorage.setItem('token', token);
        localStorage.setItem('expires', JSON.parse(atob(token.split('.')[1])).exp);
        localStorage.setItem('isVolunteer', isVolunteer);
    };

    const getVolunteer = async (token) => {
        return await api.get('/volunteer/', { headers: { 'x-auth-token': token } }).then((res) => res.data);
    };

    const getNgo = async (token) => {
        return await api.get('/ngo/', { headers: { 'x-auth-token': token } }).then((res) => res.data);
    };

    const volunteerLogin = async ({ email, password }) => {
        setLoading(true);
        const res = await api.post('/volunteer/login', { email, password }).then((res) => res.data);
        setLocalToken(res.token, true);
        const resUser = await getVolunteer(res.token);
        setUser({ user: resUser, isAuthorised: true, isVolunteer: true, token: res.token });
        setLoading(false);
    };

    const ngoLogin = async ({ email, password }) => {
        setLoading(true);
        const res = await api.post('/ngo/login', { email, password }).then((res) => res.data);
        setLocalToken(res.token, false);
        const resUser = await getNgo(res.token);
        setUser({ user: resUser, isAuthorised: true, isVolunteer: false, token: res.token });
        setLoading(false);
    };

    const logout = () => {
        setUser({});
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
        localStorage.removeItem('isVolunteer');
    };

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('token');
            const isVolunteer = localStorage.getItem('isVolunteer') === 'true';
            const expires = Date.now() >= +localStorage.getItem('expires') * 1000;

            if (!token) {
                console.log('No previous session');
                setUser({});
            } else if (expires) {
                setUser({});
                localStorage.removeItem('token');
                localStorage.removeItem('expires');
                localStorage.removeItem('isVolunteer');
            } else if (isVolunteer) {
                const res = await getVolunteer(token);
                setUser({ user: res, isAuthorised: true, isVolunteer: true, token: token });
            } else {
                const res = await getNgo(token);
                setUser({ user: res, isAuthorised: true, isVolunteer: false, token: token });
            }
        })();
    }, []);

    const value = {
        user,
        volunteerLogin,
        ngoLogin,
        logout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
