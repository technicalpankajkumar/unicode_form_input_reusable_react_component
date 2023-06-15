import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Field from '../Field';

export default function BootstrapRegistration() {

  const [formData, setFormData] = useState({
    fname: null,
    lname: null,
    email: null,
    password: null,
    confirm_password: null,
    file:null,
    languages: []
  })
  const checkboxOptions = [
    { label: "English", value: "english", name: "english" },
    { label: "Hindi", value: "hindi", name: "hindi" },
    { label: "Gujrati", value: "gujrati", name: "gujrati" },
  ]

  const onChange = (e) => {
    if (e.target.checked) {
      (e.target.checked) && (setFormData({ ...formData, languages: [...formData.languages, e.target.value] }))
    }
    else {
      (e.target.checked) || setFormData({ ...formData, languages: [...formData.languages.filter(value => e.target.value != value)] })
    }
  }

  return (
    <>
      <h4 className="text-center">Using Bootstrap Registration form</h4>
      <form onSubmit={(e)=>{e.preventDefault();   console.log(formData)}}>
        <Field
          control="input"
          type="text"
          name="fname"
          label="First name"
          placeholder="Enter your name"
          outerClass="fs-5 mb-2 "
          className="form-control"
          onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
        />
        <Field
          control="input"
          type="text"
          name="lname"
          label="Last name"
          placeholder="Enter your lastname"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
        />
        <Field
          control="input"
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email address"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Field
          control="input"
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <Field
          control="input"
          type="password"
          name="confirm-password"
          label="Confirtm Password"
          placeholder="Re enter password"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
        />
        <Field
          control="file"
          name="file"
          label="Choose Photo"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, file: e.target.value })}
        />
        <Field
          control="checkbox"
          label="Select-Language"
          options={checkboxOptions}
          onChange={onChange.bind(this)}
          outerClass="fs-5 mb-2"
          checkLabelClass="fs-6"
        />
        <Field
          control="button"
          type="submit"
          label="Submit"
          className=" rounded  bg-primary text-white fw-bold"
        />
        <Field
          control="button"
          type="reset"
          label="Reset"
          className=" rounded ms-5 bg-danger"
        />

      </form>
    </>
  )
}