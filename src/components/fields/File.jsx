import React from 'react'

export default function File({label,outerClass,name,...rest}){

    return (
        <div className={outerClass}>
           { label ? <> <label htmlFor={name}>{`${label} :`}</label><br/></>:<span></span>}
            <input type="file" name={name} id={name} {...rest}/>
        </div>
    )
}