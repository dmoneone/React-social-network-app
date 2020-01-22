import React from 'react'
import { connect } from 'react-redux'
import {editStatus,setStatus} from '../../../../Redux/ProfilePageReducer'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    toSwitchOnEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    toSwitchOffEditMode() {
        this.setState({
            editMode: false
        })
        this.props.setStatus(this.props.status)
    }
    onChangeHandler = (e) => {
        this.props.editStatus(e.target.value)
    }
    render() {
        if(this.props.notReadOnly) {
            return (
                !this.state.editMode ?
                <div onClick={this.toSwitchOnEditMode}>
                    <span>{this.props.status}</span>    
                </div>
                :
                <div>
                    <input onChange={(e)=> this.onChangeHandler(e)} onBlur={this.toSwitchOffEditMode.bind(this)} type="text" value={this.props.status} autoFocus={true}/>
                </div>
            )
        } else {
            return (
                <div>
                    <span>{this.props.status}</span>    
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    status: state.profilePage.status,
})

export default connect(mapStateToProps,{editStatus,setStatus})(ProfileStatus)