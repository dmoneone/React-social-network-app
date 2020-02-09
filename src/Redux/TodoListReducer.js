import { ToDoList_API } from "../API/api"
import { updateObjectInArray } from "./object-helpers"
import { stopSubmit } from "redux-form"

const initialState = {
    todoList: [],
    error: null
}

const todoListReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'social-network/NewsReducer/SET-TODO-LIST': {
            return {
                ...state,
                todoList: action.list
            }
        }
        case 'social-network/NewsReducer/SAVE-NEW-ITEM': {
            return {
                ...state,
                todoList: [...state.todoList,action.item]
            }
        }
        case 'social-network/NewsReducer/REMOVE_ITEM': {
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.id)
            }
        }
        case 'social-network/NewsReducer/UPDATE': {
            return {
                ...state,
                todoList: updateObjectInArray(state.todoList,action.id,'id',{title: action.title})
            }
        }
        default: return state
    }
}

const SET_TODO_LIST = 'social-network/NewsReducer/SET-TODO-LIST'
const SAVE_NEW_ITEM = 'social-network/NewsReducer/SAVE-NEW-ITEM'
const REMOVE_ITEM = 'social-network/NewsReducer/REMOVE_ITEM'
const UPDATE_ITEM = 'social-network/NewsReducer/UPDATE'

const setToDoList = (list) => ({
    type: SET_TODO_LIST,
    list
})
const saveNewItem = (item) => ({
    type: SAVE_NEW_ITEM,
    item
})
const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id
})
const updateItem = (id,title) => ({
    type: UPDATE_ITEM,
    id,
    title
})

export const getToDoList = () => async dispatch => {
    const res = await ToDoList_API.getToDoList()
    if(res.status === 200) {
        dispatch(setToDoList(res.data))
    }
}

export const addNewToDoListItem = (title) => async dispatch => {
    const res = await ToDoList_API.addToDoListItem(title)
    switch(res.resultCode) {
        case 0: {
            dispatch(saveNewItem(res.data.item))
            break
        }
        case 1: {
            const error_msg = res.messages.length > 0 ? res.messages[0] : 'some error'
            dispatch(stopSubmit('toDo-list-form',{_error: error_msg}))
            break
        }
    }
}

export const removeToDoListItem = (id) => async dispatch => {
    await ToDoList_API.removeToDoListItem(id)
    dispatch(removeItem(id))
}

export const updateToDoListItem = (title,id) => async dispatch => {
    const res = await ToDoList_API.updateToDoListItem(title,id)
    if(res.resultCode === 0) {
        dispatch(updateItem(id,title))
    }
    
}


export default todoListReducer