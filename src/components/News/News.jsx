import React from 'react';
import c from './News.module.css';
import Preloader from '../../common/Preloader';

const News = props => {
    return !props.isFetching ?
            <content className={c.content}>
                {props.news.map(n => <div key={n.publishedAt} className={c.news_item}>
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
                                            
                                            
                                     </div>)}
            </content>
        : <Preloader/>

        
    
}

export default News;