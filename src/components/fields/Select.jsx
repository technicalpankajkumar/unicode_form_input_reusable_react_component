import React from 'react';

export default function Select({ options,callback,outerClass, name,label,...rest }) {
    return (
        <div className={outerClass}>
            <label htmlFor={name}>{`${label} :`}</label><br/>
            <select onChange={callback.bind(this)}  {...rest} >
                {
                    options.map((opt) => {
                        return <option name={opt.key} value={opt.value} key={opt.value}>{opt.key}</option>
                    })
                }
            </select>
        </div>
    )
}