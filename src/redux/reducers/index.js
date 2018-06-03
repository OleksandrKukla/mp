import {combineReducers} from 'redux'
import movies from './movies';
import {moviesSaga} from '../actions/index';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
}

const rootReducer = combineReducers({
    movies
});

export {
    rootReducer,
    rootSaga
};
