import React from 'react';
import { string } from 'prop-types';

BackgroundContainer.propTypes = {
    img: string
};

export default function BackgroundContainer ({ children, img, filter}) {

    let styles = {
        imageWrapper: {
            backgroundImage: 'url(' + img + ')',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
        },
        filterWrapper: {
            backgroundColor: filter
        }
    };

    return (
        <div style={ img && styles.imageWrapper }>
            <div style={ filter && styles.filterWrapper }>
                {children}
            </div>
        </div>
    )
}