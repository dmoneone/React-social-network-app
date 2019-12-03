import React from 'react';
import classes from './Post.module.css';


const Post = props => {
    const span_msg = React.createRef();
    const btnRmvPost = e => {
        props.rmvPost(span_msg.current.textContent)
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