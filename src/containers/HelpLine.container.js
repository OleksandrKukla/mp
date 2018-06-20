import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import HelpLine from '../components/HelpLine';

const mapStateToProps = createSelector(
  state => state.movies.movieList,
  movieList => ({
    movieList: (movieList.toArray ? movieList.toArray() : movieList),
  }),
);

export default connect(mapStateToProps)(HelpLine);
