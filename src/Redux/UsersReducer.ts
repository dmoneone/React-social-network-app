import {Users_API} from "../API/api";
import { updateObjectInArray } from "./object-helpers";
import { PhotosType} from './ProfilePageReducer'

type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: ''
    followed: boolean
}

const initialState = {
    users: [] as Array<UserType>,
    usersQuantity: null as number | null,
    usersQuantityOnPage: 30,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    itemsQuantityInPortion: 7
    
}

type StateType = typeof initialState

const usersPageReducer = (state: StateType = initialState,action: any): StateType => {
    switch(action.type){
        case 'social-network/UsersReducer/FOLLOW':
        return {
            ...state,
            users: updateObjectInArray(state.users,action.userId,'id',{followed: true})
        }

        case 'social-network/UsersReducer/UNFOLLOW':
        return {
            ...state,
            users: updateObjectInArray(state.users,action.userId,'id',{followed: false})
        }

        case 'social-network/UsersReducer/SET-USERS':
        return{
            ...state,
            users: [...action.users]
        }
        
        case 'social-network/UsersReducer/SET-CURRENT-PAGE':    
        return {
            ...state,
            currentPage: action.c
        }

        case 'social-network/UsersReducer/SET-USERS-QUANTITY':
        return {
            ...state,
            usersQuantity: action.q
        }

        case 'social-network/UsersReducer/SET-FETCHING':
        return {
            ...state,
            isFetching: action.bool
        }

        case 'social-network/UsersReducer/SET-FOLLOWING-IN-PROGRESS': 
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

type SetCurrentPageActionType = {
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


export const follow = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollow = (userId: number): UnFollowActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (c: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, c})
export const setUsersQunatity = (q: number): SetUsersQunatityActionType => ({type: SET_USERS_QUANTITY, q})
export const setFetching = (bool: boolean): SetFetchingActionType => ({type: SET_FETCHING, bool})
export const setFollowingInProgress = (bool: boolean, id: number): SetFollowingInProgressActionType => ({type: SET_FOLLOWING_IN_PROGRESS, bool, id})

const followUnfollowFlow = async (apiMethod: Function,action: any,id: number,dispatch: Function) => {
    dispatch(setFollowingInProgress(true,id))
    const data = await apiMethod(id)
    if(data.resultCode === 0) {
        dispatch(action(id))
    }
    dispatch(setFollowingInProgress(false,id)) 
}

export const gettingFollow = (id: number) => (dispatch: Function) => {
    followUnfollowFlow(Users_API.followUser,follow,id,dispatch)
}

export const gettingUnfollow = (id: number) => (dispatch: Function) => {
    followUnfollowFlow(Users_API.unfollowUser,unfollow,id,dispatch)
}

export const getUsers = (currentPage: number, usersQuantityOnPage: number) => async (dispatch: Function) => {
        dispatch(setFetching(true))
        const data = await Users_API.getUsers(currentPage,usersQuantityOnPage)
        dispatch(setFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersQunatity(data.totalCount))
}

export default usersPageReducer;

