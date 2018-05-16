import { connect } from 'react-redux'
import MovieList from '../components/MovieList';

const mapStateToProps = state => ({
    movieList: state.movies.movieList,
    sortingType: state.movies.sortingType
});

export default connect(
    mapStateToProps
)(MovieList);