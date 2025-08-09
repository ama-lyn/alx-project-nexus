import React from 'react';

interface TagProps {
  label: string;
  color: 'green' | 'blue';
}

const Tag: React.FC<TagProps> = ({ label, color }) => {
  const colorClasses = {
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
  };

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${colorClasses[color]}`}>
      {label}
    </span>
  );
};

export default Tag;