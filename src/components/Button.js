import React from 'react';

export default function ({ title, size, addClasses, type, isActive }) {
    let typeClasses = {
            outline: 'btn-outline-primary',
            secondary: 'btn-secondary'
        },
        sizeClasses = {
            small: 'btn-sm'
        };

    let className = [
        'btn',
        'btn-primary',
        addClasses,
        typeClasses[type],
        sizeClasses[size],
        isActive && 'active'
    ].join(' ');

    return (
        <button type="button" className={className}>
            {title}
        </button>
    )
}