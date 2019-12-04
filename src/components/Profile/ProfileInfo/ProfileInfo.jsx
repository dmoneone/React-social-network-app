import React from 'react';
import c from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
const ProfileInfo = props => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={c.block}>
            ava + descr
            <img src={props.profile.photos.large}/>
        </div>
    )
}

export default ProfileInfo;