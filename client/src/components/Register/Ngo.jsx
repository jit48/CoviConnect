import { useRef, useState } from 'react'
import styles from './Register.module.scss'
import api from '../../axios'

import Input from '../Input/Input'
import Button from '../Button/Button'
import RadioInput from '../RadioInput/RadioInput'

const Ngo = () => {
  const [isAdoption, setIsAdoption] = useState('no')
  const nameRef = useRef()
  const aboutRef = useRef()
  const emailRef = useRef()
  const contactRef = useRef()
  const addressRef = useRef()
  const passwordRef = useRef()
  // const isAdoptionRef = useRef()
  const confirmpasswordRef = useRef()

  const ngoHandler = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value !== confirmpasswordRef.current.value) {
      return console.log("passwords didn't match")
    }

    const newNgo = {
      name: nameRef.current.value,
      about: aboutRef.current.value,
      address: addressRef.current.value,
      email: emailRef.current.value,
      isAdoption: isAdoption,
      contact: contactRef.current.value,
      password: passwordRef.current.value,
    }
    console.log(newNgo)

    const res = await api.post('/ngo/register', newNgo).then((res) => res.data)
    console.log(res)
  }

  return (
    <form onSubmit={ngoHandler} className={styles.form}>
      <h1>Register NGO</h1>
      <Input
        label="Organisation Name"
        type="text"
        required={true}
        innerRef={nameRef}
      />
      <Input label="About" type="text" required={true} innerRef={aboutRef} />
      <Input
        label="Address"
        type="text"
        required={true}
        innerRef={addressRef}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <label>Adoption Facility</label>
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
      <Input label="Email" type="email" required={true} innerRef={emailRef} />
      <Input label="Contact" type="tel" required={true} innerRef={contactRef} />
      <Input
        label="Password"
        type="password"
        required={true}
        innerRef={passwordRef}
      />
      <Input
        label="Confirm Password"
        type="password"
        required={true}
        innerRef={confirmpasswordRef}
      />
      <div className={styles.registerbutton}>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, eum!
        </span>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </div>
    </form>
  )
}

export default Ngo
