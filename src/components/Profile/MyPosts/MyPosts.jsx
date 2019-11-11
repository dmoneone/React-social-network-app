import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import FormAddingPost from './Form/Form';





const MyPosts = (props) => {
    const postsJSXData = props.state.postsData.map(item => (<Post message={item.msg} quantityOfLikes={item.quantityOfLikes} key={item.msg} />))
    return (
        <div className={classes.block}>
            <div>
                <FormAddingPost addPost={props.addPost} state={props.state.postsData}/>
            </div>
            
            <div className={classes.new_posts_wrap}>
                { postsJSXData }
            </div>
        </div>
    )
}

export default MyPosts;