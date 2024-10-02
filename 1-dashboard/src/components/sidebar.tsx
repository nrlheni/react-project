import { AlertCard } from "@/app/_components/alert-card";
import { Badge } from "./ui/badge";
import { Calendar, MessageSquare, MonitorSmartphone, Rss, SquareKanban, TrendingUp, UserRound, Users } from "lucide-react";

export const Sidebar = () => (
    <div className="flex flex-col w-64 min-h-screen items-start shadow-lg p-4 gap-5">
        <div className="flex flex-row justify-center mx-auto gap-2">
            <div className="text-sm tracking-widest font-semibold">WhatsTrack</div>
            <Badge variant="outline" className="flex w-16 bg-amber-50 items-center justify-center rounded-full border-yellow-500 text-yellow-500 font-light">PRO</Badge>
        </div>
        <AlertCard />
        <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-start uppercase text-black/80 text-[10px] font-medium">DASHBOARD</div>
            <div className="space-y-2">
                <div className="flex items-center gap-2 ml-6">
                    <div className="inline-flex items-center rounded-full bg-teal-100 px-2 py-2 gap-2">
                        <SquareKanban className="rotate-180 text-teal-500" />
                        <div className="text-xs font-medium text-teal-500 my-auto">Overview</div>
                    </div>
                </div>

                <div className="flex items-center gap-2 ml-6">
                    <TrendingUp className="text-black" />
                    <div className="text-xs font-medium text-black my-auto">Analytics</div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-start uppercase text-black/80 text-[10px] font-medium">DEVICES</div>
            <div className="flex flex-col items-center px-1">
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <MonitorSmartphone />
                    <div className="text-xs my-auto">Attached Devices</div>
                </div>
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <Users />
                    <div className="text-xs my-auto">Customer Devices</div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-start uppercase text-black/80 text-[10px] font-medium">MESSAGING</div>
            <div className="flex flex-col items-center px-1">
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 0.5H3C1.625 0.5 0.5125 1.625 0.5125 3L0.5 25.5L5.5 20.5H23C24.375 20.5 25.5 19.375 25.5 18V3C25.5 1.625 24.375 0.5 23 0.5ZM20.5 15.5H5.5V13H20.5V15.5ZM20.5 11.75H5.5V9.25H20.5V11.75ZM20.5 8H5.5V5.5H20.5V8Z" fill="black"/>
                    </svg>
                    <div className="text-xs my-auto">Templating</div>
                </div>
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <MessageSquare />
                    <div className="text-xs my-auto">Send Message</div>
                </div>
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 5.25V0.25L0.75 9L9.5 17.75V12.625C15.75 12.625 20.125 14.625 23.25 19C22 12.75 18.25 6.5 9.5 5.25Z" fill="black"/>
                    </svg>
                    <div className="text-xs my-auto">Auto Reply</div>
                </div>
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <Rss />
                    <div className="text-xs my-auto">Broadcast</div>
                </div>
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <Calendar />
                    <div className="text-xs my-auto">Scheduler</div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-start uppercase text-black/80 text-[10px] font-medium">MEMBER</div>
            <div className="flex flex-col items-center px-1">
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7_197)">
                        <path d="M26.25 3.75H3.75C2.375 3.75 1.25 4.875 1.25 6.25V23.75C1.25 25.125 2.375 26.25 3.75 26.25H26.25C27.625 26.25 28.75 25.125 28.75 23.75V6.25C28.75 4.875 27.625 3.75 26.25 3.75ZM15 13.75H3.75V11.25H15V13.75ZM15 8.75H3.75V6.25H15V8.75Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_7_197">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <div className="text-xs my-auto">Member Plan</div>
                </div>
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7_200)">
                        <path d="M5 7.5H2.5V25C2.5 26.375 3.625 27.5 5 27.5H22.5V25H5V7.5ZM25 2.5H10C8.625 2.5 7.5 3.625 7.5 5V20C7.5 21.375 8.625 22.5 10 22.5H25C26.375 22.5 27.5 21.375 27.5 20V5C27.5 3.625 26.375 2.5 25 2.5ZM23.75 13.75H11.25V11.25H23.75V13.75ZM18.75 18.75H11.25V16.25H18.75V18.75ZM23.75 8.75H11.25V6.25H23.75V8.75Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_7_200">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <div className="text-xs my-auto">Invoices</div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-start uppercase text-black/80 text-[10px] font-medium">PROFILE</div>
            <div className="flex flex-col items-center px-1">
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <UserRound className="fill-black text-white" />
                    <div className="text-xs my-auto">Profile</div>
                </div>
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.925 13.17C20.97 12.795 21 12.405 21 12C21 11.595 20.97 11.205 20.91 10.83L23.445 8.85C23.67 8.67 23.73 8.34 23.595 8.085L21.195 3.93C21.045 3.66 20.73 3.57 20.46 3.66L17.475 4.86C16.845 4.38 16.185 3.99 15.45 3.69L15 0.51C14.955 0.21 14.7 0 14.4 0H9.60001C9.30001 0 9.06001 0.21 9.01501 0.51L8.56501 3.69C7.83001 3.99 7.15501 4.395 6.54001 4.86L3.55501 3.66C3.28501 3.555 2.97001 3.66 2.82001 3.93L0.420011 8.085C0.270011 8.355 0.330011 8.67 0.570011 8.85L3.10501 10.83C3.04501 11.205 3.00001 11.61 3.00001 12C3.00001 12.39 3.03001 12.795 3.09001 13.17L0.555011 15.15C0.330011 15.33 0.270011 15.66 0.405011 15.915L2.80501 20.07C2.95501 20.34 3.27001 20.43 3.54001 20.34L6.52501 19.14C7.15501 19.62 7.81501 20.01 8.55001 20.31L9.00001 23.49C9.06001 23.79 9.30001 24 9.60001 24H14.4C14.7 24 14.955 23.79 14.985 23.49L15.435 20.31C16.17 20.01 16.845 19.605 17.46 19.14L20.445 20.34C20.715 20.445 21.03 20.34 21.18 20.07L23.58 15.915C23.73 15.645 23.67 15.33 23.43 15.15L20.925 13.17ZM12 16.5C9.52501 16.5 7.50001 14.475 7.50001 12C7.50001 9.525 9.52501 7.5 12 7.5C14.475 7.5 16.5 9.525 16.5 12C16.5 14.475 14.475 16.5 12 16.5Z" fill="black"/>
                    </svg>
                    <div className="text-xs my-auto">Settings</div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-start uppercase text-black/80 text-[10px] font-medium">API DOCUMENTATION</div>
            <div className="flex flex-col items-center px-1">
                <div className="flex flex-row justify-start gap-2 px-4 py-2 w-full max-w-xs">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 1.5C5.25 0.8125 4.6875 0.25 4 0.25C3.3125 0.25 2.75 0.8125 2.75 1.5V6.5H0.25V14H7.75V6.5H5.25V1.5ZM10.25 19C10.25 20.625 11.3 22 12.75 22.525V27.75H15.25V22.525C16.7 22.0125 17.75 20.6375 17.75 19V16.5H10.25V19ZM0.25 19C0.25 20.625 1.3 22 2.75 22.525V27.75H5.25V22.525C6.7 22 7.75 20.625 7.75 19V16.5H0.25V19ZM25.25 6.5V1.5C25.25 0.8125 24.6875 0.25 24 0.25C23.3125 0.25 22.75 0.8125 22.75 1.5V6.5H20.25V14H27.75V6.5H25.25ZM15.25 1.5C15.25 0.8125 14.6875 0.25 14 0.25C13.3125 0.25 12.75 0.8125 12.75 1.5V6.5H10.25V14H17.75V6.5H15.25V1.5ZM20.25 19C20.25 20.625 21.3 22 22.75 22.525V27.75H25.25V22.525C26.7 22.0125 27.75 20.6375 27.75 19V16.5H20.25V19Z" fill="black"/>
                    </svg>
                    <div className="text-xs">API Documentation</div>
                </div>
            </div>
        </div>
    </div>
)