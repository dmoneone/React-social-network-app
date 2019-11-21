import React from 'react';
import {creatorAddPostAction,creatorUpdateNewPostMsgAction} from '../../../../Redux/ProfilePageReducer'


const PostForm = (props) => {

    const timeConverter = UNIX_timestamp => {
        let t = new Date(UNIX_timestamp*1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = t.getFullYear();
        let month = months[t.getMonth()];
        let date = t.getDate();
        let hour = t.getHours();
        let min = (t.getMinutes() < 10) ? "0"+t.getMinutes() : t.getMinutes();
        let sec = (t.getSeconds() < 10) ? "0"+t.getSeconds() : t.getSeconds();
        let dateTime = date+' '+month+' '+year+' '+hour+':'+min+':'+sec ;
        return dateTime;
    }

    const addPost = e => {
        let now = Math.floor(Date.now()/1000);
        props.dispatch(creatorAddPostAction(timeConverter(now)));
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