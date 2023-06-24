import React from 'react'

const NewsItem = (props) => {
  
    let { title, desc, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='container my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'90%'}}>
              {source}</span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-rm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
