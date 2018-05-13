import { connect } from 'react-redux'
import MovieDetails from '../components/MovieDetails';

const mapStateToProps = state => ({
    movieList: state.movies.movieFullList
});

export default connect(
    mapStateToProps
)(MovieDetails);