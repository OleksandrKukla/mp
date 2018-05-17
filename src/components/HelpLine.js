import React from 'react';

import BackgroundContainer from './BackgroundContainer';
import SearchResultsCount from './SearchResultsCount';

import SortingPanel from '../containers/SortingPanel.container';

export default ({movieList, category}) => {

    const isHome = !!(movieList && movieList.length && !category);

    return (
        <BackgroundContainer filter="#eee">
            <If true={isHome}>
                <div className="container pt-2 pb-2 clearfix">
                    <div className="row">
                        <div className="col pt-1 font-weight-bold">
                            <SearchResultsCount count={movieList.length}/>
                        </div>

                        <div className="col-auto text-right font-weight-bold">
                            <SortingPanel/>
                        </div>
                    </div>
                </div>
            </If>
            <If true={!!category}>
                <div className="container pt-2 pb-2 clearfix">
                    <div className="row">
                        <div className="col pt-1 font-weight-bold">
                            Films by {category}
                        </div>
                    </div>
                </div>
            </If>
        </BackgroundContainer>
    );
};