import React from 'react';
import {connect} from 'react-redux';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
    postsData: state.profilePage.postsData
})



const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;