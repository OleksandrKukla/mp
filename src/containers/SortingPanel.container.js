import React from 'react';
import { connect } from 'react-redux';
import SortingPanel from '../components/SortingPanel';

const mapStateToProps = ({ movies: { sortingType } }) => ({
  sortingType,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingPanel);
