import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
const CreateTrip = () => {
  return (
    <>
    <Navbar val="Logout" logout={true} signup={false} show={true} create={false} />
    <Form />
      
    </>
  )
}

export default CreateTrip
