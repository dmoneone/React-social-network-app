import React from 'react'
import {reset} from 'redux-form';
import { reduxForm, Field } from 'redux-form'
import { required,maxLength } from '../../form_validation_checks/formChecks'
import { Input } from '../FormComponents/FormComponents'
import { connect } from 'react-redux'
import { login, logout} from '../../Redux/AuthReducer'

const maxLength15 = maxLength(100)
const maxLength30 = maxLength(50)

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="email" component={Input} type="text" placeholder='login' validate={[required,maxLength15]}/>
            <Field name="password" component={Input} type="password" placeholder='password'  validate={[required,maxLength30]}/>
            <Field name="rememberMe" component={Input} type="checkbox"/>
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
        props.reset('login')
        props.login(data.email, data.password, data.rememberMe)
        
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    )
}



export default connect(null,{reset,login,logout})(LoginPage)