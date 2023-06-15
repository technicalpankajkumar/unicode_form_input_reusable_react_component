import React from 'react'

export default function Textarea({name, label,outerClass,...rest}){

    return (
        <div className={outerClass}>
            <label htmlFor={name}>{`${label} :`}</label><br/>
            <textarea {...rest} id={name}></textarea>
        </div>
    )
}