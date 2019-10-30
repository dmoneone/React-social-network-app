import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div className={classes.my_posts_block}>
            My posts
            
            <div className={classes.new_posts_wrap}>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;