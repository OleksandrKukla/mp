import React from 'react';
import {render} from 'react-dom';
import * as Router from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';

import App from './components/App'

import {setFullListState} from "./redux/actions";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let movieList = JSON.parse(localStorage.getItem('movieList'));
if (movieList && movieList.length) {
    store.dispatch(setFullListState(movieList));
}

const parseMovieData = (data) => ({
    id: String(data.id),
    image: data.poster_path,
    title: data.title,
    year: data.release_date,
    category: data.genres.join(', '),
    rating: data.vote_count,
    subtitle: data.genres.join(', '),
    duration: data.runtime,
    description: data.overview
});

fetch('http://react-cdp-api.herokuapp.com/movies')
    .then(response => response.json())
    .then(value => {
        if (!(value && value.data)) {
            return;
        }

        let movieList = value.data.map(parseMovieData);

        localStorage.setItem('movieList', JSON.stringify(movieList));

        store.dispatch(setFullListState(movieList));

    }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });

render(
    <Provider store={store}>
        <Router.BrowserRouter>
            <App/>
        </Router.BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
