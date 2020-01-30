import React, { useState } from 'react'
import ProfileStatusWithHooks from './../ProfileStatus/ProfileStatusWithHooks';
import c from '../ProfileInfo.module.css';

const ProfileData = props => {
    const [showContacts,setShowContacts] = useState(false)
    const contacts = []
    for(const prop in props.profile.contacts) {
        contacts.push({name: prop,url: props.profile.contacts[prop]})
    }
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
                            contacts.map((item,index) => {
                                const name = item.name[0] !== item.name[0].toLocaleUpperCase()
                                ? item.name[0].toLocaleUpperCase() + item.name.slice(1) : item.name 
                                return (
                                <li key={index + Math.random()}>{name + ': ' + (item.url ? item.url : 'none')}</li>
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