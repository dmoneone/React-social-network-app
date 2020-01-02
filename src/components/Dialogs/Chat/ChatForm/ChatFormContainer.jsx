import React from 'react';
import {creatorSendMsgAction} from '../../../../Redux/DialogsPageReducer';
import ChatForm from './ChatForm';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
 
})

const mapDispatchToProps = (dispatch) => ({
    sendMsg: (newMsg) => {
        dispatch(creatorSendMsgAction(newMsg))
    }
})

const ChatFormContainer = connect(mapStateToProps,mapDispatchToProps)(ChatForm);

export default ChatFormContainer;