import React from 'react'
import { connect } from 'react-redux'
import SortingPanel from '../components/SortingPanel'
import {sortBy} from '../redux/actions/index'

const SortingPanel_container = ({ dispatch }) => {
    const sortByDate = () => {
        dispatch(sortBy('date'));
    };

    const sortByRating = () => {
        dispatch(sortBy('rating'));
    };

    return (
        <SortingPanel
            sortByDate={sortByDate}
            sortByRating={sortByRating}
        />
    );
};

export default connect()(SortingPanel_container);