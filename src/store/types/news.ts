export interface NewsSource {
    id: null | string
    name: string
}

export interface News {
    author: string
    content: string
    description: string
    publishedAt: string
    title: string
    url: string
    urlToImage: string
    source: NewsSource
}

export interface NewsState {
    news: News[]
    loading: boolean
    error: null | string
}

export enum NewsActionTypes {
    FETCH_NEWS = `NEWS/FETCH_NEWS`,
    FETCH_NEWS_SUCCESS = `NEWS/FETCH_NEWS_SUCCESS`,
    FETCH_NEWS_ERROR = `NEWS/FETCH_NEWS_ERROR`,
}

export interface FetchNewsAction {
    type: NewsActionTypes.FETCH_NEWS
}

export interface FetchNewsActionSuccess {
    type: NewsActionTypes.FETCH_NEWS_SUCCESS,
    payload: any[]
}

export interface FetchNewsActionError {
    type: NewsActionTypes.FETCH_NEWS_ERROR,
    payload: string
}

export type NewsAction = FetchNewsAction | FetchNewsActionSuccess | FetchNewsActionError