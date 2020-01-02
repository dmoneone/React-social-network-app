import React from 'react';
import {timeConverter} from './../../../../auxiliaryFunctions/TimeConvertor'
import c from './PostForm.module.css'
import { reduxForm, Field } from 'redux-form'

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="msg" component='textarea' className={c.textarea} cols="30" rows="10"/>
            <button className={c.add_post_btn}>add</button>
        </form>
    )
}

const PostReduxForm = reduxForm({
    // a unique name for the form
    form: 'post-form'
  })(PostForm)

const PostFormWrap = (props) => {

    const submit = data => {
        console.log(data)
        let now = Math.floor(Date.now()/1000);
        props.addPost(timeConverter(now),data.msg);
    }

    return (
        <PostReduxForm onSubmit={submit}/>
    )
}

export default PostFormWrap;