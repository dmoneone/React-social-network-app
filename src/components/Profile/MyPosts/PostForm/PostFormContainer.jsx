import React from 'react';
import {creatorAddPostAction,creatorUpdateNewPostMsgAction} from '../../../../Redux/ProfilePageReducer'
import PostForm from './PostForm';

const PostFormConatiner = (props) => {


    const addPost = time => {
        props.dispatch(creatorAddPostAction(time));
    }

    const updateNewPost = txt => {
        props.dispatch(creatorUpdateNewPostMsgAction(txt))
    }
    
    return (
        <PostForm addPost={addPost} updateNewPost={updateNewPost} profilePage={props.profilePage}/>
    )
}

export default PostFormConatiner;