import {getAuth} from './AuthReducer'

const initialState = {
    initialization: false
}

const AppReducer = (state = initialState,action) => {
    switch(action.type){
        case 'social-network/AppReducer/SET-INITIALISATION': {
            return {
                ...state,
                initialization: true
            }
        }
        default: return state;
    }
}

const SET_INITIALISATION = 'social-network/AppReducer/SET-INITIALISATION'

const setInitialization = () => ({
    type: SET_INITIALISATION
})

export const getInitialization = () => async dispatch => {
    const promise = dispatch(getAuth())
    await Promise.all([promise])
    dispatch(setInitialization())
}

export default AppReducer;