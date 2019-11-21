import React from 'react';
import classes from './Post.module.css';
import {creatorRemovePostAction} from '../../../../Redux/ProfilePageReducer';

const Post = props => {
    const span_msg = React.createRef();
    const btnRmvPost = e => {
        props.dispatch(creatorRemovePostAction(span_msg.current.textContent));
    }
    return (
        <div className={classes.block}>
           <span ref={span_msg}>{props.message}</span>
            <span>{props.time}</span>
           <div>
                likes: {props.quantityOfLikes}
                <button onClick={btnRmvPost}>removePost</button>
           </div>
           
        
        </div>
        
    )
}

export default Post;