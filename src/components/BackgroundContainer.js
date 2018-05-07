import React from 'react';
import {string, node} from 'prop-types';

BackgroundContainer.propTypes = {
    img: string,
    children: node,
    filter: string
};

export default function BackgroundContainer({children, img, filter}) {

    let styles = {
            imageWrapper: {
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
            },
            filterWrapper: {
                backgroundColor: filter
            }
        },
        imageStyles = (img && styles.imageWrapper) ? styles.imageWrapper : {},
        filterStyles = (filter && styles.filterWrapper) ? styles.filterWrapper : {};

    return (
        <div style={imageStyles}>
            <div style={filterStyles}>
                {children}
            </div>
        </div>
    )
}