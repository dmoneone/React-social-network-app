const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGES_QUANTITY = 'SET-PAGES-QUANTITY';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_QUANTITY = 'SET-USERS-QUANTITY';

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsercAC = (users) => ({type: SET_USERS, users});
export const setPagesQuantityAC = (quantity) => ({type: SET_PAGES_QUANTITY, quantity});
export const setCurrentPageAC = (c) => ({type: SET_CURRENT_PAGE, c});
export const setUsersQunatityAC = (q) => ({type: SET_USERS_QUANTITY, q});

const initialState = {
    users: [
    ],
    usersQuantity: Number,
    usersQuantityOnPage: 30,
    currentPage: 1,
    pagesQuantity: Number
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
                        follow: true
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
                        follow: false
                    }
                } return item;
            })
        }

        case 'SET-USERS':

        return{
            ...state,
            users: [...action.users]
        }
        
        case 'SET-PAGES-QUANTITY':

        return {
            ...state,
            pagesQuantity: action.quantity
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

        default: return state;
    }
}

export default usersPageReducer;

