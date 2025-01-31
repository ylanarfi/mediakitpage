import React from 'react';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface StatCardProps {
  label: string;
  value: string | number;
  growth?: number;
  suffix?: string;
  delay?: number;
  isPrintMode?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  growth, 
  suffix = '', 
  delay = 0,
  isPrintMode = false
}) => {
  const numericValue = typeof value === 'number' ? value : parseInt(value);
  const { count, ref } = useCountAnimation({
    end: numericValue,
    delay,
    suffix,
    isPrintMode
  });

  // Helper function to determine background gradient class
  const getGradientClass = () => {
    if (typeof growth === 'undefined') return '';
    return growth >= 0 
      ? 'bg-gradient-to-br from-green-500' 
      : 'bg-gradient-to-br from-red-500';
  };

  return (
    <div 
      ref={ref}
      className={`bg-white/5 rounded-lg p-4 relative overflow-hidden ${isPrintMode ? '' : 'hover:bg-white/10 transition-colors group'}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">{label}</p>
        {growth !== undefined && (
          <div 
            className={`flex items-center ${growth >= 0 ? 'text-green-500' : 'text-red-500'} 
              ${isPrintMode ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'}`}
          >
            {growth >= 0 ? (
              <ArrowTrendingUpIcon className={`w-4 h-4 mr-1 ${isPrintMode ? '' : 'animate-bounce'}`} />
            ) : (
              <ArrowTrendingDownIcon className={`w-4 h-4 mr-1 ${isPrintMode ? '' : 'animate-bounce'}`} />
            )}
            <span className="text-xs">{Math.abs(growth)}% vs last month</span>
          </div>
        )}
      </div>
      <p className="text-2xl font-bold mt-2">
        {count}
      </p>
      
      {!isPrintMode && (
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${getGradientClass()}`}
        />
      )}
    </div>
  );
};

export { StatCard };