import {NewsAction, NewsActionTypes, NewsState} from '../types/news'

const initialState: NewsState = {
    news: [],
    loading: false,
    error: null
}

export const newsReducer = (state = initialState, action: NewsAction): NewsState => {
    switch (action.type) {
        case NewsActionTypes.FETCH_NEWS:
            return {...state, news: [], loading: true, error: null}
        case NewsActionTypes.FETCH_NEWS_SUCCESS:
            return {...state, news: action.payload, loading: false}
        case NewsActionTypes.FETCH_NEWS_ERROR:
            return {...state, news: [], loading: false, error: action.payload}
        default:
            return state
    }
}