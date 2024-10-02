import { BellDot } from "lucide-react";

export const Navbar = () => (
    <div className="w-full h-12 bg-white top-0 shadow-md min-w-max overflow-auto p-2">
        <div className="w-full h-full flex flex-row items-center justify-end gap-6 p-4">
            <BellDot size={20} className="text-violet-800"/>
            <div className="flex flex-row justify-center gap-2 items-center">
                <img className="rounded-full size-6" src="https://github.com/shadcn.png" alt="" />
                <div className="text-xs font-medium">Leonetta Lioyd</div>
            </div>
        </div>
    </div>
)