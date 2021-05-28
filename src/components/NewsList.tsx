import React, {useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector'
import {useDispatch} from 'react-redux'
import {fetchNews} from '../store/actions/newsAction'
import Loader from "./Loader";
import NewsItem from './NewsItem'

const NewsList: React.FC = () => {
    const {news, loading} = useTypedSelector(state => state.news)
    const dispatch = useDispatch()
    console.log(news)
    useEffect(() => {
        dispatch(fetchNews())
    }, [])
    if (loading) {
        return <Loader/>
    }
    if (!news.length) {
        return <p>No data!</p>
    }
    return (
        <div className="row">
            {news.map(item => (
                <NewsItem item={item} key={item.url}/>
            ))}
        </div>
    )
}

export default NewsList;