import React from 'react';
import {creatorAddPostAction,creatorUpdateNewPostMsgAction} from '../../../../Redux/ProfilePageReducer'
import {timeConverter} from './../../../../auxiliaryFunctions/TimeConvertor'
import c from './PostForm.module.css'

const PostForm = (props) => {

    const onAddPost = e => {
        let now = Math.floor(Date.now()/1000);
        props.addPost(timeConverter(now));
    }

    const texareaOnChangeHandler = e => {
        props.updateNewPost(e.target.value);
    }
    return (
        <div>
            <textarea className={c.textarea} onChange={texareaOnChangeHandler} cols="30" rows="10" value={props.newPostMsg}/>
            <button className={c.add_post_btn} onClick={onAddPost}>add</button>
        </div>
    )
}

export default PostForm;