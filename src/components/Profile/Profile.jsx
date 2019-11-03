import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
        <content className={classes.content}>
            <div className={classes.main_img}>
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