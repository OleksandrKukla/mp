import { connect } from 'react-redux'
import MovieList from '../components/MovieList';

const mapStateToProps = state => ({
    movieList: state.movies.movieList
});

export default connect(
    mapStateToProps
)(MovieList);