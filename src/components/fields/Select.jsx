import React from 'react';

export default function Select({ options,callback,outerClass, name,label,...rest }) {
    return (
        <div className={outerClass}>
            { label ? <> <label htmlFor={name}>{`${label} :`}</label><br/> </>:<span></span>}
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