import { ProgressItem, ProgressItemProps } from "./messaging-progress-item";


interface ProgressCardProps {
    data: ProgressItemProps[]; // Accept progress data as props
}

const markAsNewest = (data: ProgressItemProps[]) => {
    const latestSentAt = Math.max(...data.map(item => new Date(item.sentAt).getTime()));
    return data.map(item => ({
        ...item,
        isNewest: new Date(item.sentAt).getTime() === latestSentAt,
    }));
};

export const ProgressCard: React.FC<ProgressCardProps> = ({ data }) => {
    const processedData = markAsNewest(data).slice(0, 4);

    return (
        <div className="w-full border shadow-md min-h-40 border-black rounded-md p-4">
            <div className="flex flex-col items-start justify-start gap-4">
                <div className="text-sm font-light tracking-wide">Recent Message Sent</div>
                <div className="flex flex-col w-full gap-1">
                    {processedData.map(({ sentAt, sentTo, message, isNewest }) => (
                        <ProgressItem
                            key={sentAt}
                            sentAt={sentAt}
                            sentTo={sentTo}
                            message={message}
                            isNewest={isNewest}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
