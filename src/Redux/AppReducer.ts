import {getAuth} from './AuthReducer'

const initialState = {
    initialization: false
}

type StateType = typeof initialState

const AppReducer = (state: StateType = initialState,action: any): StateType => {
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

const SET_INITIALISATION: string = 'social-network/AppReducer/SET-INITIALISATION'

type SetInitializationActionType = {
    type: typeof SET_INITIALISATION
}

const setInitialization = (): SetInitializationActionType  => ({
    type: SET_INITIALISATION
})

export const getInitialization = () => async (dispatch: Function) => {
    const promise = dispatch(getAuth())
    await Promise.all([promise])
    dispatch(setInitialization())
}

export default AppReducer;