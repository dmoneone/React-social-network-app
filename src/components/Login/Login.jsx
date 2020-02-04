import React from 'react'
import {reset} from 'redux-form';
import { reduxForm, Field } from 'redux-form'
import { required,maxLength } from '../../form_validation_checks/formChecks'
import { Input } from '../FormComponents/FormComponents'
import { connect } from 'react-redux'
import { login, logout} from '../../Redux/AuthReducer'
import { Redirect } from 'react-router-dom';
import c from './Login.module.scss'
const maxLength100 = maxLength(100)
const maxLength50 = maxLength(50)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="email" component={Input} type="text" placeholder='login' validate={[required,maxLength100]}/>
            <Field name="password" component={Input} type="password" placeholder='password'  validate={[required,maxLength50]}/>
            <Field name="rememberMe" component={Input} type="checkbox"/>
            {props.captchaUrl && <img src={props.captchaUrl} />}
            {props.captchaUrl && <Field name='captcha' component={Input} type="text" placeholder='symbols' validate={[required]} />}
            {props.error && <span className={c.error}>{props.error}</span>}
            <button>Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

  const LoginPage = props => {
    const submit = data => {
        console.log(data)
        //props.reset('login')
        props.login(data.email, data.password, data.rememberMe, data.captcha)
        
    }
    if(props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm 
                onSubmit={submit}
                captchaUrl={props.captchaUrl}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captcha
})


export default connect(mapStateToProps,{reset,login,logout})(LoginPage)