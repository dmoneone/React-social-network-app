import React from 'react';
import {creatorAddPostAction,creatorUpdateNewPostMsgAction} from '../../../../Redux/state'


const PostForm = (props) => {
    const textArea = React.createRef();

    const addPost = e => {
        props.dispatch(creatorAddPostAction());
    }

    const texareaOnChangeHandler = e => {
        props.dispatch(creatorUpdateNewPostMsgAction(textArea.current.value))
    }
    
    return (
        <div>
            <textarea onChange={texareaOnChangeHandler} ref={textArea} cols="30" rows="10" value={props.profilePage.newPostMsg}/>
            <button onClick={addPost}>add</button>
        </div>
    )
}

export default PostForm;