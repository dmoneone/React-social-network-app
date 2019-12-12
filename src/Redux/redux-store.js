import {combineReducers,createStore} from 'redux'
import profilePageReducer from './ProfilePageReducer'
import dialogsPageReducer from './DialogsPageReducer'
import navComponentReducer from './NavComponentReducer'
import usersPageReducer from './UsersReducer'
import AuthReducer from './AuthReducer'
import thunkMiddleware from 'redux-thunk'; 
import {applyMiddleware} from 'redux'; 


const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navComponent: navComponentReducer,
    usersPage: usersPageReducer,
    auth: AuthReducer
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware));


window.store = store;

export default store;