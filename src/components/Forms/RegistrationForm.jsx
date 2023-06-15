import React from 'react'
import Field from '../Field'
import './Reg.css'
export default function RegistrationForm() {

    const options=[
        {key:"PHP Developer",value:"php-developer"},
        {key:".Net Developer",value:".net-developer"},
        {key:"React Developer",value:"react-developer"},
        {key:"Java Developer",value:"java-developer"}
    ]
    const radioOptions=[
        {label:"Male",value:"male"},
        {label:"Female",value:"female"},
        {label:"Other",value:"other"},
    ]
    const checkboxOption=[
        {name:"hindi",value:"hindi",label:"Hindi"},
        {name:"english",value:"english",label:"English"},
        {name:"gujrati",value:"gujrati",label:"Gujrati"},
    ]
    const callback=(e)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <h3 className='outer-class'>Registration Form</h3>
            <form>
                <Field
                    control="input"
                    type="text"
                    label="First Name"
                    name="fname"
                    placeholder="Enter first name"
                    outerClass="outer-class"
                    className="form-control"
                />
                <Field  
                    control="input"
                    type="text"
                    label="Last Name"
                    name="lname"
                    placeholder="Enter last name"
                    outerClass="outer-class"
                    className="form-control"
                />
                <Field  
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter your email id"
                    outerClass="outer-class"
                    className="form-control"
                />
                <Field
                   control="select"
                   options={options}
                   label="Choose Profession"
                   callback={callback}
                   outerClass="outer-class"
                   className="form-control"
                />
                <Field
                   control="radio"
                   options={radioOptions}
                   name="gender"
                   label="Gender"
                   outerClass="outer-class"
                   className="check-radio"
                />
                <Field
                   control="checkbox"
                   options={checkboxOption}
                   label="Choose language"
                   outerClass="outer-class "
                   className="check-radio"
                   />
                <Field
                    control="file"
                    label="Choose File"
                    name="file"
                    outerClass="outer-class"
                    className="form-control file"
                    />
                <Field 
                   control="textarea"
                   name="description"
                   label="Description"
                   placeholder="Enter your message"
                   outerClass="outer-class"
                   className="form-control text-area"
                   />
                <Field
                   control="button"
                   type="submit"
                   label="Submit"
                   className="form-control submit-button"
                   />
            </form> 

        </div>
    )
}