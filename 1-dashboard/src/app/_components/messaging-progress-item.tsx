import { cn } from '@/utils/cn';
import React, { useEffect, useState } from 'react';

export interface ProgressItemProps {
  sentAt: string; // Example format: '2024-10-01T12:00:00Z'
  sentTo: string;
  message: string;
  isNewest: boolean;
}

export const ProgressItem: React.FC<ProgressItemProps> = ({ sentAt, sentTo, message, isNewest }) => {
  const [timeAgo, setTimeAgo] = useState<{ value: number; unit: string }>({ value: 0, unit: '' });

  // Function to calculate time difference and return only value and unit
  const calculateTimeAgo = (sentAt: string) => {
    const sentDate = new Date(sentAt);
    const now = new Date();
    const timeDiff = Math.abs(now.getTime() - sentDate.getTime());

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return { value: seconds, unit: 'second' };
    } else if (minutes < 60) {
      return { value: minutes, unit: 'minute' };
    } else if (hours < 24) {
      return { value: hours, unit: 'hour' };
    } else {
      return { value: days, unit: 'day' };
    }
  };

  useEffect(() => {
    setTimeAgo(calculateTimeAgo(sentAt));

    // Optional: Update the time every second for real-time updates
    const interval = setInterval(() => {
      setTimeAgo(calculateTimeAgo(sentAt));
    }, 1000);

    return () => clearInterval(interval);
  }, [sentAt]);

  return (
    <div className="w-full flex flex-row items-start gap-2">
        <div className="flex flex-col items-center justify-center gap-1">
            <div className={cn('rounded-full size-4', isNewest ? 'bg-teal-500' : 'bg-gray-400')} />
            <div className={cn('h-12 border mx-auto', isNewest ? 'border-teal-500 bg-teal-500' : 'border-gray-400 bg-gray-400')} />
        </div>
        <div className="flex flex-col justify-start gap-2 w-full">
            <p className="text-[10px] font-bold tracking-wide">
            {timeAgo.value} {timeAgo.unit}
            {timeAgo.value !== 1 ? 's' : ''} ago
            </p>
            <p className="w-full max-w-full text-xs tracking-wide line-clamp-2">
            Sent to {sentTo}, “{message}”
            </p>
        </div>
    </div>
  );
};
