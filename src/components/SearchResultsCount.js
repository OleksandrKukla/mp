import React from 'react';

export default ({ count }) => {
  const resultString = (count)
    ? `${count} movies found`
    : '';

  return <span>{resultString}</span>;
};
