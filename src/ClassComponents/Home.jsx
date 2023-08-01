import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0
        }
    }
    getAPIData = async () => {
        var response = ""
        if(this.props.search)
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search} &language=${this.props.language}&apiKey=53d8683c6b33406f9a6b3dba41aee1d4`)
        else
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q} &language=${this.props.language}&apiKey=53d8683c6b33406f9a6b3dba41aee1d4`)
        var result = await response.json()
        this.setState({
            articles:result.articles,
            totalResults:result.totalResults
        })
    }
    componentDidMount() {
        this.getAPIData()
    }
    componentDidUpdate(oldProps){
        if(this.props!==oldProps){
            this.getAPIData()
        }
    }
    render() {
        return (
            <>
                <div className='container-fluid mt-2'>
                    <div className='row'>
                    <h5 className='background text-light text-center p-2'>{this.props.q} News Section</h5>
                     {
                        this.state.articles.map((item,index)=>{
                            return<NewsItem
                             key={index}
                             pic = {item.urlToImage}
                             title = {item.title}
                             description ={item.description}
                             source = {item.source.name}
                             date = {item.publishedAt }
                            />
                        })
                     }
                    </div>
                </div>

            </>
        )
    }
}
