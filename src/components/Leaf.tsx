
import * as React from 'react';

const Leaf: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 4 13C4 6 12 3 12 3s8 3 8 10a7 7 0 0 1-7 7Z" />
      <path d="M12 3v17" />
      <path d="m8 10 4 4 4-4" />
    </svg>
  );
};

export default Leaf;
