import {NewsAction, NewsActionTypes} from '../types/news'
import {Dispatch} from 'redux'
import axios from 'axios'

export const fetchNews = () => {
    return async (dispatch: Dispatch<NewsAction>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_NEWS})
            const response = await axios.get(`https://newsapi.org/v2/everything?q=Apple&language=ru&from=2021-05-27&sortBy=popularity&apiKey=cff5d0464dcf4c6995ac428dc5c56b9e`)
            dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response.data.articles})
        } catch (e) {
            dispatch({type: NewsActionTypes.FETCH_NEWS_ERROR, payload: e.response.data.message})
        }
    }
}