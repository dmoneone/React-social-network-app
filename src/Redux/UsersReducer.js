const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsercAC = (users) => ({type: SET_USERS, users});

const initialState = {
    users: [
        {name: 'Dima',id: 1,status: 'Yep!',follow: true},
        {name: 'Kate',id: 2,status: 'Im a bitch',follow: false},
        {name: 'Strup',id: 3,status: 'Jopa!',follow: true}
    ]
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

        default: return state;
    }
}

export default usersPageReducer;

