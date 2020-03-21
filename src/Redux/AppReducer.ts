import {getAuth} from './AuthReducer'
import { ThunkAction } from 'redux-thunk'
import { GlobalStateType } from './redux-store'
import { stopSubmit } from 'redux-form'

const initialState = {
    initialization: false
}

type StateType = typeof initialState

type SetInitializationActionType = {
    type: typeof SET_INITIALISATION
}

type ActionsType = SetInitializationActionType

const AppReducer = (state: StateType = initialState,action: ActionsType): StateType => {
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

const setInitialization = (): SetInitializationActionType  => ({
    type: SET_INITIALISATION
})

type ThunkType = ThunkAction<Promise<void>,GlobalStateType,unknown,ActionsType | ReturnType<typeof stopSubmit>> 

export const getInitialization = (): ThunkType => async (dispatch) => {
    const promise = dispatch(getAuth())
    await Promise.all([promise])
    dispatch(setInitialization())
}

export default AppReducer;