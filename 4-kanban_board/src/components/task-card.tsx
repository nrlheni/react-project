import React, { useEffect, useState } from "react";
import { Clock4, Logs } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup } from "@/components/ui/select";
// import { format } from "date-fns";

interface TaskCardProps {
    title: string;
    description: string;
    date: string | number;
    status: string;
    onUpdate: (title: string, description: string, date: string, status: string) => void;
    sections: { title: string; status: string }[];
}

const formatDate = (dateInput: string | number) => {
    const date = new Date(dateInput);
    const currentYear = new Date().getFullYear();

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return year === currentYear
        ? `${day} ${month}`
        : `${day} ${month} '${String(year).slice(-2)}`;
};

export const TaskCard: React.FC<TaskCardProps> = ({ title, description, date, status, onUpdate, sections }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedDate, setEditedDate] = useState<string>(new Date(date).toISOString().split("T")[0]);
    const [editedStatus, setEditedStatus] = useState(status);

    useEffect(() => {
        setEditedStatus(status);
    }, [status]);

    const handleUpdate = () => {
        onUpdate(editedTitle, editedDescription, editedDate, editedStatus);
        setOpenDialog(false);
    };

    const formattedDate = formatDate(date);

    return (
        <div className="w-48 min-h-36 bg-white rounded-xl py-4 px-6">
            <div className="flex flex-col items-start justify-start gap-3">
                <div className="text-sm font-semibold text-gray-800 mb-1">{title}</div>
                <div className="text-[10px] font-semibold text-gray-400 line-clamp-2">{description}</div>
                <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-row items-start gap-1">
                        <Clock4 size={16} className="text-white fill-gray-600" />
                        <div className="text-[10px] text-gray-600">{formattedDate}</div>
                    </div>
                    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                        <DialogTrigger asChild>
                            <Logs size={16} className="text-gray-600 cursor-pointer" />
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Update Task</DialogTitle>
                                <DialogDescription>
                                    Edit the task details below.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Input
                                        id="task-title"
                                        className="col-span-4"
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Textarea
                                        id="task-description"
                                        className="col-span-4"
                                        value={editedDescription}
                                        onChange={(e) => setEditedDescription(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Input
                                        id="task-date"
                                        type="date"
                                        className="col-span-4"
                                        value={editedDate}
                                        onChange={(e) => setEditedDate(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Select value={editedStatus} onValueChange={setEditedStatus}>
                                        <SelectTrigger className="col-span-4">
                                            <SelectValue placeholder="Select a status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {sections.map((section) => (
                                                <SelectGroup key={section.status}>
                                                    <SelectItem value={section.status}>{section.title}</SelectItem>
                                                </SelectGroup>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <DialogFooter className="flex items-start">
                                <Button className="bg-violet-500" type="submit" onClick={handleUpdate}>Update</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};
