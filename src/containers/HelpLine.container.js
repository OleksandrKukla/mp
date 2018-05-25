import {connect} from 'react-redux'
import HelpLine from '../components/HelpLine';

const mapStateToProps = ({movies: {movieList}}) => ({
    movieList
});

export default connect(
    mapStateToProps
)(HelpLine);