import react from 'react';

export default function Input(props){
    const {name,label,type,outerClass,...rest} = props;
  return (
    <>
    <div className={outerClass}>
        <label htmlFor={name} >{`${label} :`}</label><br/>  
        <input type={type} name={name} id={name} {...rest}/>
    </div>
    </>
  )
} 