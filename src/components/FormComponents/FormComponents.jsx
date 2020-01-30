import React from 'react'
import c from './FormComponents.module.css'

const FormControl = (props) => {
    let {input, meta, children, ...restProps} = props
    const hasError = meta.touched && meta.error
    return (
        <div className={c.wrap}>
            <div className={c.form_control + ' ' + (hasError ? c.error : null)}>
                {children}
            </div>
            {hasError ? <span className={c.span_error}>{meta.error}</span> : null}
        </div>
        
        
    )
}

export const Input = (props) => {
    let {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}



