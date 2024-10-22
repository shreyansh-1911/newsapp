import React from 'react'
import newsimage from '../assets/news.png'

const NewsItem = ({title, src, description, url}) => {
    return (
        <div className="card bg-dark text-white d-inline-block mx-2 mb-3 px-2 py-2" style={{ maxWidth:"345px" }}>
            <img src={src?src:newsimage} className="card-img-top" style={{width:"325px", height:"200px"}} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description?description.slice(0,90):"There is a information about that news. Click below to Explore."}</p>
                    <a href={url} target="_blank" className="btn btn-primary">Read More</a>
                </div>
        </div>
    )
}

export default NewsItem
