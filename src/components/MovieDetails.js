import React from 'react';

import mockObject from '../MockFilmList';

export default function (props) {
    let movieInfo = mockObject.find((el) => (
        String(el.id) === props.match.params.movieID
    ));

    return (
        <React.Fragment>
            <If true={movieInfo}>
                <div className="row pt-3 pb-5">
                    <div className="col-4">
                        <div className="poster-wrapper">
                            <img src={movieInfo.image} alt={movieInfo.title}/>
                        </div>
                    </div>
                    <div className="col-8 text-white">
                        <h1 className="text-warning mb-4">
                            {movieInfo.title}
                            <span className="ml-3 badge badge-warning">
                                {movieInfo.rating}
                            </span>
                        </h1>
                        <div className="mt-4 mb-4">
                            {movieInfo.subtitle}
                        </div>
                        <span className="h5 mr-5">
                            {movieInfo.year}
                        </span>
                        <span className="h5">
                            {movieInfo.duration} min
                        </span>
                        <div className="mt-4">
                            {movieInfo.description}
                        </div>
                    </div>
                </div>
            </If>
            <If false={movieInfo}>
                <div className="h2 text-center text-danger pb-4 mb-0">
                    Movie not found
                </div>
            </If>
        </React.Fragment>
    );
}