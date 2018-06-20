import React from 'react';

import Button from './Button';

import { setSortingType } from '../redux/actions/index';

import { SORTING_BY_RATING, SORTING_BY_DATE } from '../constants';

export default class SortingPanel extends React.PureComponent {
    sortByDate = () => {
      this.props.dispatch(setSortingType(SORTING_BY_DATE));
    };

    sortByRating = () => {
      this.props.dispatch(setSortingType(SORTING_BY_RATING));
    };

    render() {
      return (
            <React.Fragment>
                <span className="mr-2">Sort By</span>
                <Button title="release date"
                        isActive={this.props.sortingType === SORTING_BY_DATE}
                        size="small"
                        type="outline"
                        addClasses="mr-1"
                        onClick={this.sortByDate}
                />
                <Button
                    title="rating"
                    isActive={this.props.sortingType === SORTING_BY_RATING}
                    size="small"
                    type="outline"
                    onClick={this.sortByRating}
                />
            </React.Fragment>
      );
    }
}
