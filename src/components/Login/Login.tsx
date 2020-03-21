import React from 'react'
import {reset, InjectedFormProps, FormAction} from 'redux-form';
import { reduxForm, Field } from 'redux-form'
import { required,maxLength } from '../../form_validation_checks/formChecks'
import { Input, createField } from '../FormComponents/FormComponents'
import { connect } from 'react-redux'
import { login, logout} from '../../Redux/AuthReducer'
import { Redirect } from 'react-router-dom';
import c from './Login.module.scss'
import { GlobalStateType } from '../../Redux/redux-store';
const maxLength100 = maxLength(100)
const maxLength50 = maxLength(50)

type SubmitingDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

type LoginFormOwnProps = {
    captchaUrl: string | null
}

type NameType = Extract<keyof SubmitingDataType,string>

const LoginForm: React.FC<InjectedFormProps<SubmitingDataType,LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<NameType>(Input,'email','text','email',[required,maxLength100])}
            {createField<NameType>(Input,'password','password','password',[required,maxLength100])}
            {createField<NameType>(Input,'rememberMe','checkbox','',[])}
            {props.captchaUrl && <img src={props.captchaUrl} />}
            {props.captchaUrl && createField<NameType>(Input,'captcha','text','symbols',[required])}
            {props.error && <span className={c.error}>{props.error}</span>}
            <button>Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<SubmitingDataType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm)

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchToPropsType = {
    reset: (form: string) => FormAction
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    logout: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const LoginPage: React.FC<PropsType> = props => {
    const submit = (data: SubmitingDataType) => {
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

const mapStateToProps = (state: GlobalStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captcha
})


export default connect<MapStateToPropsType,MapDispatchToPropsType,{},GlobalStateType>(mapStateToProps,{reset,login,logout})(LoginPage)