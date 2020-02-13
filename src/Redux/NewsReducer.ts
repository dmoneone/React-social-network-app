import {News_API} from "../API/api"

type News = {
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
}

const initialState = {
    news: [] as Array<News>,
    isFetching: false
}

type StateType = typeof initialState

const NewsReducer = (state: StateType = initialState,action: any):StateType => {
     switch(action.type){
         case 'social-network/NewsReducer/SET-NEWS': {
             return {
                 ...state,
                 news: action.news
             }
         }
         case 'social-network/NewsReducer/SET-FETCHING': {
             return {
                 ...state,
                 isFetching: action.bool
             }
         }
         default: return state;
     }
}
 

const SET_NEWS: string = 'social-network/NewsReducer/SET-NEWS'
const SET_FETCHING: string = 'social-network/NewsReducer/SET-FETCHING'

type SetNewsActionType = {
    type: typeof SET_NEWS
    news: Array<News>
}

type SetFetchingActionType = {
    type: typeof SET_FETCHING
    bool: boolean
}

export const setNews = (news: Array<News>): SetNewsActionType => ({type: SET_NEWS,news})
export const setFetching = (bool: boolean): SetFetchingActionType => ({type: SET_FETCHING,bool})

export const getNews = () => async (dispatch: Function) => {
    dispatch(setFetching(true))
    const news = await News_API.getNews()
    dispatch(setNews(news))
    dispatch(setFetching(false))
}

export default NewsReducer;