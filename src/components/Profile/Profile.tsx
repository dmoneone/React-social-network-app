import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../Redux/ProfilePageReducer';

export type Props = {
    profile: ProfileType
    isOwner: boolean
    updatePhoto: (photo: any) => void
}

const Profile: React.FC<Props> = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.main_img}>
                <img src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg"/>
            </div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;