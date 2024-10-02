import { EllipsisVertical } from "lucide-react";
import React from "react";

interface SectionTitleProps {
    name: string;
    amount: number;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ name, amount }) => {

    return (
        <div className="w-48 bg-violet-600 rounded-md shadow p-3">
            <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row gap-1">
                    <div className="text-xs text-white font-medium capitalize">{name}</div>
                    <div className="rounded-full size-4 text-center py-0.5 bg-white text-[8px] text-violet-600 font-bold capitalize">{amount}</div>
                </div>
                <EllipsisVertical size={12} className="text-white right-0"/>
            </div>
        </div>
    );
};