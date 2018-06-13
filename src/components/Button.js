import React from 'react';

const typeClasses = {
    outline: 'btn-outline-primary',
    secondary: 'btn-secondary',
  },
  sizeClasses = {
    small: 'btn-sm',
  };

export default function ({
  title, size, addClasses, type, isActive, onClick,
}) {
  const className = [
    'btn',
    addClasses,
    (!isActive && typeClasses[type]) || 'btn-primary',
    sizeClasses[size],
    isActive && 'active',
  ].join(' ');

  return (
        <button type="button" className={className} onClick={onClick}>
            {title}
        </button>
  );
}
