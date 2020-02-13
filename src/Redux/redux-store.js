import {combineReducers,createStore, compose} from 'redux'
import profilePageReducer from './ProfilePageReducer.ts'
import dialogsPageReducer from './DialogsPageReducer'
import navComponentReducer from './NavComponentReducer'
import usersPageReducer from './UsersReducer.ts'
import AuthReducer from './AuthReducer.ts'
import thunkMiddleware from 'redux-thunk'; 
import {applyMiddleware} from 'redux'; 
import NewsReducer from './NewsReducer.ts'
import { reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer.ts'
import TodoListReducer from './TodoListReducer.ts'


const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navComponent: navComponentReducer,
    usersPage: usersPageReducer,
    auth: AuthReducer,
    news: NewsReducer,
    form: formReducer,
    app: AppReducer,
    toDoList: TodoListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.__store__ = store;

export default store;