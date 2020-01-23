import {News_API} from "../API/api"

const initialState = {
    news: [],
    isFetching: false
}
 
const NewsReducer = (state = initialState,action) => {
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
 

const SET_NEWS = 'social-network/NewsReducer/SET-NEWS'
const SET_FETCHING = 'social-network/NewsReducer/SET-FETCHING'

export const setNews = (news) => ({type: SET_NEWS,news})
export const setFetching = (bool) => ({type: SET_FETCHING,bool})

export const getNews = () => async dispatch => {
    dispatch(setFetching(true))
    const news = await News_API.getNews()
    dispatch(setNews(news))
    dispatch(setFetching(false))
}

export default NewsReducer;