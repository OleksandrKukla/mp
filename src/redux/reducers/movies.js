const parseMovieData = (data) => ({
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

const compareDates = (movie_1, movie_2) => {
    const date_1 = String(movie_1.year).split('-').join('');
    const date_2 = String(movie_2.year).split('-').join('');

    return Number(date_2) - Number(date_1);
};

const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_FULL_LIST_STATE':
            let movieFullList = action.movieFullList.map(parseMovieData),
                movieList = (state.movieList) ? state.movieList : Object.assign([], movieFullList);

            return {
                ...state,
                movieFullList,
                movieList
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                movieList: Object.assign([], state.movieList.sort(compareDates))
            };

        case 'SORT_BY_RATING':
            return {
                ...state,
                movieList: Object.assign([], state.movieList.sort(
                    (movie_1, movie_2) => (Number(movie_2.rating) - Number(movie_1.rating))
                ))
            };

        default:
            return state;
    }
};

export default movies;