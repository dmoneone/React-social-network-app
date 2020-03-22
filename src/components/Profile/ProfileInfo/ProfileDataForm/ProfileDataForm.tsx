import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { saveProfileChanges, ProfileType} from '../../../../Redux/ProfilePageReducer'
import { required,maxLength,url } from '../../../../form_validation_checks/formChecks'
import { connect } from 'react-redux';
import { Input } from '../../../FormComponents/FormComponents';
import c from './ProfileDataForm.module.css'
import { GlobalStateType } from '../../../../Redux/redux-store';
import { ThunkAction } from 'redux-thunk';

const maxLength100 = maxLength(100)

export type SubmitingDataType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

type DataFormOwnProps = {
    initialValues: ProfileType
    profile: ProfileType
}

const ProfileDataForm:React.FC<InjectedFormProps<SubmitingDataType,DataFormOwnProps> & DataFormOwnProps> = (props) => {
    let contacts = [], prop: keyof typeof props.profile.contacts
    for(prop in props.profile.contacts) {
        contacts.push({name: prop,url: props.profile.contacts[prop]})
    }
    return (
        <form className={c.form} onSubmit={props.handleSubmit}>
            <div className={c.field}>
                <span>fullName: </span>
                 <Field name="fullName" component={Input} type="text" validate={[maxLength100,required]}/>
            </div>
            <div className={c.field}>
                <span>aboutMe: </span>
                <Field name="aboutMe" component={Input} type="text" validate={[maxLength100]}/>
            </div>
            <div className={c.field}>
                <span>lookingForAJob: </span>
                 <Field name="lookingForAJob" component={Input} type="checkbox"/>
            </div>
            <div className={c.field}>
                <span>lookingForAJobDescription: </span>
                <Field name="lookingForAJobDescription" validate={[maxLength100]} component={Input} type="text"/>
            </div>
            {
                Object
                    .keys(props.profile.contacts)
                    .map((key, index) => {
                        return (
                            <div className={c.field} key={index + Math.random()}>
                                <span>{key}: </span> <Field name={'contacts.' + key} component={Input} type="text" />
                            </div>
                        )
                    })
            }
            {props.error && <span className={c.error}>{props.error}</span>}
            <button className={c.save_btn}>Save</button>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm<SubmitingDataType, DataFormOwnProps>({
    form: 'profile-data-form',
})(ProfileDataForm)

type MapDispatchToPropsType = {
    saveProfileChanges: (payload: SubmitingDataType) => Promise<void>
}

type OwnPropsType = {
    initialValues: ProfileType
    profile: ProfileType
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

type PropsType = MapDispatchToPropsType & OwnPropsType

const ProfileForm: React.FC<PropsType> = props => {
    const submit = (data: SubmitingDataType) => {
        props.saveProfileChanges(data)
            .then(() => {
                props.setEditMode(false)
            })
            .catch(er => console.log(er))
    }
    return (
        <div>
            <ProfileDataReduxForm 
                onSubmit={submit}
                initialValues={props.initialValues}
                profile={props.profile}
             />
        </div>
    )
}

//i must fix it
//@ts-ignore 
export default connect<{},MapDispatchToPropsType,{},GlobalStateType>(null,{saveProfileChanges})(ProfileForm)