import React from 'react'
import {connect} from 'react-redux'
import News from './News';
import {getNews} from '../../Redux/NewsReducer'

class ContainerAPINews extends React.Component {
    componentDidMount() {
        this.props.getNews()
    }

    render() {
        return (
            <News {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    news: state.news.news,
    isFetching: state.news.isFetching
})

const NewsContainer = connect(mapStateToProps,{getNews})(ContainerAPINews)

export default NewsContainer;