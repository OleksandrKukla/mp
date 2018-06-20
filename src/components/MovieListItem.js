import React from 'react';
import * as Router from 'react-router-dom';

export default ({
  image, title, year, category, filmURL, yearSearchURL, categorySearchUrl,
}) => (
    <div className="card movie-preview">
        <Router.Link to={filmURL} className="card-img-top poster-wrapper">
            <img src={image} alt={title}/>
        </Router.Link>
        <div className="card-body">
            <a href={yearSearchURL}>
                <span className="badge badge-secondary float-right mt-1 ml-2">
                    {year}
                </span>
            </a>
            <Router.Link to={filmURL}>
                {title}
            </Router.Link>
            <div className="mt-1">
                <a href={categorySearchUrl}>
                    <small>{category}</small>
                </a>
            </div>
        </div>
    </div>
);
