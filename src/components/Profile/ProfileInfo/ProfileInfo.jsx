import React, { useState } from 'react';
import c from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
import profileImg from '../../../assets/img/14-1User_1-128.png'
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
const ProfileInfo = props => {
    const [editMode,setEditMode] = useState(false)
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={c.block}>
            <div className={c.profile_img}>
                <img src={props.profile.photos.large ? props.profile.photos.large : profileImg}/>
            </div>
 
            <div>
                {
                  props.isOwner && (!editMode ? <button className={c.edit_mode_btn} onClick={() => setEditMode(true)}>edit</button>
                  : <button  className={c.edit_mode_btn} onClick={() => setEditMode(false)}>leave edit mode</button>)

                }
                {!editMode ?
                    <ProfileData 
                        profile={props.profile}
                        isOwner={props.isOwner}
                    />:
                    <ProfileDataForm initialValues={props.profile}/>
                }
             </div>
        </div>
    )
}

export default ProfileInfo;