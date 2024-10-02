import { Navbar } from "@/components/navbar";
import { UserDataTable } from "./_components/user-data-table";

import data from '../data/user-data.json'

const Index = () => {
    return (
        <div className="flex min-h-screen w-full">
            <div className="w-full flex flex-col">
                <Navbar />
                <UserDataTable data={data} />
            </div>
        </div>
    )
}

export default Index;