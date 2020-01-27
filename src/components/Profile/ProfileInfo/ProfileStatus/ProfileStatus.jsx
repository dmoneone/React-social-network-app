import React from 'react'
import { connect } from 'react-redux'
import {editStatus,setStatus} from '../../../../Redux/ProfilePageReducer'

export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        fakeProp: this.props.fakeProp
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
        if(/*this.props.notReadOnly*/true) {
            return (
                !this.state.editMode ?
                <span className='test' onClick={this.toSwitchOnEditMode}>{this.props.status}</span>    
                :
                <input onChange={(e)=> this.onChangeHandler(e)} onBlur={this.toSwitchOffEditMode.bind(this)} type="text" value={this.props.status} autoFocus={true}/>
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