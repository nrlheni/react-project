import React from "react";
import { Clock4, Logs } from "lucide-react";

interface TaskCardProps {
    title: string;
    description: string;
    date: string | number;
}

const formatDate = (dateInput: string | number) => {
    const date = new Date(dateInput);
    const currentYear = new Date().getFullYear();

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return year === currentYear
        ? `${day} ${month}`
        : `${day} ${month} '${String(year).slice(-2)}`;
};

export const TaskCard: React.FC<TaskCardProps> = ({ title, description, date }) => {
    const formattedDate = formatDate(date);

    return (
        <div className="w-48 min-h-36 bg-white rounded-xl py-4 px-6">
            <div className="flex flex-col items-start justify-start gap-3">
                <div className="text-sm font-semibold text-gray-800 mb-1">{title}</div>
                <div className="text-[10px] font-semibold text-gray-400 line-clamp-2">{description}</div>
                <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-row items-start gap-1">
                        <Clock4 size={16} className="text-white fill-gray-600" />
                        <div className="text-[10px] text-gray-600">{formattedDate}</div>
                    </div>
                    <Logs size={16} className="text-gray-600" />
                </div>
            </div>
        </div>
    );
};