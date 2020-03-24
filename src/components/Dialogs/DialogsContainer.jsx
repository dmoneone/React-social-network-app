import {connect} from 'react-redux'
import Dialogs from './Dialogs'
import {withAuthRedirect} from '../../HOCS/withAuthRedirect'
import { compose } from 'redux'

export default compose(
    connect(null,null),
    withAuthRedirect
)(Dialogs)