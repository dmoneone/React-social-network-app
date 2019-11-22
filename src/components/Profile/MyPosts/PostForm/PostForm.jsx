import React from 'react';
import {creatorAddPostAction,creatorUpdateNewPostMsgAction} from '../../../../Redux/ProfilePageReducer'
import {timeConverter} from './../../../../auxiliaryFunctions/TimeConvertor'

const PostForm = (props) => {


    const onAddPost = e => {
        let now = Math.floor(Date.now()/1000);
        props.addPost(timeConverter(now));
        //props.dispatch(creatorAddPostAction(timeConverter(now)));
    }

    const texareaOnChangeHandler = e => {
        props.updateNewPost(e.target.value);
        //props.dispatch(creatorUpdateNewPostMsgAction(e.target.value))
    }
    
    return (
        <div>
            <textarea onChange={texareaOnChangeHandler} cols="30" rows="10" value={props.profilePage.newPostMsg}/>
            <button onClick={onAddPost}>add</button>
        </div>
    )
}

export default PostForm;