// @flow
import React from 'react';

const typeClasses = {
    outline: 'btn-outline-primary',
    secondary: 'btn-secondary',
  },
  sizeClasses = {
    small: 'btn-sm',
  };

type funcArg = {title: string, size: string, addClasses: string, type: string, isActive: boolean, onClick: Function};

export default function ({
    title, size, addClasses, type, isActive, onClick,
}:funcArg):Object {
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
