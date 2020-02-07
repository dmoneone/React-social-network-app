import React,{useState} from 'react'
import { connect } from 'react-redux'
import {editStatus,setStatus} from '../../../../Redux/ProfilePageReducer'
import c from './../ProfileInfo.module.css'

const ProfileStatusWithHooks = props => {

    const [editMode,setEditMode] = useState(false)
    
    const toSwitchOnEditMode = () => {
        setEditMode(true)
    }
    const toSwitchOffEditMode = () => {
        setEditMode(false)
        props.setStatus(props.status)
    }
    const onChangeHandler = (e) => {
        if(e.target.value.length <= 300) {
            props.editStatus(e.target.value)
        }
    }

    if(props.isOwner) {
        return (
            !editMode ?
            <div onClick={toSwitchOnEditMode}>
                <span className={c.status}>{props.status}</span>    
            </div>
            :
            <div>
                <input className={c.edit_status} onChange={(e)=> onChangeHandler(e)} onBlur={toSwitchOffEditMode} type="text" value={props.status} autoFocus={true}/>
            </div>
        )
    } else {
        return (
            <div>
                <span className={c.status}>{props.status}</span>    
            </div>
        )
    }
}

const mapStateToProps = state => ({
    status: state.profilePage.status,
})

export default connect(mapStateToProps,{editStatus,setStatus})(ProfileStatusWithHooks)