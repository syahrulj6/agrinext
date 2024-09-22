import React from 'react';

const Tagline = ({ title }: { title: string }) => {
  return (
    <div className="border-2 border-primary rounded-full px-3 py-1 w-fit">
      <li className="text-primary text-center">{title}</li>
    </div>
  );
};

export default Tagline;
