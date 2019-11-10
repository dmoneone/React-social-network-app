import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';





const MyPosts = (props) => {
    const postsJSXData = props.state.postsData.map(item => (<Post message={item.msg} quantityOfLikes={item.quantityOfLikes} key={item.msg} />))
    return (
        <div className={classes.block}>
            My posts
            
            <div className={classes.new_posts_wrap}>
                { postsJSXData }
            </div>
        </div>
    )
}

export default MyPosts;