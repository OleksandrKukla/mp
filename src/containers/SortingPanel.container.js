import React from 'react'
import { connect } from 'react-redux'
import SortingPanel from '../components/SortingPanel'

const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingPanel);