import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const postData = [
    {msg: "jopa", quantityOfLikes: 10},
    {msg: "Chlen", quantityOfLikes: 100}
];

const postJSXData = postData.map(item => (<Post message={item.msg} quantityOfLikes={item.quantityOfLikes}/>))

const MyPosts = () => {
    return (
        <div className={classes.block}>
            My posts
            
            <div className={classes.new_posts_wrap}>
                { postJSXData }
            </div>
        </div>
    )
}

export default MyPosts;