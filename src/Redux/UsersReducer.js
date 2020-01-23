import {Users_API} from "../API/api";
import { updateObjectInArray } from "./object-helpers";

const initialState = {
    users: [
    ],
    usersQuantity: Number,
    usersQuantityOnPage: 30,
    currentPage: 1,
    pagesQuantity: Number,
    isFetching: false,
    followingInProgress: [],
    
}

const usersPageReducer = (state = initialState,action) => {
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

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (c) => ({type: SET_CURRENT_PAGE, c})
export const setUsersQunatity = (q) => ({type: SET_USERS_QUANTITY, q})
export const setFetching = (bool) => ({type: SET_FETCHING, bool})
export const setFollowingInProgress = (bool,id) => ({type: SET_FOLLOWING_IN_PROGRESS, bool, id})

const followUnfollowFlow = async (apiMethod,action,id,dispatch) => {
    dispatch(setFollowingInProgress(true,id))
    const data = await apiMethod(id)
    if(data.resultCode === 0) {
        dispatch(action(id))
    }
    dispatch(setFollowingInProgress(false,id)) 
}

export const gettingFollow = id => dispatch => {
    followUnfollowFlow(Users_API.followUser,follow,id,dispatch)
}

export const gettingUnfollow = id => dispatch => {
    followUnfollowFlow(Users_API.unfollowUser,unfollow,id,dispatch)
}

export const getUsers = (currentPage,usersQuantityOnPage) => async dispatch => {
        dispatch(setFetching(true))
        const data = await Users_API.getUsers(currentPage,usersQuantityOnPage)
        dispatch(setFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersQunatity(data.totalCount))
}

export default usersPageReducer;

