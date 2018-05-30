import {
    STORAGE_NAME,
    SET_FULL_LIST_ACTION,
    SET_SORTING_TYPE_ACTION,
    API_ENDPOINT
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

export const setFullListState = movieFullList => ({
    movieFullList,
    type: SET_FULL_LIST_ACTION
});

export const setSortingType = sortingType => ({
    type: SET_SORTING_TYPE_ACTION,
    sortingType
});

export function fetchData(query) {
    query = (query && query.length && query[0] !== '?')
        ? `?${query}`
        : query;

    const url = API_ENDPOINT + query;

    return (dispatch) => {
        let movieList = JSON.parse(localStorage.getItem(STORAGE_NAME));
        if (movieList && movieList.length) {
            dispatch(setFullListState(movieList));
        }

        return fetch(url)
            .then(response => response.json())
            .then(value => {
                if (!(value && value.data)) {
                    return;
                }

                let movieList = value.data.map(transformMovieData);

                localStorage.setItem(STORAGE_NAME, JSON.stringify(movieList));

                dispatch(setFullListState(movieList));

            });
    };
}