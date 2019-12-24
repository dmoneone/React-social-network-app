import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Redirect } from 'react-router-dom';
const Profile = (props) => {
    if(!props.isAuth) return <Redirect to='/login'/>
    return (
        <content className={classes.content}>
            <div className={classes.main_img}>
                <img src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg"/>
            </div>
            <ProfileInfo profile={props.profile} setStatus={props.setStatus} notReadOnly={props.notReadOnly}/>
            <MyPostsContainer/>
        </content>
    );
}

export default Profile;