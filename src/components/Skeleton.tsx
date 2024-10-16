// components/SkeletonLoader.tsx
import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col w-full h-auto animate-pulse">
      <div className="relative rounded-lg w-full h-[150px] sm:h-[180px] md:h-[200px] bg-gray-300" />
      <div className="h-6 mt-2 bg-gray-300 rounded w-3/4" />
      <div className="h-4 mt-1 bg-gray-300 rounded w-1/2" />
    </div>
  );
};

export default SkeletonLoader;
