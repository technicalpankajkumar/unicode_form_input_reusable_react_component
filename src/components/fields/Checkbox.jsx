import React from 'react';

export default function Checkbox({ options,label,outerClass,checkLabelClass,...rest }) {
    return (
        <div className={outerClass}>
            { label ? <><label >{`${label} :`}</label><br /></>:<span></span>}
            {
                options.map((opt,index) => {
                    return <span key={index}>
                        &nbsp;<input type="checkbox" name={opt.name} id={opt.value} value={opt.value} {...rest} /> &nbsp;
                        <label htmlFor={opt.name} className={checkLabelClass}>{opt.label}</label> &nbsp;
                    </span>
                })
            }

        </div>
    )
}   