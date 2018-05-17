import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import 'jest-localstorage-mock';

import {
    SET_FULL_LIST_ACTION,
    SET_SORTING_TYPE_ACTION,
    SORTING_BY_DATE,
    STORAGE_NAME
} from '../../constants';

import {
    transformMovieData,
    setFullListState,
    setSortingType,
    fetchData,
} from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockApiResponse = {"data":[{"id":123,"poster_path":"http://domen.com/some.jpg","title":"Some title","release_date":"1999-03-05","genres":["actions"],"vote_count":300,"runtime":120,"overview":"good movie"}]};

const mockMovieFullList = [
    {
        id: '123',
        image: 'http://domen.com/some.jpg',
        title: 'Some title',
        year: '1999-03-05',
        category: 'actions',
        rating: 300,
        subtitle: 'actions',
        duration: 120,
        description: 'good movie'
    }
];

describe('Redux actions', () => {

    it('setFullListState', () => {
        const movieFullList = [1, 2, 3];
        const expectedAction = {
            type: SET_FULL_LIST_ACTION,
            movieFullList
        };

        expect(setFullListState(movieFullList)).toEqual(expectedAction);
    });

    it('setSortingType', () => {
        const sortingType = SORTING_BY_DATE;
        const expectedAction = {
            type: SET_SORTING_TYPE_ACTION,
            sortingType
        };

        expect(setSortingType(sortingType)).toEqual(expectedAction);
    });

    it('transformMovieData function', () => {
        const passedData = {
            id: 123,
            poster_path: 'http://domen.com/some.jpg',
            title: 'Some title',
            release_date: '1999-03-05',
            genres: ['actions'],
            vote_count: 300,
            runtime: 120,
            overview: 'good movie'
        };

        const expectedData = {
            id: '123',
            image: 'http://domen.com/some.jpg',
            title: 'Some title',
            year: '1999-03-05',
            category: 'actions',
            rating: 300,
            subtitle: 'actions',
            duration: 120,
            description: 'good movie'
        };

        expect(transformMovieData(passedData)).toEqual(expectedData);
    });

    it('fetchData - from fetch', () => {
        fetchMock
            .get(
                '*',
                {
                    body: mockApiResponse,
                    headers: {'content-type': 'application/json'}
                }
            );

        const expectedActions = setFullListState(mockMovieFullList);

        const store = mockStore();

        return store.dispatch(fetchData('*')).then(() => {
            expect(store.getActions()[0]).toEqual(expectedActions)
        });
    });

    it('fetchData - wrong data', () => {
        localStorage.clear();
        fetchMock.reset();
        fetchMock.restore();
        fetchMock
            .get(
                '*',
                {
                },
                { overwriteRoutes: false }
            );

        const store = mockStore();

        return store.dispatch(fetchData('*')).then(() => {
            expect(store.getActions()[0]).toBeUndefined()
        });
    });

    it('fetchData - fromLocalStorage', () => {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(mockMovieFullList));

        const store = mockStore();

        const expectedActions = setFullListState(mockMovieFullList);

        return store.dispatch(fetchData('*')).then(() => {
            expect(store.getActions()[0]).toEqual(expectedActions)
        });
    })
});