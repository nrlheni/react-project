import { X } from "lucide-react";

export const AlertCard = () => (
    <div className="w-full h-auto flex flex-col items-start rounded-lg bg-red-700 text-white p-3 gap-4">
        <div className="w-full flex flex-row items-center justify-between">
            <h4 className="text-sm font-semibold tracking-widefont-bold">Billing Expiration</h4>
            <X className="hover:cursor-pointer hover:opacity-75" />
        </div>
        <div className="text-[10px] font-light tracking-wide">Your billing is about expired in 3 days, Soon your account will be unactivated</div>
    </div>
)