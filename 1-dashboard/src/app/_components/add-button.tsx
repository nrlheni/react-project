import { ListPlus } from "lucide-react";

export const AddButton = () => (
    <div className="w-auto">
        <button className="flex flex-row items-center justify-center border border-teal-400 rounded-md gap-1 text-teal-400 p-1 hover:cursor-pointer hover:bg-teal-400 hover:text-white hover:opacity-80">
            <ListPlus size={20}/>
            <div className="text-xs font-bold">ADD</div>
        </button>
    </div>
)