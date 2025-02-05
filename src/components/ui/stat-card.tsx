import React from 'react';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface StatCardProps {
  label: string;
  value: string | number;
  growth?: number;
  suffix?: string;
  isPrintMode?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  growth, 
  suffix = '',
  isPrintMode = false
}) => {
  const numericValue = typeof value === 'number' ? value : parseInt(value);
  const { value: animatedValue, ref } = useCountAnimation({
    end: numericValue,
    suffix,
    enabled: !isPrintMode
  });

  return (
    <div 
      ref={ref}
      className="stat-card rounded-lg p-4 transition-all duration-300 group/stat"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-[rgb(var(--text-secondary))]">{label}</p>
        {growth !== undefined && (
          <div className={`
            flex items-center opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300
            ${growth >= 0 ? 'text-green-500' : 'text-red-500'}
          `}>
            {growth >= 0 ? (
              <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
            ) : (
              <ArrowTrendingDownIcon className="w-4 h-4 mr-1" />
            )}
            <span className="text-xs">{Math.abs(growth)}% vs last month</span>
          </div>
        )}
      </div>
      <p className="text-2xl font-bold mt-2 text-[rgb(var(--text-primary))]">
        {isPrintMode ? value.toString() : animatedValue}
      </p>
    </div>
  );
};

export { StatCard };