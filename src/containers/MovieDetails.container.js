import { connect } from 'react-redux'
import MovieDetails from '../components/MovieDetails';

const mapStateToProps = state => {
    return {
    movieList: state.movies.movieFullList
}};

export default connect(
    mapStateToProps
)(MovieDetails);