import React from 'react';

export default ({count}) => {
    let resultString = (count)
            ? `${count} movies found`
            : '';

    return <span>{resultString}</span>;
}