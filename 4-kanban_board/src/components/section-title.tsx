import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";

interface SectionTitleProps {
    name: string;
    amount: number;
    onUpdate: (name: string) => void;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ name, amount, onUpdate }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [editedName, setEditedName] = useState(name);

    const handleUpdate = () => {
        onUpdate(editedName);
        setOpenDialog(false);
    };

    return (
        <div className="w-48 bg-violet-600 rounded-md shadow p-3">
            <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row gap-1">
                    <div className="text-xs text-white font-medium capitalize">{name}</div>
                    <div className="rounded-full size-4 text-center py-0.5 bg-white text-[8px] text-violet-600 font-bold capitalize">{amount}</div>
                </div>
                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild>
                        <EllipsisVertical size={12} className="text-white cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Update Section</DialogTitle>
                            <DialogDescription>
                                Edit the section details below.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Input
                                    id="section-name"
                                    className="col-span-4"
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                />
                            </div>
                        </div>
                        <DialogFooter className="flex items-start">
                            <Button className="bg-violet-500" type="submit" onClick={handleUpdate}>Update</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};
