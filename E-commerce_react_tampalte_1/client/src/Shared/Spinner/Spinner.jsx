import React from 'react';

const Spinner = ({ size = 'md', color = 'blue' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const colorClasses = {
    blue: 'border-blue-500',
    gray: 'border-gray-500',
    white: 'border-white',
    green: 'border-green-500',
  };

  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div
        className={`
        border-4 
        border-solid 
        rounded-full 
        animate-spin
        ${sizeClasses[size]}
        ${colorClasses[color]}
        border-t-transparent
      `}
      ></div>
    </div>
  );
};

export default Spinner;
