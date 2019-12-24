import React from 'react'
import { connect } from 'react-redux'
import {editStatus} from '../../../../Redux/ProfilePageReducer'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    componentDidMount() {
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
    }
    onChangeHandler = (e) => {
        this.props.editStatus(e.target.value)
        this.props.setStatus(e.target.value)
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

export default connect(mapStateToProps,{editStatus})(ProfileStatus)