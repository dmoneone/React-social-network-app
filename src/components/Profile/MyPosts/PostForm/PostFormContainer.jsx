
import {creatorAddPostAction} from '../../../../Redux/ProfilePageReducer'
import PostForm from './PostForm';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    newPostMsg: state.profilePage.newPostMsg
});

const mapDispatchToProps = dispatch => ({
    addPost: (time,msg) => {
        dispatch(creatorAddPostAction(time,msg));
    }
});
const PostFormConatiner = connect(mapStateToProps,mapDispatchToProps)(PostForm);

export default PostFormConatiner;