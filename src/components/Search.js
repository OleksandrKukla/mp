import React from 'react';
import { withRouter } from 'react-router';

import { bindActionCreators } from 'redux';
import { fetchData } from '../redux/actions';
import { connect } from 'react-redux';
import URLSearchParams from 'url-search-params';

import Button from './Button';

import {
  SEARCH_PARAM_NAME,
  SEARCHBY_PARAM_NAME,
  SEARCH_TITLE,
  SEARCH_GENRE,
} from '../constants';


class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    const searchParams = new URLSearchParams(this.props.location.search);

    this.state = {
      searchParams,
      searchString: searchParams.get(SEARCH_PARAM_NAME) || '',
      searchBy: searchParams.get(SEARCHBY_PARAM_NAME) || SEARCH_TITLE,
    };
  }

    handleChange = (event) => {
      this.setState({
        searchString: event.target.value || '',
      });
    };

    setSearchType = (type) => {
      this.setState({
        searchBy: type,
      });
    };

    submit = (event) => {
      this.state.searchParams.set(SEARCHBY_PARAM_NAME, this.state.searchBy);
      this.state.searchParams.set(SEARCH_PARAM_NAME, this.state.searchString);

      const search = this.state.searchParams.toString();

      this.props.history.push({
        ...this.props.location,
        search,
      });

      this.props.fetchData(search);

      event.preventDefault();
    };

    render() {
      const _this = this;

      return (
            <React.Fragment>
                <div className="form-row mt-3 mb-3">
                    <form className="col" onSubmit={this.submit}>
                        <label htmlFor="inputSearch">
                            <span className="text-light">FIND YOUR MOVIE</span>
                        </label>
                        <input id="inputSearch"
                               type="text"
                               className="form-control"
                               placeholder="Input your request"
                               value={this.state.searchString}
                               onChange={this.handleChange}
                        />
                    </form>
                </div>
                <div className="form-row pb-4">
                    <div className="col">
                        <label className="mr-2">
                            <small className="text-light">SEARCH BY</small>
                        </label>
                        <Button title="TITLE"
                                isActive={this.state.searchBy === SEARCH_TITLE}
                                size="small"
                                addClasses="mr-1"
                                type="secondary"
                                onClick={() => _this.setSearchType(SEARCH_TITLE)}
                        />
                        <Button title="GENRE"
                                isActive={this.state.searchBy === SEARCH_GENRE}
                                size="small"
                                type="secondary"
                                onClick={() => _this.setSearchType(SEARCH_GENRE)}
                        />
                    </div>
                    <div className="col-auto text-right">
                        <Button title="SEARCH"
                                onClick={this.submit}
                        />
                    </div>
                </div>
            </React.Fragment>
      );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

const SearchWithRouter = withRouter(Search);

export default connect(null, mapDispatchToProps, null, { pure: false })(SearchWithRouter);
