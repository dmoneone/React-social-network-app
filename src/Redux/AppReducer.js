import {getAuth} from './AuthReducer'

const SET_INITIALISATION = 'SET-INITIALISATION'

const setInitialization = () => ({
    type: SET_INITIALISATION
})

export const getInitialization = () => dispatch => {
    const promise = dispatch(getAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialization())
        })
}

const initialState = {
    initialization: false
}


const AppReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SET-INITIALISATION': {
            return {
                ...state,
                initialization: true
            }
        }
        default: return state;
    }
}

export default AppReducer;