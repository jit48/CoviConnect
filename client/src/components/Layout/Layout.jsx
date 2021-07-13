import styles from './Layout.module.scss';
import Navbar from '../UI/Navbar';
import VolunteerNav from '../UI/VolunteerNav';
import NgoNav from '../UI/NgoNav';
import { useAuth } from '../../contexts/AuthContext';
const Layout = (props) => {
    const {
        user: { isAuthorised, isVolunteer }
      } = useAuth();
    return (
        <main className={styles.layout}>
            {isAuthorised ? (isVolunteer? <VolunteerNav /> : <NgoNav />) : <Navbar /> }
            <section className={styles.content}>
                <div>{props.children}</div>
            </section>
            {/* <footer className={styles.footer}>
                <div>Footer</div>
            </footer>
            <div className={styles.end}>
                <div>&copy;HackCovid2.0 | Github</div>
            </div> */}
        </main>
    );
};

export default Layout;
