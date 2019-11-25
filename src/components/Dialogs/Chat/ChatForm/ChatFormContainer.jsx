import React from 'react';
import {creatorUpdateNewMsgAction,creatorSendMsgAction} from '../../../../Redux/DialogsPageReducer';
import ChatForm from './ChatForm';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    newMsg: state.dialogsPage.newMsg
})

const mapDispatchToProps = (dispatch) => ({
    sendMsg: () => {
        dispatch(creatorSendMsgAction())
    },
    updateNewMsg: (newMsg) => {
        dispatch(creatorUpdateNewMsgAction(newMsg))
    }
})

const ChatFormContainer = connect(mapStateToProps,mapDispatchToProps)(ChatForm);

export default ChatFormContainer;