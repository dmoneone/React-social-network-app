import {combineReducers,createStore} from 'redux';
import profilePageReducer from './ProfilePageReducer';
import dialogsPageReducer from './DialogsPageReducer';
import navComponentReducer from './NavComponentReducer';

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navComponent: navComponentReducer
})

const store = createStore(reducers);

console.log(store)

export default store;