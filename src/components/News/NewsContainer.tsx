import React from 'react'
import {connect} from 'react-redux'
import News from './News';
import {getNews, NewsType} from '../../Redux/NewsReducer'
import { GlobalStateType } from '../../Redux/redux-store';

interface MapStateToProps  {
    news: Array<NewsType>
    isFetching: boolean
}

interface MapDispatchToProps  {
    getNews: () => void
}

type PropsType = MapStateToProps & MapDispatchToProps

class ContainerAPINews extends React.Component<PropsType, {}> {
    componentDidMount() {
        this.props.getNews()
    }

    render() {
        return (
            <News 
                news={this.props.news}
                isFetching={this.props.isFetching}
            />
        )
    }
}

const mapStateToProps = (state: GlobalStateType): MapStateToProps => ({
    news: state.news.news,
    isFetching: state.news.isFetching
})

const NewsContainer = connect<MapStateToProps,MapDispatchToProps,{},GlobalStateType>(mapStateToProps,{getNews})(ContainerAPINews)

export default NewsContainer;