import API from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_QUANTITY = 'SET-USERS-QUANTITY';
const SET_FETCHING = 'SET-FETCHING';

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (c) => ({type: SET_CURRENT_PAGE, c});
export const setUsersQunatity = (q) => ({type: SET_USERS_QUANTITY, q});
export const setFetching = (bool) => ({type: SET_FETCHING, bool})
//thunk
export const gettingFollow = id => {
    return dispatch => {
        API
          .followUser(id)
          .then(data => {
                if(data.resultCode === 0) {
                    dispatch(follow(id))
                }
          }) 
    }
}

export const gettingUnfollow = id => {
    return dispatch => {
        API
          .unfollowUser(id)
          .then(data => {
                if(data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
          }) 
    }
}


export const getUsers = (currentPage,usersQuantityOnPage) => {
    return dispatch => {
        dispatch(setFetching(true))
        API
          .getUsers(currentPage,usersQuantityOnPage)
          .then(data => {
                dispatch(setFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersQunatity(data.totalCount))
          })
    }
}

const initialState = {
    users: [
    ],
    usersQuantity: Number,
    usersQuantityOnPage: 30,
    currentPage: 1,
    pagesQuantity: Number,
    isFetching: false
}



const usersPageReducer = (state = initialState,action) => {
    switch(action.type){
        case 'FOLLOW':
        return {
            ...state,
            users: state.users.map(item => {
                if (item.id === action.userId) {
                    return {
                        ...item,
                        followed: true
                    }
                } return item;
            })
        }

        case 'UNFOLLOW':
        return {
            ...state,
            users: state.users.map(item => {
                if (item.id === action.userId) {
                    return {
                        ...item,
                        followed: false
                    }
                } return item;
            })
        }

        case 'SET-USERS':

        return{
            ...state,
            users: [...action.users]
        }
        
        
        case 'SET-CURRENT-PAGE':
        
        return {
            ...state,
            currentPage: action.c
        }

        case 'SET-USERS-QUANTITY':
        
        return {
            ...state,
            usersQuantity: action.q
        }

        case 'SET-FETCHING':
        
        return {
            ...state,
            isFetching: action.bool
        }

        default: return state;
    }
}

export default usersPageReducer;

