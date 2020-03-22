import React,{useState} from 'react'
import { connect } from 'react-redux'
import {editStatus,setStatus} from '../../../../Redux/ProfilePageReducer'
import c from './../ProfileInfo.module.css'
import { GlobalStateType } from '../../../../Redux/redux-store'

type OwnProps = {
    isOwner: boolean
}

type MapDispatchProps = {
    editStatus: (status: string) => void
    setStatus: (status: string) => void
}

type MapStateProps = {
    status: string
}

type Props = OwnProps & MapDispatchProps & MapStateProps

const ProfileStatusWithHooks: React.FC<Props> = props => {

    const [editMode,setEditMode] = useState(false)
    
    const toSwitchOnEditMode = () => {
        setEditMode(true)
    }
    const toSwitchOffEditMode = () => {
        setEditMode(false)
        props.setStatus(props.status)
    }
    const onChangeHandler = (e :React.ChangeEvent<HTMLInputElement>) => {
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

const mapStateToProps = (state: GlobalStateType): MapStateProps => ({
    status: state.profilePage.status,
})

export default connect<MapStateProps,MapDispatchProps,OwnProps,GlobalStateType>(mapStateToProps,{editStatus,setStatus})(ProfileStatusWithHooks)