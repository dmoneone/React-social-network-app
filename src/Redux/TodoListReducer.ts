import { ToDoList_API } from "../API/api"
import { updateObjectInArray } from "./object-helpers"
import { stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { GlobalStateType } from "./redux-store"

export type ToDoItemType = {
    title: string
    id: string
    order: number
    addedDate: string
}

const initialState = {
    todoList: [] as Array<ToDoItemType>,
    error: null as string | null
}

type StateType = typeof initialState

type SetToDoListActionType = {
    type: typeof SET_TODO_LIST
    list: Array<ToDoItemType>
}

type SaveNewItemActionType = {
    type: typeof SAVE_NEW_ITEM
    item: ToDoItemType
}

type RemoveItemActionType = {
    type: typeof REMOVE_ITEM
    id: string
}

type UpdateItemActionType = {
    type: typeof UPDATE_ITEM
    id: string
    title: string
}

type ActionsType = SetToDoListActionType | SaveNewItemActionType | RemoveItemActionType | UpdateItemActionType 

const todoListReducer = (state: StateType = initialState,action: ActionsType): StateType => {
    switch(action.type) {
        case SET_TODO_LIST: {
            return {
                ...state,
                todoList: action.list,
            }
        }
        case SAVE_NEW_ITEM: {
            return {
                ...state,
                todoList: [...state.todoList,action.item]
            }
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.id)
            }
        }
        case UPDATE_ITEM: {
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

const setToDoList = (list: Array<ToDoItemType>): SetToDoListActionType => ({
    type: SET_TODO_LIST,
    list
})
const saveNewItem = (item: ToDoItemType): SaveNewItemActionType => ({
    type: SAVE_NEW_ITEM,
    item
})
const removeItem = (id: string): RemoveItemActionType => ({
    type: REMOVE_ITEM,
    id
})
const updateItem = (id: string, title: string): UpdateItemActionType => ({
    type: UPDATE_ITEM,
    id,
    title
})

type ThunkType = ThunkAction<Promise<void>,GlobalStateType,unknown,ActionsType>

export const getToDoList = (): ThunkType => async (dispatch)=> {
    const res = await ToDoList_API.getToDoList()
    if(res.status === 200) {
        dispatch(setToDoList(res.data))
    }
}
//need to fix any
export const addNewToDoListItem = (title: string): ThunkAction<Promise<void>,GlobalStateType,unknown,any> => async (dispatch) => {
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

export const removeToDoListItem = (id: string): ThunkType => async (dispatch,getState) => {
    await ToDoList_API.removeToDoListItem(id)
    dispatch(removeItem(id))
}

export const updateToDoListItem = (title: string, id: string): ThunkType => async (dispatch) => {
    const res = await ToDoList_API.updateToDoListItem(title,id)
    if(res.resultCode === 0) {
        dispatch(updateItem(id,title))
    }
    
}


export default todoListReducer