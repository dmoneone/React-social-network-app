import {combineReducers,createStore, compose} from 'redux'
import profilePageReducer from './ProfilePageReducer'
import dialogsPageReducer from './DialogsPageReducer'
import navComponentReducer from './NavComponentReducer'
import usersPageReducer from './UsersReducer'
import AuthReducer from './AuthReducer'
import thunkMiddleware from 'redux-thunk'; 
import {applyMiddleware} from 'redux'; 
import NewsReducer from './NewsReducer'
import { reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer'


const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navComponent: navComponentReducer,
    usersPage: usersPageReducer,
    auth: AuthReducer,
    news: NewsReducer,
    form: formReducer,
    app: AppReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.__store__ = store;

export default store;