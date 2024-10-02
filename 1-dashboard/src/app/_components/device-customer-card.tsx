import { EntityRow } from "@/components/entity-row";

export interface DeviceCustomer {
    name: string;
    statusName: string;
    statusType: "success" | "failed";
    imageUrl: string;
}

interface DeviceCustomerCardProps {
    data: DeviceCustomer[];
}

export const DeviceCustomerCard: React.FC<DeviceCustomerCardProps> = ({ data }) => {
    const getInitials = (name: string) => {
        const names = name.split(" ");
        return names.map(n => n.charAt(0).toUpperCase()).join("");
    };
    return (
        <div className="w-full border shadow-md min-h-40 border-black rounded-md py-4 px-6">
            <div className="flex flex-col items-start justify-start gap-4">
                <div className="text-sm font-light tracking-wide">Device Status</div>
                <div className="flex flex-col w-full gap-1">
                    {data.map((customer, index) => (
                        <EntityRow
                        key={index}
                        logo={
                            customer.imageUrl ? (
                            <img className='rounded-full' sizes='40' src={customer.imageUrl} alt={customer.name} />
                            ) : (
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white">
                                {getInitials(customer.name)}
                            </div>
                            )
                        }
                        name={customer.name}
                        statusName={customer.statusName}
                        statusType={customer.statusType}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};