import { useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import './Adoption.scss'
import kids_adoption from '../../../Images/kids_adoption.png'
import pets_adoption from '../../../Images/pets_adoption.png'
import Button from '../../Button/Button'
import api from '../../../axios'

const AdoptionRequests = () => {

  const {
    user: { user},
  } = useAuth()

  const [openModal, ] = useState(false)

  const [adoptionData, setAdoptionData] = useState(user.adoptionForm)

  useEffect(()=>{
    console.log(user.adoptionForm)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[adoptionData])

  const deleteAdoptionData = async (newUser) => {
    // console.log('called')
    // console.log(newUser)
    // console.log(user._id)
    const delAdoption = await api
      .delete(`/ngo/deleteAdoptionRequest/${newUser.id}/${user._id}`)
      .then((res) => res.data)
    const arr = delAdoption.filter((adoptions) => adoptions.id !== newUser.id)
    setAdoptionData(arr)
    //console.log(delAdoption)
  }

  return (
    <div className={`Adoption ${openModal ? 'open' : ' '}`}>
      {user.isAdoption &&
        adoptionData.map((newUser) => {
          
          if (newUser.type === 'kids') {
            return (
              <div className="AdoptionCard">
                <div className="cardHeader">
                  <div className="adoptionImage">
                    <img src={kids_adoption} alt="kidsAdoption"></img>
                  </div>
                  <div className="cardHeaderText">
                    <h5 style={{
                    background: 'hsl(100, 60%, 50%)',
                }}>{newUser.type.toUpperCase()}</h5>
                  </div>
                </div>

                <p>
                  Name of adopter :
                  {newUser.name}
                </p>

                <p>
                  Marital status of adopter :
                  {newUser.maritalStatus}
                </p>

                <div className="adoptUserInfo">
                  <p>
                    
                      <i class="fas fa-phone-alt"></i>{' '}
                    {' '}
                    {newUser.phNum}
                  </p>{' '}
                  <p>
                    
                      <i class="fas fa-envelope-open"></i>
                    {' '}
                    {newUser.email}
                  </p>{' '}
                </div>

                <div className="adoptInfo">
                  <p>
                    No. of adoptions requested: {newUser.noOfAdopions}
                  </p>
                  <p>
                    Age group of kids: {newUser.age}
                  </p>
                </div>
                <div className="deleteAdoption">
                  <Button onClick={()=>deleteAdoptionData(newUser)}>Close Request</Button>
                </div>
              </div>
            )
          }
          else {
            return (
              <div className="AdoptionCard">
                <div className="cardHeader">
                  <div className="adoptionImage">
                    <img src={pets_adoption} alt="petsAdoption"></img>
                  </div>
                  <div className="cardHeaderText">
                    <h5 style={{
                    background: 'hsl(0, 60%, 50%)',
                }}>{newUser.type.toUpperCase()}</h5>
                  </div>
                </div>
                <p>
                  Name of adopter: {newUser.name}
                </p>
                <div className="adoptUserInfo">
                  <p>
                    
                      <i class="fas fa-phone-alt"></i>
                    {' '}
                    {newUser.phNum}
                  </p>{' '}
                  <p>
                    
                      <i class="fas fa-envelope-open"></i>
                    {' '}
                    {newUser.email}
                  </p>
                </div>
                <div className="adoptInfo">
                  <p>
                    No. of adoptions requested: {newUser.noOfAdopions}
                  </p>
                  <p>
                    Age group of pets : {newUser.age}
                  </p>
                </div>
                <p>
                  Cats/Dogs/Others: {newUser.animalType}
                </p>
                <div className="deleteAdoption">
                  <Button onClick={()=>deleteAdoptionData(newUser)}>Close Request</Button>
                </div>
              </div>
            )
          }
        })}
    </div>
  )
}

export default AdoptionRequests
