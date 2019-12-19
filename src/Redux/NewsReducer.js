import {getNewsAPI} from "../API/api"

const SET_NEWS = 'SET-NEWS'
const SET_FETCHING = 'SET-FETCHING'

export const setNews = (news) => ({type: SET_NEWS,news})
export const setFetching = (bool) => ({type: SET_FETCHING,bool})
//thunk

export const getNews = () => {
    return dispatch => {
        dispatch(setFetching(true))
        getNewsAPI()
            .then(news => {
                dispatch(setNews(news))
                dispatch(setFetching(false))
            })
    }
}

const initialState = {
   news: [],
   isFetching: false
}

const NewsReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SET-NEWS': {
            return {
                ...state,
                news: action.news
            }
        }
        case 'SET-FETCHING': {
            return {
                ...state,
                isFetching: action.bool
            }
        }
        default: return state;
    }
}

export default NewsReducer;