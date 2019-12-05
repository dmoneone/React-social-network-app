import {combineReducers,createStore} from 'redux';
import profilePageReducer from './ProfilePageReducer';
import dialogsPageReducer from './DialogsPageReducer';
import navComponentReducer from './NavComponentReducer';
import usersPageReducer from './UsersReducer';
import AuthReducer from './AuthReducer';

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navComponent: navComponentReducer,
    usersPage: usersPageReducer,
    auth: AuthReducer
})

const store = createStore(reducers);


window.store = store;

export default store;