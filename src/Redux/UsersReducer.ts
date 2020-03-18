import {Users_API} from "../API/api";
import { updateObjectInArray } from "./object-helpers";
import { PhotosType} from './ProfilePageReducer'
import { Dispatch } from "redux";
import { GlobalStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: ''
    followed: boolean
}

const initialState = {
    users: [] as Array<UserType>,
    usersQuantity: 0,
    usersQuantityOnPage: 30,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    itemsQuantityInPortion: 7
    
}

type StateType = typeof initialState

type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}

type UnFollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    c: number
}

type SetUsersQunatityActionType = {
    type: typeof SET_USERS_QUANTITY
    q: number
}

type SetFetchingActionType = {
    type: typeof SET_FETCHING
    bool: boolean
}

type SetFollowingInProgressActionType = {
    type: typeof SET_FOLLOWING_IN_PROGRESS
    bool: boolean
    id: number
}

type ActionsType = FollowActionType | UnFollowActionType | SetUsersActionType | SetCurrentPageActionType | SetUsersQunatityActionType | SetFetchingActionType | SetFollowingInProgressActionType

const usersPageReducer = (state: StateType = initialState,action: ActionsType): StateType => {
    switch(action.type){
        case FOLLOW:
        return {
            ...state,
            users: updateObjectInArray(state.users,action.userId,'id',{followed: true})
        }

        case UNFOLLOW:
        return {
            ...state,
            users: updateObjectInArray(state.users,action.userId,'id',{followed: false})
        }

        case SET_USERS:
        return{
            ...state,
            users: [...action.users],
        }
        
        case SET_CURRENT_PAGE:    
        return {
            ...state,
            currentPage: action.c
        }

        case SET_USERS_QUANTITY:
        return {
            ...state,
            usersQuantity: action.q
        }

        case SET_FETCHING:
        return {
            ...state,
            isFetching: action.bool
        }

        case SET_FOLLOWING_IN_PROGRESS: 
        return {
            ...state,
            followingInProgress: action.bool ?
                                 [...state.followingInProgress,action.id] :
                                 state.followingInProgress.filter(id => id !== action.id)
        }

        default: return state;
    }
}

const FOLLOW = 'social-network/UsersReducer/FOLLOW'
const UNFOLLOW = 'social-network/UsersReducer/UNFOLLOW'
const SET_USERS = 'social-network/UsersReducer/SET-USERS'
const SET_CURRENT_PAGE = 'social-network/UsersReducer/SET-CURRENT-PAGE'
const SET_USERS_QUANTITY = 'social-network/UsersReducer/SET-USERS-QUANTITY'
const SET_FETCHING = 'social-network/UsersReducer/SET-FETCHING'
const SET_FOLLOWING_IN_PROGRESS = 'social-network/UsersReducer/SET-FOLLOWING-IN-PROGRESS'

export type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>,GlobalStateType,unknown,ActionsType>

export const follow = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollow = (userId: number): UnFollowActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (c: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, c})
export const setUsersQunatity = (q: number): SetUsersQunatityActionType => ({type: SET_USERS_QUANTITY, q})
export const setFetching = (bool: boolean): SetFetchingActionType => ({type: SET_FETCHING, bool})
export const setFollowingInProgress = (bool: boolean, id: number): SetFollowingInProgressActionType => ({type: SET_FOLLOWING_IN_PROGRESS, bool, id})

const followUnfollowFlow = async (apiMethod: any, action: (id: number) => ActionsType, id: number, dispatch: DispatchType) => {
    dispatch(setFollowingInProgress(true,id))
    const data = await apiMethod(id)
    if(data.resultCode === 0) {
        dispatch(action(id))
    }
    dispatch(setFollowingInProgress(false,id)) 
}

export const gettingFollow = (id: number): ThunkType => async (dispatch,getState) => {
    followUnfollowFlow(Users_API.followUser,follow,id,dispatch)
}

export const gettingUnfollow = (id: number): ThunkType => async (dispatch,getState) => {
    followUnfollowFlow(Users_API.unfollowUser,unfollow,id,dispatch)
}

export const getUsers = (currentPage: number, usersQuantityOnPage: number): ThunkType => async (dispatch,getState) => {
        dispatch(setFetching(true))
        const data = await Users_API.getUsers(currentPage,usersQuantityOnPage)
        dispatch(setFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersQunatity(data.totalCount))
}

export default usersPageReducer;

