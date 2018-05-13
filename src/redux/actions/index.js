export const setFullListState = movieFullList => ({
    movieFullList,
    type: 'SET_FULL_LIST_STATE'
});

export const sortBy = sortType => ({
    type: 'SORT_BY_' + String(sortType).toUpperCase()
});