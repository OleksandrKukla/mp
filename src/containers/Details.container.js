import { connect } from 'react-redux'
import Details from '../pages/Details';

const mapStateToProps = state => ({
    movieList: state.movies.movieFullList
});

export default connect(
    mapStateToProps
)(Details);