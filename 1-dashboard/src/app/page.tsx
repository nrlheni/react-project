import { SectionHeader } from "@/components/section-header";
import { SummaryCard } from "@/components/summary-card";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import Banner from '../assets/dashboard-banner.png'
import { ProgressCard } from "./_components/messaging-progress-card";
import { ReminderCard } from "./_components/messaging-reminder-card";
import { DeviceStatus, DeviceStatusCard } from "./_components/device-status-card";
import { DeviceCustomer, DeviceCustomerCard } from "./_components/device-customer-card";
import { Footer } from "@/components/footer";
import { ProgressItemProps } from "./_components/messaging-progress-item";
import { ReminderItemProps } from "./_components/messaging-reminder-item";

const userData = {
    name: "Jasmine J",
    imgUrl: "https://github.com/shadcn.png"
}

const deviceStatusData: DeviceStatus[] = [
    { name: "Ikhsan's Device", statusName: "connected", statusType: "success" },
    { name: "Hadi's Device", statusName: "disconnected", statusType: "failed" },
];

const deviceCustomerData: DeviceCustomer[] = [
    { name: "Gretchen Stanton", statusName: "verified", statusType: "success", imageUrl: "https://github.com/shadcn.png" },
    { name: "John Doe", statusName: "unverified", statusType: "failed", imageUrl: "https://github.com/johndoe.png" },
];

const progressData: ProgressItemProps[] = [
    {
        sentAt: "2024-10-01T12:00:00Z",
        sentTo: "Thomas",
        message: "Hi, how are you today Thomas. Did you feel good today?",
        isNewest: false
    },
    {
        sentAt: "2024-09-30T14:30:00Z",
        sentTo: "Sarah",
        message: "Hey Sarah, just checking in on our project.",
        isNewest: false
    },
    {
        sentAt: "2024-09-29T10:00:00Z",
        sentTo: "Alex",
        message: "Alex, did you receive my last email?",
        isNewest: false
    },
    {
        sentAt: "2024-09-28T09:45:00Z",
        sentTo: "Jamie",
        message: "Jamie, are we still on for the meeting?",
        isNewest: false
    }
];

const reminderData: ReminderItemProps[] = [
    {
      description: "Prepare presentation for the client meeting.",
      dueDate: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from now
    },
    {
      description: "Send invoices to Jimmy, and ask him about yesterday.",
      dueDate: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes from now
    },
    {
      description: "Finish writing the report for the project.",
      dueDate: new Date(Date.now() + 20 * 60 * 1000), // 20 minutes from now
    },
];

const Index = () => {
    return (
        <div className="flex flex-row w-full">
            <Sidebar />
            <div className="flex flex-col min-h-screen w-full">
                <Navbar name={userData.name} imgUrl={userData.imgUrl}  />
                <div className="w-full flex flex-col">
                    <div className="relative">
                        <img src={Banner} alt="Banner" className="w-full h-auto" />
                        <div className="absolute top-6 w-full flex flex-col gap-8 justify-start">
                            <div className="flex flex-row w-1/2 justify-center items-center mx-12">
                                <h1 className="text-[50px] font-semibold underline underline-offset-4 tracking-wide capitalize">
                                    Here’s What All You Need
                                </h1>
                            </div>
                            <div className="flex flex-wrap gap-8 ml-10 xl:gap-12 justify-start mx-auto">
                                <SummaryCard title="Message Bandwidth" value={20} type="Messages" maxValue={100} />
                                <SummaryCard title="Broadcast Message" value={20} type="Messages" />
                                <SummaryCard title="Conversation" value={20} type="Conversations" />
                                <SummaryCard title="Outbound Message" value={35} type="Percents" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full px-11 py-4 gap-4 mb-8">
                        <SectionHeader title="Messaging"/>
                        <div className="flex flex-row gap-4">
                            <div className="w-1/3 flex">
                                <ProgressCard data={progressData} />
                            </div>
                            <div className="w-full flex">
                                <ReminderCard data={reminderData} />
                            </div>
                        </div>
                        <SectionHeader title="Devices"/>
                        <div className="w-full flex flex-row gap-8">
                            <div className="w-1/2 flex">
                                <DeviceStatusCard data={deviceStatusData}/>
                            </div>
                            <div className="w-1/2 flex">
                                <DeviceCustomerCard data={deviceCustomerData} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Index;
