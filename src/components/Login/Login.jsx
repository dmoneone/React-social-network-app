import React from 'react'

import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="login" component="input" type="text" />
            <Field name="passwd" component="input" type="password" />
            <Field name="isSaved" component="input" type="checkbox" />
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
        console.log(val)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    )
}

export default LoginPage