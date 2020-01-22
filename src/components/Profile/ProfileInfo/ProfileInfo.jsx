import React from 'react';
import c from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
import profileImg from '../../../assets/img/14-1User_1-128.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
const ProfileInfo = props => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={c.block}>
            <div className={c.profile_img}>
                <img src={props.profile.photos.large ? props.profile.photos.large : profileImg}/>
            </div>

            <div>
                <span className={c.name}>{props.profile.fullName}</span>
                <ProfileStatusWithHooks notReadOnly={props.notReadOnly}/>
                <span className={c.about}>{props.profile.aboutMe}</span>
             </div>
        </div>
    )
}

export default ProfileInfo;