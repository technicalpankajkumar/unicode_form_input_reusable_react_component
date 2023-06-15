import React from 'react';
import Field from '../Field';
import './Reg.css'
function Test() {

  const options=[
    {key:"Math",value:"math"},
    {key:"Physics",value:"physics"},
    {key:"Chemestry",value:"chemestry"},
    {key:"Biology",value:"biology"},
  ]
   const callback=(v)=>{
       console.log(v.target.value)
   }

  return (
    <div className="App">
 
       <Field
       control="input"
       type="text" 
       name="user-name"
       placeholder="Enter your username"
       label="User Name" 
       className="form-control"
       />
       <Field
        control ="radio"
        name="gender"
        id="male"
        mLabel="Gender"
        label="Male"
        />
        <Field
        control ="radio"
        name="gender"
        id="female"
        label="Female"
        />
         <Field
        control ="checkbox"
        name="english"
        id="english"
        mLabel="Select-Language"
        label="English"
        />
         <Field
        control ="checkbox"
        name="hindi"
        value="hindi"
        label="Hindi"
        />
        
        <Field
         control="button"
         type="submit"
         label="Submit"
         />
         <Field
         control="button"
         type="reset"
         label="Reset"
         />
         <Field
         control="button"
         type="button"
         label="dummybtn"
         />

         <Field
         control="select"
         options={options}
         name="subject"
         label="Select-One-Subject"
         func={callback}
         className="form-control"
         />
         <Field
          control="file"
          name="file"
          label="Select-File"
          />
    </div>
  );
}

export default Test;
