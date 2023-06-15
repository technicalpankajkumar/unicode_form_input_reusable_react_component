import React from 'react'
import Test from './components/Forms/Test'
import RegistrationForm from './components/Forms/RegistrationForm'
import BootstrapRegistration from './components/Forms/BootstrapRegistration'

export default function App() {

  return (
    <>
      <div className='row'>
        <div className='col p-0 m-0'>
        <h1 className='text-center text-danger border-bottom border-1 border-success pb-3'>Hello Forms Component</h1>
        </div>
      </div>
      <div className='row justify-content-center p-0'>
        <div className='col-sm-6 border p-3 rounded '>
          <BootstrapRegistration />
        </div>
      </div>

    </>
  )
}