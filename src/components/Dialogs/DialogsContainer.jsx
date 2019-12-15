import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {withAuthRedirect} from '../../HOCS/withAuthRedirect'

const mapStateToProps = (state) => ({
    chatList: state.dialogsPage.chatList,
    messagesList: state.dialogsPage.messagesList,
})

const DialogsContainer = connect(mapStateToProps)(withAuthRedirect(Dialogs));

export default DialogsContainer;