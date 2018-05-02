import React from 'react';

export default ({count}) => (
    <span>
        {(count) ? count + ' movies found' : '' }
    </span>
)