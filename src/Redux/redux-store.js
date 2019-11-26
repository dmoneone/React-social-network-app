import {combineReducers,createStore} from 'redux';
import profilePageReducer from './ProfilePageReducer';
import dialogsPageReducer from './DialogsPageReducer';
import navComponentReducer from './NavComponentReducer';
import usersPageReducer from './UsersReducer';

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navComponent: navComponentReducer,
    usersPage: usersPageReducer
})

const store = createStore(reducers);

console.log(store)

export default store;