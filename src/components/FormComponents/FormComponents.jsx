import React from 'react'
import c from './FormComponents.module.css'

const FormControl = (props) => {
    let {input, meta, children, ...restProps} = props
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div className={c.from_control + ' ' + (hasError ? c.error : null)}>
                {children}
            </div>
            {hasError ? <span>{meta.error}</span> : null}
        </div>
        
        
    )
}

export const Input = (props) => {
    let {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}



