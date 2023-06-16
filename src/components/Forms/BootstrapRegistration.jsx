import React, { useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Field from '../Field';
export default function BootstrapRegistration() {

  // manage data withour localStorage 
  //const [formAllData, setFormAllData] = useState([]);

  const formField = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirm_password: '',
    file: '',
    msg: '',
    country:'',
    languages: []
  }
  const [formData, setFormData] = useState(formField)


//checkbox code 
  const checkboxOptions = [
    { label: "English", value: "english", name: "english" },
    { label: "Hindi", value: "hindi", name: "hindi" },
    { label: "Gujrati", value: "gujrati", name: "gujrati" },
  ]

  const onClick = (e) => {
    if (e.target.checked) {
       setFormData({ ...formData, languages: [...formData.languages, e.target.value] })
    }
    else {
       setFormData({ ...formData, languages: [...formData.languages.filter(value => e.target.value != value)] })
    }
  }
//checkbox code end

// select onchange
const selectOption =[
  {key:"Select-Now",value:""},
  {key:"India",value:"india"},
  {key:"Bangladesh",value:"bangladesh"},
  {key:"Srilanka",value:"srilanka"},
  {key:"China",value:"china"},
]

const onChange = (e)=>{
       setFormData({...formData,country:e.target.value})
}

//select onchange end here


  //onsubmit functin here
  const onSubmit = (e) => {
    e.preventDefault();

    //write new code for localStorage
    let user_data = JSON.parse(localStorage.getItem('user_data')) || [];
    localStorage.setItem("user_data", JSON.stringify([...user_data, formData]))
    //write new code end

    // manage data without localStorage
    // setFormAllData([...formAllData,formData])

    //reset all field value after submiting form
    e.target.reset()
    setFormData(formField)
    console.log(formData)

  }

  //print here all submit form data
  // useEffect(()=> console.log(formAllData),[formAllData])

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
          onChange={(e) =>setFormData({ ...formData, fname: e.target.value })}
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
          onChange={(e) =>setFormData({ ...formData, lname: e.target.value })}
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
          onChange={(e) =>setFormData({ ...formData, password: e.target.value })}
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
          onChange={(e) =>setFormData({ ...formData, confirm_password: e.target.value })}
          value={formData.confirm_password}
        />
        <Field
          control="file"
          name="file"
          //label="Choose file"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) =>setFormData({ ...formData, file: e.target.value })}
          value={formData.file}
        />

        {/* Add new Field select filed */}
        <Field
          control="select"
          label="Select-Country"
          options={selectOption}
          onChange={onChange}
          className="form-control"
        />
        {/* add new field end */}

        <Field
          control="checkbox"
          label="Select-Language"
          options={checkboxOptions}
          onClick={onClick}
          outerClass=" my-2"
          checkLabelClass="fs-6"
        />
        <Field
          control="textarea"
          // label="Message"
          placeholder="Enter your message"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) =>setFormData({ ...formData, msg: e.target.value })}
          value={formData.msg}
        />
        <Field
          control="button"
          type="submit"
          label="Submit"
          className="rounded  bg-primary text-white fw-bold"
        />
        <Field
          control="button"
          type="reset"
          label="Reset"
          onClick={()=>setFormData(formField)}
          className=" rounded ms-5 bg-danger"
        />

      </form>
    </>
  )
}