import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';





const MyPosts = (props) => {
    const postsJSXData = props.profilePage.postsData.map(item => (<Post message={item.msg} quantityOfLikes={item.quantityOfLikes} />))
    return (
        <div className={classes.block}>
            <div>
                <PostForm dispatch={props.dispatch} profilePage={props.profilePage}/>
            </div>
            
            <div className={classes.new_posts_wrap}>
                { postsJSXData }
            </div>
        </div>
    )
}

export default MyPosts;