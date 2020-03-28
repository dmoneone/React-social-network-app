import React from 'react';
import c from './News.module.scss';
import Preloader from '../../common/Preloader';
import { NewsType } from '../../Redux/NewsReducer';

interface PropsType  {
    news: Array<NewsType>
    isFetching: boolean
}

const News: React.FC<PropsType> = props => {
    return !props.isFetching ?
            <div className={c.content}>
                {props.news.map(n => {
                    return (
                        <div key={n.title + Math.random()} className={c.news_item_block}>
                        <h3>{n.title}</h3>
                        <div className={c.news_item_content}>
                            <div>
                                <img src={n.urlToImage} alt=""/>
                            </div>
                            <div>
                                <p>{n.description}</p>
                                <span>{n.publishedAt}</span>
                                <a href={n.url}>read more</a>
                            </div>
                        </div>   
                        </div>
                    )
                } )}
            </div>
        : <Preloader/>
}

export default News;