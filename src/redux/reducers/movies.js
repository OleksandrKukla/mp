import {
    SORTING_BY_DATE,
    SET_FULL_LIST_ACTION,
    SET_SORTING_TYPE_ACTION
} from "../../constants";

const transformMovieData = (data) => ({
    id: String(data.id),
    image: data.image,
    title: data.title,
    year: data.year,
    category: data.category,
    rating: data.rating,
    subtitle: data.subtitle,
    duration: data.duration,
    description: data.description
});

const defaultState = {
    sortingType: SORTING_BY_DATE,
    movieFullList: [],
    movieList: []
};

const movies = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FULL_LIST_ACTION:
            let movieFullList = action.movieFullList.map(transformMovieData),
                movieList = (state.movieList.length) ? state.movieList : [...movieFullList];

            return {
                ...state,
                movieFullList,
                movieList
            };

        case SET_SORTING_TYPE_ACTION:
            return {
                ...state,
                sortingType: action.sortingType
            };

        default:
            return state;
    }
};

export default movies;