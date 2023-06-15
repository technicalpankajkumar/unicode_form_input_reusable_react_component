import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Field from '../Field';
export default function BootstrapRegistration() {

  const [formAllData, setFormAllData] = useState([]);

  const formField={
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirm_password: '',
    file: '',
    msg: '',
    languages: []
  }
  const [formData, setFormData] = useState(formField)

  const checkboxOptions = [
    { label: "English", value: "english", name: "english" },
    { label: "Hindi", value: "hindi", name: "hindi" },
    { label: "Gujrati", value: "gujrati", name: "gujrati" },
  ]

  //onchange function in checkbox to get there values.
  const onChange = (e) => {

    if (e.target.checked) {
      (e.target.checked) && (setFormData({ ...formData, languages: [...formData.languages, e.target.value] }))
    }
    else {
      (e.target.checked) || setFormData({ ...formData, languages: [...formData.languages.filter(value => e.target.value != value)] })
    }
  }
   
//onsubmit functin here
  const onSubmit=(e) => {
    e.preventDefault();

    //write new code
    let user_data=JSON.parse(localStorage.getItem('user_data')) || [];
     localStorage.setItem("user_data",JSON.stringify([...user_data,formData]))
   //write new code end
    setFormAllData([...formAllData,formData])
    e.target.reset()
    setFormData(formField)
  }

//print here all submit form data
useEffect(()=> console.log(formAllData),[formAllData])

  return (
    <>
      <h4 className="text-center">Using Bootstrap Registration form</h4>
      <form onSubmit={onSubmit}>
        <Field
          control="input"
          type="text"
          name="fname"
          //label="First name"
          placeholder="Enter your name"
          outerClass="fs-5 mb-2 "
          className="form-control"
          onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
          value={formData.fname}
        />
        <Field
          control="input"
          type="text"
          name="lname"
        //  label="Last name"
          placeholder="Enter your lastname"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
          value={formData.lname}
        />
        <Field
          control="input"
          type="email"
          name="email"
         // label="Email"
          placeholder="Enter your email address"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <Field
          control="input"
          type="password"
          name="password"
        //  label="Password"
          placeholder="Enter your password"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          value={formData.password}
        />
        <Field
          control="input"
          type="password"
          name="confirm_password"
        //  label="Confirm Password"
          placeholder="Re enter password"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
          value={formData.confirm_password}
        />
        <Field
          control="file"
          name="file"
          //label="Choose file"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, file: e.target.value })}
          value={formData.file}
        />
        <Field
          control="checkbox"
          //label="Select-Language"
          options={checkboxOptions}
          onClick={onChange}
          outerClass="fs-5 mb-2"
          checkLabelClass="fs-6"
        />
        <Field
          control="textarea"
          // label="Message"
          placeholder="Enter your message"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
          value={formData.msg}
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