import {News_API} from "../API/api"
import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"
import { GlobalStateType } from "./redux-store"
import { stopSubmit } from "redux-form"

export type NewsType = {
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
}

const initialState = {
    news: [] as Array<NewsType>,
    isFetching: false
}

type SetNewsActionType = {
    type: typeof SET_NEWS
    news: Array<NewsType>
}

type SetFetchingActionType = {
    type: typeof SET_FETCHING
    bool: boolean
}

const SET_NEWS: string = 'social-network/NewsReducer/SET-NEWS'
const SET_FETCHING: string = 'social-network/NewsReducer/SET-FETCHING'

type ActionsType = SetNewsActionType | SetFetchingActionType

type StateType = typeof initialState

const NewsReducer = (state: StateType = initialState,action: AnyAction/*ActionsType*/):StateType => {
     switch(action.type){
         case SET_NEWS: {
             return {
                 ...state,
                 news: action.news
             }
         }
         case SET_FETCHING: {
             return {
                 ...state,
                 isFetching: action.bool
             }
         }
         default: return state;
     }
}
 
export const setNews = (news: Array<NewsType>): SetNewsActionType => ({type: SET_NEWS,news})
export const setFetching = (bool: boolean): SetFetchingActionType => ({type: SET_FETCHING,bool})

type ThunkType = ThunkAction<Promise<void>,GlobalStateType,unknown,ActionsType | ReturnType<typeof stopSubmit>>

export const getNews = (): ThunkType => async (dispatch) => {
    dispatch(setFetching(true))
    const news = await News_API.getNews()
    dispatch(setNews(news))
    dispatch(setFetching(false))
}

export default NewsReducer;