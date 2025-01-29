import React from 'react';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

interface StatCardProps {
  label: string;
  value: string | number;
  growth?: number;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, growth, suffix = '' }) => {
  const formattedValue = typeof value === 'number' ? 
    value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString()
    : value;

  return (
    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">{label}</p>
        {growth !== undefined && (
          <div className={`flex items-center ${growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {growth >= 0 ? (
              <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
            ) : (
              <ArrowTrendingDownIcon className="w-4 h-4 mr-1" />
            )}
            <span className="text-xs">{Math.abs(growth)}% vs last month</span>
          </div>
        )}
      </div>
      <p className="text-2xl font-bold mt-2">
        {formattedValue}{suffix}
      </p>
    </div>
  );
};

export { StatCard };