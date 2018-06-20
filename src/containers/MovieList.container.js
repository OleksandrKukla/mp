import { connect } from 'react-redux';
import MovieList from '../components/MovieList';

const mapStateToProps = ({ movies: { movieList, sortingType } }) => ({
  movieList: movieList.toArray ? movieList.toArray() : movieList,
  sortingType,
});

export default connect(mapStateToProps)(MovieList);
