import { connect } from 'react-redux';
import MovieDetails from '../components/MovieDetails';

const mapStateToProps = ({ movies: { movieFullList } }) => ({
  movieList: movieFullList,
});

export default connect(mapStateToProps)(MovieDetails);
