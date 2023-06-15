import React from 'react'
import RegistrationForm from './components/Forms/RegistrationForm'
import BootstrapRegistration from './components/Forms/BootstrapRegistration'

export default function App() {

  return (
    <>
      <div className='row'>
        <div className='col'>
        <h1 className='text-center text-danger border-bottom border-1 border-success pb-3'>Hello Forms Component</h1>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-sm-6 border p-3 rounded '>
          <BootstrapRegistration />
          {/* <RegistrationForm/> */}
        </div>
      </div>

    </>
  )
}