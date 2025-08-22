
import React from 'react';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  const baseClasses = "px-4 py-2 text-sm md:px-6 md:py-2 md:text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  const activeClasses = "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30";
  const inactiveClasses = "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
