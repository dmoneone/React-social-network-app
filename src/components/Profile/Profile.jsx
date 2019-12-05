import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
const Profile = (props) => {
    
    return (
        <content className={classes.content}>
            <div className={classes.main_img}>
                <img src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg"/>
            </div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </content>
    );
}

export default Profile;