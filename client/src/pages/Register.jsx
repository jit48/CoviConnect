import styles from '../styles/Register.module.scss';

import Modal from '../components/Modal/Modal';
import Volunteer from '../components/Register/Volunteer';
import Ngo from '../components/Register/Ngo';
import Button from '../components/Button/Button';
import { NGO, Helpers } from '../components/UI/Icons';
import { useState } from 'react';

const Register = () => {
    const [v_modal, setVModal] = useState(false);
    const [n_modal, setNModal] = useState(false);

    const v_modalHandler = () => {
        setVModal((p) => !p);
    };
    const n_modalHandler = () => {
        setNModal((p) => !p);
    };

    return (
        <section className={styles.page}>
            <h1>Register Yourself</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi est alias, temporibus optio sit nisi repellat
                laborum expedita culpa. Repudiandae odio vero rem, omnis aut perferendis qui unde totam excepturi culpa quasi repellat
                pariatur animi saepe nisi fuga nostrum, porro placeat eaque quia, minima aperiam accusantium voluptatum. Iure, itaque.
            </p>
            <section className={styles.register}>
                <div className={styles.volunteer}>
                    <h1>Volunteer</h1>
                    <Helpers />
                    <div className={styles.content}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, doloribus minima vero maiores ad nemo neque
                            atque adipisci quod ratione perferendis dolores ipsa nobis, nam assumenda error, dolorum officia. Hic?
                        </p>
                        <Button onClick={v_modalHandler}>Register</Button>
                    </div>
                    <Modal open={v_modal} handleModal={v_modalHandler}>
                        <Volunteer />
                    </Modal>
                </div>
                <div className={styles.ngo}>
                    <h1>NGO</h1>
                    <NGO />
                    <div className={styles.content}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique cum laborum quo sapiente consectetur quaerat
                            architecto neque, consequuntur totam perferendis fuga sint impedit, saepe quidem. Magni corrupti,
                        </p>
                        <Button variant='primary' onClick={n_modalHandler}>
                            Register
                        </Button>
                    </div>
                    <Modal open={n_modal} handleModal={n_modalHandler}>
                        <Ngo />
                    </Modal>
                </div>
            </section>
        </section>
    );
};

export default Register;
