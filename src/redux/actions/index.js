import { call, put, all, takeLatest } from 'redux-saga/effects';

import {
    SET_FULL_LIST_ACTION,
    SET_SORTING_TYPE_ACTION,
    API_ENDPOINT,
    FETCH_DATA_ACTION
} from "../../constants";

export const transformMovieData = (data) => ({
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

export const fetchData = (query) => ({
    type: FETCH_DATA_ACTION,
    query
});

export const setFullListState = movieFullList => ({
    movieFullList,
    type: SET_FULL_LIST_ACTION
});

export const setSortingType = sortingType => ({
    type: SET_SORTING_TYPE_ACTION,
    sortingType
});

export function* fetchDataAsync({query}) {
    query = (query && query.length && query[0] !== '?')
        ? `?${query}`
        : query || '';

    const url = API_ENDPOINT + query;

    const response = yield call(fetch, url);
    const value = yield response.json();

    const movieList = value.data.map(transformMovieData);

    yield put(setFullListState(movieList));
}
export function* watchFetchData() {
    yield takeLatest(FETCH_DATA_ACTION, fetchDataAsync);
}

// Users Saga
export function* moviesSaga() {
    yield all([
        watchFetchData()
    ]);
}
