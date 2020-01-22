import React, { PureComponent } from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import PostFormConatiner from './PostForm/PostFormContainer';
import {creatorRemovePostAction} from './../../../Redux/ProfilePageReducer';



class MyPosts extends PureComponent {
    render(){
        const rmvPost = (msg) => {
            this.props.removePost(msg)
        }
        const postsJSXData = this.props.postsData.map(item => (<Post message={item.msg} quantityOfLikes={item.quantityOfLikes} time={item.time} key={item.time} rmvPost={rmvPost}/>))
        return (
            <div className={classes.block}>
                <div>
                    <PostFormConatiner/>
                </div>
                
                <div className={classes.new_posts_wrap}>
                    { postsJSXData }
                </div>
            </div>
        )
    }
}

export default MyPosts;