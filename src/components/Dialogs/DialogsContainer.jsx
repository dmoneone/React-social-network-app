import {connect} from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
    chatList: state.dialogsPage.chatList,
    messagesList: state.dialogsPage.messagesList,
    isAuth: state.auth.isAuth
})
const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;