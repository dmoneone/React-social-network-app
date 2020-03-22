import React, { useState } from 'react';
import c from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
import profileImg from '../../../assets/img/14-1User_1-128.png'
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import { ProfileType } from '../../../Redux/ProfilePageReducer';
import { Props } from '../Profile';

const ProfileInfo: React.FC<Props> = props => {
    const [editMode,setEditMode] = useState(false)
    if(!props.profile){
        return <Preloader/>
    }
    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files != null && e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        } 
    }
    return (
        <div className={c.block}>
            <div className={c.profile_img}>
                <img src={props.profile.photos.large ? props.profile.photos.large : profileImg}/>
                {props.isOwner && <input  className={c.choose_file_input} type='file' onChange={e => onChangeFile(e)} accept='.jpg,.jpeg,.png'/>}
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
                    <ProfileDataForm
                        initialValues={props.profile}
                        profile={props.profile}
                        setEditMode={setEditMode}
                     />
                }
             </div>
        </div>
    )
}

export default ProfileInfo;