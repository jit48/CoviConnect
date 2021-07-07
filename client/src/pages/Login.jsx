import { Fragment, useState } from 'react';
import styles from '../styles/Login.module.scss';
import Ngo from '../components/Login/Ngo';
import Volunteer from '../components/Login/Volunteer';
import LoginImg from '../Images/login.svg';

const Login = () => {
    const [Vlogin, setVlogin] = useState(true);
    const [Nlogin, setNlogin] = useState(true);
    const [volunteer, setVolunteer ] = useState(true);


    const optionHandler  = (event) => {
        const clicked = event.target.name;
        if(clicked === "Volunteer"){
            setVolunteer(true);
        }
        else if(clicked === "NGO"){
            setVolunteer(false);
        }
    }

    return (
        <Fragment>
            <section className={styles.page}>
                {volunteer ? 
                    <div className={styles.volunteer}>
                        <h1>Sign In</h1>
                        <br/>
                        <h2>Volunteer</h2>
                        <br/>
                        <div className={styles.optionBtn}>
                            <button onClick={optionHandler} name="Volunteer">Volunteer</button>
                            <button onClick={optionHandler} name="NGO">NGO</button>
                        </div>
                        <br/>
                        <br/>
                        <div className={styles.content}>
                        <Volunteer login={Vlogin} setLogin={setNlogin} />
                        </div>
                    </div>
                    : 
                    <div className={styles.ngo}>
                        <h1>Sign In</h1>
                        <br/>
                        <h2>NGO</h2>
                        <br/>
                        <div className={styles.optionBtn}>
                            <button onClick={optionHandler} name="Volunteer">Volunteer</button>
                            <button onClick={optionHandler} name="NGO">NGO</button>
                        </div>
                        <br/>
                        <br/>
                        <div className={styles.content}>
                            <Ngo login={Nlogin} setLogin={setVlogin} />
                        </div>
                    </div>}
                    
                    
            <div>
                <img className={styles.loginImage} src={LoginImg} style={{height: "500px"}} alt=""/>
            </div>
            </section>
        </Fragment>
        
            
    );
};

export default Login;
