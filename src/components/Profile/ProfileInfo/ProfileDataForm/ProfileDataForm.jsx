import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { saveProfileChanges} from '../../../../Redux/ProfilePageReducer'
import { required,maxLength } from '../../../../form_validation_checks/formChecks'
import { connect } from 'react-redux';
import { Input } from '../../../FormComponents/FormComponents';
import c from './ProfileDataForm.module.css'

const maxLength100 = maxLength(100)


const ProfileDataForm = (props) => {
    return (
        <form className={c.form} onSubmit={props.handleSubmit}>
            <div className={c.field}><span>fullName: </span> <Field name="fullName" component={Input} type="text" validate={[maxLength100,required]}/></div>
            <div className={c.field}><span>aboutMe: </span> <Field name="aboutMe" component={Input} type="text" validate={[maxLength100]}/></div>
            <div className={c.field}><span>lookingForAJob: </span> <Field name="lookingForAJob" component={Input} type="checkbox"/></div>
            <div className={c.field}><span>lookingForAJobDescription: </span> <Field name="lookingForAJobDescription" validate={[maxLength100]} component={Input} type="text"/></div>
            {props.error && <span>{props.error}</span>}
            <button className={c.save_btn}>Save</button>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({
    form: 'profile-data-form',
  })(ProfileDataForm)

const ProfileForm = props => {
    const submit = data => {
        props.saveProfileChanges(data)
    }
    return (
        <div>
            <ProfileDataReduxForm onSubmit={submit} initialValues={props.initialValues}/>
        </div>
    )
}



export default connect(null,{saveProfileChanges})(ProfileForm)