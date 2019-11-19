import React from 'react';
import {creatorAddPostAction,creatorUpdateNewPostMsgAction} from '../../../../Redux/ProfilePageReducer'


const PostForm = (props) => {

    const addPost = e => {
        props.dispatch(creatorAddPostAction());
    }

    const texareaOnChangeHandler = e => {
        props.dispatch(creatorUpdateNewPostMsgAction(e.target.value))
    }
    
    return (
        <div>
            <textarea onChange={texareaOnChangeHandler} cols="30" rows="10" value={props.profilePage.newPostMsg}/>
            <button onClick={addPost}>add</button>
        </div>
    )
}

export default PostForm;