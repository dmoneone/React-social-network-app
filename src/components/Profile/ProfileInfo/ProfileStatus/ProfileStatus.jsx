import React from 'react'

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
    render() {
        return (
            !this.state.editMode ?
            <div onClick={this.toSwitchOnEditMode}>
                <span>{this.props.status}</span>    
            </div>
            :
            <div>
                <input onBlur={this.toSwitchOffEditMode} type="text" value={this.props.status} autoFocus={true}/>
            </div>
        )
    }
}

export default ProfileStatus