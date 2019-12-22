import React from 'react'
import { connect } from 'react-redux'
import {editStatus} from '../../../../Redux/ProfilePageReducer'

class ProfileStatus extends React.Component {
    state = {
        editMode: true
    }
    toSwitchOnEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    toSwitchOffEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    onChangeHandler = (e) => {
        this.props.editStatus(e.target.value)
    }
    render() {
        return (
            !this.state.editMode ?
            <div onClick={this.toSwitchOnEditMode}>
                <span>{this.props.status}</span>    
            </div>
            :
            <div>
                <input onChange={(e)=> this.onChangeHandler(e)} onBlur={this.toSwitchOffEditMode} type="text" value={this.props.status} autoFocus={true}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    status: state.profilePage.status
})

export default connect(mapStateToProps,{editStatus})(ProfileStatus)