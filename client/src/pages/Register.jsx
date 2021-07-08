import { useState } from 'react';
import styles from '../styles/Register.module.scss';

import Volunteer from '../components/Register/Volunteer';
import Ngo from '../components/Register/Ngo';
import LoginImg from '../Images/login.svg';

const Register = () => {
    const [volunteer, setVolunteer] = useState(true);

    const optionHandler = (event) => {
        const clicked = event.target.name;
        if (clicked === 'Volunteer') {
            setVolunteer(true);
        } else if (clicked === 'NGO') {
            setVolunteer(false);
        }
    };

    return (
        <section className={styles.page}>
            <div className={styles.register}>
                <h2>Sign up</h2>
                <br />
                {volunteer ? (
                    <div>
                        <h1>Volunteer</h1>
                        <br />
                        <div className={styles.optionBtn}>
                            <button onClick={optionHandler} name='Volunteer'>
                                Volunteer
                            </button>
                            <button onClick={optionHandler} name='NGO'>
                                NGO
                            </button>
                        </div>
                        <br />
                        <br />
                        <Volunteer />
                    </div>
                ) : (
                    <div>
                        <h1>NGO</h1>
                        <br />
                        <div className={styles.optionBtn}>
                            <button onClick={optionHandler} name='Volunteer'>
                                Volunteer
                            </button>
                            <button onClick={optionHandler} name='NGO'>
                                NGO
                            </button>
                        </div>
                        <br />
                        <br />
                        <Ngo />
                    </div>
                )}
            </div>
            <div>
                <img className={styles.loginImage} src={LoginImg} alt='register' style={{ height: '500px' }} />
            </div>
        </section>
    );
};

export default Register;
