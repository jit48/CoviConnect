import { useRef, useState } from 'react';
import styles from './Register.module.scss';
import api from '../../axios';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import RadioInput from '../RadioInput/RadioInput'
import { useHistory } from 'react-router';

const Ngo = () => {
    const [isAdoption, setIsAdoption] = useState('no')
    const [ data, setData ] = useState('');
    const history = useHistory();
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
            isAdoption: isAdoption,
            password: passwordRef.current.value,
            file: data,
        };
        console.log(newNgo);

        const res = await api.post('/ngo/register', newNgo).then((res) => res.data);
        console.log(res);
        history.push('/login');
    };

    return (
        <form onSubmit={ngoHandler} className={styles.form}>
            <Input label='Organisation Name' type='text' required={true} innerRef={nameRef} />
            <Input label='About' type='text' required={true} innerRef={aboutRef} />
            <Input label='Address' type='text' required={true} innerRef={addressRef} />
            <h4 style={{color: "hsl(220, 20%, 30%)", fontFamily: "Raleway, sans-serif"}}>Adoption Facility</h4>
            <div style={{ display: 'flex',justifyContent: 'space-between',}}>
        <RadioInput
          label="Yes"
          value={true}
          name="isAdoption"
          onChange={(e) => {
            setIsAdoption(e.target.value)
          }}
        ></RadioInput>
        <RadioInput
          label="No"
          value={false}
          name="isAdoption"
          defaultChecked
            onChange={(e) => {
            setIsAdoption(e.target.value)
          }}
        ></RadioInput>
        </div>
            <Input label='Email' type='email' required={true} innerRef={emailRef} />
            <Input label='Contact' type='tel' required={true} innerRef={contactRef} />
            <Input label='Password' type='password' required={true} innerRef={passwordRef} />
            <Input label='Confirm Password' type='password' required={true} innerRef={confirmpasswordRef} />
            <h4 style={{color: "hsl(220, 20%, 30%)", fontFamily: "Raleway, sans-serif"}}>Upload a profile picture</h4>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setData( base64 )} /> 
            <div className={styles.registerbutton}>
                <p>
                    Already have account? <Link to={`/login`}>Login</Link>
                </p>
                <Button variant='primary' type='submit'>
                    Register
                </Button>
            </div>
        </form>
    );
};

export default Ngo;
