import { connect } from 'react-redux';
import HelpLine from '../components/HelpLine';

const mapStateToProps = ({ movies: { movieList } }) => ({
  movieList: movieList.toArray ? movieList.toArray() : movieList,
});

export default connect(mapStateToProps)(HelpLine);
