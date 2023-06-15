import React from 'react'

export default function Textarea({name, label,outerClass,...rest}){

    return (
        <div className={outerClass}>
            { label ? <><label htmlFor={name}>{`${label} :`}</label><br/></>:<span></span>}
            <textarea {...rest} id={name}></textarea>
        </div>
    )
}