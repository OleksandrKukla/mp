import React from 'react';

export default ({image, title, year, category, filmURL, yearSearchURL, categorySearchUrl}) => (
    <div className="card movie-preview">
        <a href={filmURL} className="card-img-top poster-wrapper">
            <img src={image} alt={title}/>
        </a>
        <div className="card-body">
            <a href={yearSearchURL} className="badge badge-secondary float-right mt-1 ml-2">
                {year}
            </a>
            <a href={filmURL}>
                {title}
            </a>
            <div className="mt-1">
                <a href={categorySearchUrl}>
                    <small>{category}</small>
                </a>
            </div>
        </div>
    </div>
);