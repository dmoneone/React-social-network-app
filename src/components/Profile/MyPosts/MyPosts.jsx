import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import PostFormConatiner from './PostForm/PostFormContainer';





const MyPosts = (props) => {
    console.log(props,"MyPosts")
    const postsJSXData = props.profilePage.postsData.map(item => (<Post message={item.msg} quantityOfLikes={item.quantityOfLikes} time={item.time} dispatch={props.dispatch} />))
    return (
        <div className={classes.block}>
            <div>
                <PostFormConatiner dispatch={props.dispatch} profilePage={props.profilePage}/>
            </div>
            
            <div className={classes.new_posts_wrap}>
                { postsJSXData }
            </div>
        </div>
    )
}

export default MyPosts;