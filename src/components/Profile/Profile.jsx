import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    return (
        <content className={classes.content}>
            <div className={classes.main_img}>
                <img src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg"/>
            </div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     addPost={props.addPost}
                     replaceNewPostMsg={props.replaceNewPostMsg}
            />
        </content>
    );
}

export default Profile;