import React from 'react'
import {News} from "../store/types/news"

interface NewsItemProps {
    item: News
}

const NewsItem: React.FC<NewsItemProps> = ({item}) => {
    return (
        <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    <img
                        src={item.urlToImage || `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`}
                        alt="item"
                    />
                    <span className="card-title">{item.title}</span>
                </div>
                <div className="card-content">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsItem