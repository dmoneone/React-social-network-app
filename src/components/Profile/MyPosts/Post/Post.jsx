import React from 'react';
import classes from './Post.module.css';

const Post = props => {
    return (
        <div className={classes.block}>
           {props.message}
           <div>
                likes: {props.quantityOfLikes}
           </div>
           
        
        </div>
        
    )
}

export default Post;