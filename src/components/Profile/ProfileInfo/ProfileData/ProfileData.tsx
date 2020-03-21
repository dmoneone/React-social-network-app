import React, { useState } from 'react'
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import c from '../ProfileInfo.module.css';
import { ProfileType } from '../../../../Redux/ProfilePageReducer';

type PropsType = {
    profile: ProfileType
    isOwner: boolean
}

const ProfileData: React.FC<PropsType> = props => {
    const [showContacts,setShowContacts] = useState(false)
    return (
       <>
       <div className={c.bio_wrap}>
                    <span className={c.name}>{props.profile.fullName}</span>
                    <ProfileStatusWithHooks isOwner={props.isOwner}/>
                    <span className={c.txt}>Looking for a job: {props.profile.lookingForAJob ? 'yep' : 'none'}</span>
                    <span className={c.txt}>Looking for a job descr: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'none'}</span>
                    <span className={c.txt}>About me: {props.profile.aboutMe ? props.profile.aboutMe : 'none'}</span>
                </div>
                <div className={c.contacts_wrap}>
                    {!showContacts ? <button className={c.btn_show_hide_contacts} onClick={() => setShowContacts(true)}>Show Contacts</button> :
                    <button onClick={() => setShowContacts(false)} className={c.btn_show_hide_contacts}>Hide Contacts</button>}
                    {
                        showContacts && <ul className={c.contacts}>
                        <li>Contacts: </li>
                        {
                            Object
                                .keys(props.profile.contacts)
                                //@ts-ignore
                                .map((key: Extract<keyof typeof props.profile.contacts,string>, index: number) => {
                                //@ts-ignore
                                    return (
                                       <li key={index + Math.random()}>
                                           <span>{key + ': '}</span>
                                           {props.profile.contacts[key] ?
                                           <a target="_blank" href={props.profile.contacts[key]}>{props.profile.contacts[key]}</a> : 'none'}
                                       </li>
                                    )
                                })
                        }
                        </ul>
                    }
                </div>
       </>
    )
}

export default ProfileData