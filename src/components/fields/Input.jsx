import react from 'react';

export default function Input(props){
    const {name,label,type,outerClass,...rest} = props;
  return (
    <>
    <div className={outerClass}>
    { label ? <><label htmlFor={name} >{`${label} :`}</label><br/> </>:<span></span>}
        <input type={type} name={name} id={name} {...rest}/>
    </div>
    </>
  )
} 