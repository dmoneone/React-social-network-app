import React,{useState} from 'react'
import { connect } from 'react-redux'
import {editStatus,setStatus} from '../../../../Redux/ProfilePageReducer'

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
        props.editStatus(e.target.value)
    }

    if(props.notReadOnly) {
        return (
            !editMode ?
            <div onClick={toSwitchOnEditMode}>
                <span>{props.status}</span>    
            </div>
            :
            <div>
                <input onChange={(e)=> onChangeHandler(e)} onBlur={toSwitchOffEditMode} type="text" value={props.status} autoFocus={true}/>
            </div>
        )
    } else {
        return (
            <div>
                <span>{props.status}</span>    
            </div>
        )
    }
}

const mapStateToProps = state => ({
    status: state.profilePage.status,
})

export default connect(mapStateToProps,{editStatus,setStatus})(ProfileStatusWithHooks)