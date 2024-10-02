import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { GripVertical } from "lucide-react";

export interface ReminderItemProps {
  description: string;
  dueDate: Date;
}

export const ReminderItem: React.FC<ReminderItemProps> = ({ description, dueDate }) => {
  const [isActive, setIsActive] = useState(false);

  const calculateDueTime = (dueDate: Date): string => {
    const now = new Date();
    const timeDiff = dueDate.getTime() - now.getTime();

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return `Due in ${seconds} second${seconds !== 1 ? 's' : ''}`;
    } else if (minutes < 60) {
      return `Due in ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else if (hours < 24) {
      return `Due in ${hours} hour${hours !== 1 ? 's' : ''}`;
    } else if (days < 7) {
      return `Due in ${days} day${days !== 1 ? 's' : ''}`;
    } else if (weeks < 4) {
      return `Due in ${weeks} week${weeks !== 1 ? 's' : ''}`;
    } else if (months < 12) {
      return `Due in ${months} month${months !== 1 ? 's' : ''}`;
    } else {
      return `Due in ${years} year${years !== 1 ? 's' : ''}`;
    }
  };

  return (
    <div
      className={`w-full flex flex-row border rounded-md p-4 justify-left items-center gap-4 ${isActive ? 'border-teal-400' : 'border-black'}`}
    >
      <GripVertical
        className={`cursor-grab ${isActive ? 'text-teal-400' : 'text-black'}`}
        onMouseDown={() => setIsActive(true)} // Set active on mouse down
        onMouseUp={() => setIsActive(false)} // Reset active on mouse up
        onMouseLeave={() => setIsActive(false)} // Reset active if mouse leaves
      />
      <Checkbox id="task-item" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="task-item"
          className="text-sm font-medium leading-none cursor-pointer"
        >
          {description}
        </label>
      </div>
      <div className="ml-auto flex w-auto items-center text-[7px] text-white text-center tracking-wide rounded-full bg-red-600 px-4 py-2 uppercase">
        {calculateDueTime(dueDate)}
      </div>
    </div>
  );
};