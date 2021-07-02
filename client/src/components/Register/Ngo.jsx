import { useRef } from 'react';
import styles from './Register.module.scss';
import api from '../../axios';

import Input from '../Input/Input';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Ngo = () => {
    const nameRef = useRef();
    const aboutRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();
    const addressRef = useRef();
    const passwordRef = useRef();
    const confirmpasswordRef = useRef();

    const ngoHandler = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== confirmpasswordRef.current.value) {
            return console.log("passwords didn't match");
        }

        const newNgo = {
            name: nameRef.current.value,
            about: aboutRef.current.value,
            address: addressRef.current.value,
            email: emailRef.current.value,
            contact: contactRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(newNgo);

        const res = await api.post('/ngo/register', newNgo).then((res) => res.data);
        console.log(res);
    };

    return (
        <form onSubmit={ngoHandler} className={styles.form}>
            <Input label='Organisation Name' type='text' required={true} innerRef={nameRef} />
            <Input label='About' type='text' required={true} innerRef={aboutRef} />
            <Input label='Address' type='text' required={true} innerRef={addressRef} />
            <Input label='Email' type='email' required={true} innerRef={emailRef} />
            <Input label='Contact' type='tel' required={true} innerRef={contactRef} />
            <Input label='Password' type='password' required={true} innerRef={passwordRef} />
            <Input label='Confirm Password' type='password' required={true} innerRef={confirmpasswordRef} />
            <div className={styles.registerbutton}>
                <p>Already have account? <Link to={`/login`}>Login</Link></p>
                <Button variant='primary' type='submit'>
                    Register
                </Button>
            </div>
        </form>
    );
};

export default Ngo;
