
import {creatorAddPostAction,creatorUpdateNewPostMsgAction} from '../../../../Redux/ProfilePageReducer'
import PostForm from './PostForm';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    newPostMsg: state.profilePage.newPostMsg
});

const mapDispatchToProps = dispatch => ({
    addPost: (time) => {
        dispatch(creatorAddPostAction(time));
    },
    updateNewPost: (txt) => {
        dispatch(creatorUpdateNewPostMsgAction(txt));
    }
});
const PostFormConatiner = connect(mapStateToProps,mapDispatchToProps)(PostForm);

export default PostFormConatiner;