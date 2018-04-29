import React from 'react';

import BackgroundContainer from './BackgroundContainer';
import SearchResultsCount from './SearchResultsCount';
import SortingPanel from './SortingPanel';

export default ({movieList}) => (
    <BackgroundContainer filter={"#eee"}>
        <If true={!!(movieList && movieList.length)}>
            <div className="container pt-2 pb-2 clearfix">
                <div className="row">
                    <div className="col pt-1 font-weight-bold">
                        <SearchResultsCount count={3}/>
                    </div>

                    <div className="col-auto text-right font-weight-bold">
                        <SortingPanel/>
                    </div>
                </div>
            </div>
        </If>
    </BackgroundContainer>
);