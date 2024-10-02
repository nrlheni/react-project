import { Bell, LogOut, Settings } from "lucide-react";

interface NavbarProps {
    name: string;
    imgUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ name, imgUrl }) => (
    <div className="w-full h-[60px] flex bg-teal-500 top-0">
        <div className="w-full flex flex-row gap-6 items-center justify-end right-0 text-white p-4">
            <Bell size={20} className="fill-white hover:cursor-pointer hover:opacity-80"/>
            <Settings size={20} className="hover:cursor-pointer hover:opacity-80"/>
            <LogOut size={20} className="hover:cursor-pointer hover:opacity-80" />
            <div className="flex flex-row rounded-full bg-teal-100 hover:opacity-80 hover:cursor-pointer gap-2 p-1">
                <div className='rounded-full size-8 flex items-center justify-center'>
                    <img src={imgUrl} className="rounded-full"/>
                </div>
                <div className="flex items-center justify-center text-[10px] text-teal-500 font-light tracking-wide me-3">{name}</div>
            </div>
        </div>
    </div>
)