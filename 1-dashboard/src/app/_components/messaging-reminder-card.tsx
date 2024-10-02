import { AddButton } from "./add-button";
import { ReminderItem, ReminderItemProps } from "./messaging-reminder-item";

interface ReminderCardProps {
    data: ReminderItemProps[];
}
export const ReminderCard: React.FC<ReminderCardProps> = ({ data }) => {
  // Sort the reminder data by dueDate
  const sortedReminders = data
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
    .slice(0, 3);

  return (
    <div className="w-full border shadow-md min-h-40 border-black rounded-md py-4 px-6">
      <div className="flex flex-col items-start justify-start gap-6">
        <div className="w-full flex flex-row items-start justify-between">
          <div className="text-sm font-light tracking-wide">Reminder</div>
          <AddButton />
        </div>
        <div className="flex flex-col w-full gap-4 mb-5">
          {sortedReminders.map((reminder, index) => (
            <ReminderItem
              key={index}
              description={reminder.description}
              dueDate={reminder.dueDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};