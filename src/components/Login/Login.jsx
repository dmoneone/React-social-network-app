import React from 'react'
import {reset} from 'redux-form';
import { reduxForm, Field } from 'redux-form'
import { required,maxLength } from '../../form_validation_checks/formChecks'
import { Input } from '../FormComponents/FormComponents'
import { connect } from 'react-redux'

const maxLength15 = maxLength(15)
const maxLength30 = maxLength(30)

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="login" component={Input} type="text" placeholder='login' validate={[required,maxLength15]}/>
            <Field name="passwd" component={Input} type="password" placeholder='password'  validate={[required,maxLength30]}/>
            <Field name="isSaved" component={Input} type="checkbox"/>
            <button>Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

  const LoginPage = props => {
    const submit = val => {
        props.reset('login')
        console.log(val)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    )
}



export default connect(null,{reset})(LoginPage)