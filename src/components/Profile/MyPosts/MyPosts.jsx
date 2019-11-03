import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.block}>
            My posts
            
            <div className={classes.new_posts_wrap}>
                <Post message="Jopa" quantityOfLikes="10"/>
                <Post message="Chlen" quantityOfLikes="7"/>
            </div>
        </div>
    )
}

export default MyPosts;