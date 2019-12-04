import React from 'react';
import c from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
const ProfileInfo = props => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={c.block}>
             <img src={props.profile.photos.large}/>
             <span>{props.profile.aboutMe}</span>
             <span>{props.profile.fullName}</span>
        </div>
    )
}

export default ProfileInfo;