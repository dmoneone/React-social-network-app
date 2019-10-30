import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
        <content className={classes.profile_content}>
            <div className={classes.img_block}>
                <img src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg"/>
            </div>
            
            <div className={classes.prfile_block}>
                ava + descr
            </div>
            <MyPosts/>
            
        </content>
    );
}

export default Profile;