import { useRef, useState } from 'react';
import api from '../../axios';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import RadioInput from '../RadioInput/RadioInput';
import Button from '../Button/Button';

const Volunteer = () => {
    const [gender, setGender] = useState('male');
    const nameRef = useRef();
    const bioRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();
    const addressRef = useRef();
    const passwordRef = useRef();
    const confirmpasswordRef = useRef();

    const volunteerHandler = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== confirmpasswordRef.current.value) {
            return console.log("passwords didn't match");
        }

        const newVolunteer = {
            name: nameRef.current.value,
            bio: bioRef.current.value,
            gender: gender,
            address: addressRef.current.value,
            email: emailRef.current.value,
            contact: contactRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(newVolunteer);

        const res = await api.post('/volunteer/register', newVolunteer).then((res) => res.data);
        console.log(res);
    };

    return (
        <form onSubmit={volunteerHandler} className={styles.form}>
            <Input label='Name' type='text' required={true} innerRef={nameRef} />
            <div className={styles.gender}>
                <RadioInput
                    label='Male'
                    value='male'
                    name='gender'
                    defaultChecked
                    onChange={(e) => {
                        setGender(e.target.value);
                    }}
                />
                <RadioInput
                    label='Female'
                    value='female'
                    name='gender'
                    onChange={(e) => {
                        setGender(e.target.value);
                    }}
                />
            </div>
            <Input label='Bio' type='text' required={true} innerRef={bioRef} />
            <Input label='Address' type='text' required={true} innerRef={addressRef} />
            <Input label='Email' type='email' required={true} innerRef={emailRef} />
            <Input label='Contact' type='tel' required={true} innerRef={contactRef} />
            <Input label='Password' type='password' required={true} innerRef={passwordRef} />
            <Input label='Confirm Password' type='password' required={true} innerRef={confirmpasswordRef} />
            <div className={styles.registerbutton}>
                <p>Already have account? <Link to={`/login`}>Login</Link></p>
                <Button type='submit'>Register</Button>
            </div>
        </form>
    );
};

export default Volunteer;
