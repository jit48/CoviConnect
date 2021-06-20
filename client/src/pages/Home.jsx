import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            Home
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <br />
            <NavLink to='/dashboard'>Login</NavLink>
            <br />
        </section>
    );
};

export default Home;
