import { connect } from 'react-redux'
import HelpLine from '../components/HelpLine';

const mapStateToProps = state => ({
    movieList: state.movies.movieList
});

export default connect(
    mapStateToProps
)(HelpLine);