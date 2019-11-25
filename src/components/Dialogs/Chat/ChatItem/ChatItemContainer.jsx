import React from 'react';
import {connect} from 'react-redux';
import ChatItem from './ChatItem';

const mapStateToProps = (state) => ({
    messages: state.dialogsPage.messages
})

const ChatItemContainer = connect(mapStateToProps)(ChatItem)

export default ChatItemContainer;