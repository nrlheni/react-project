import { EntityRow } from "@/components/entity-row";
import { Smartphone } from "lucide-react";

export interface DeviceStatus {
    name: string;
    statusName: string;
    statusType: "success" | "failed";
}

interface DeviceStatusCardProps {
    data: DeviceStatus[];
}

export const DeviceStatusCard: React.FC<DeviceStatusCardProps> = ({ data }) => {
  return (
    <div className="w-full border shadow-md min-h-40 border-black rounded-md py-4 px-6">
        <div className="flex flex-col items-start justify-start gap-4">
            <div className="text-sm font-light tracking-wide">Device Status</div>
            <div className="flex flex-col w-full gap-1">
            {data.map((device, index) => (
                <EntityRow
                key={index}
                logo={<Smartphone strokeWidth={2} size={20} color='white' />}
                name={device.name}
                statusName={device.statusName}
                statusType={device.statusType}
                />
            ))}
            </div>
        </div>
    </div>
  );
};