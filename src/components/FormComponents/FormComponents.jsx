import React from 'react'
import c from './FormComponents.module.css'
import classNames from 'classnames'

const FormControl = (props) => {
    let {input, meta, children, ...restProps} = props
    const hasError = meta.touched && meta.error
    const form_control_class = classNames({
        [c.form_control]: true,
        [c.error]: hasError
    });
    return (
        <div className={c.wrap}>
            <div className={form_control_class}>
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



