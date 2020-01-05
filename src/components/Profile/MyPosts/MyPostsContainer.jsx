import React from 'react';
import {connect} from 'react-redux';
import MyPosts from './MyPosts';
import {creatorRemovePostAction} from './../../../Redux/ProfilePageReducer';

const mapStateToProps = (state) => ({
    postsData: state.profilePage.postsData
})

const mapDispatchToProps = dispatch => ({
    removePost(i) {
        dispatch(creatorRemovePostAction(i))
    }
})

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;