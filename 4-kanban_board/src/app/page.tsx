import { Navbar } from "@/components/navbar";
import { SectionTitle } from "@/components/section-title";
import { TaskCard } from "@/components/task-card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { SelectGroup } from "@radix-ui/react-select";
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    date: string;
}

interface Section {
    sectionTitle: string;
    status: string;
}

const initialSections: Section[] = [
    { sectionTitle: 'Backlog', status: 'backlog' },
    { sectionTitle: 'To Do', status: 'todo' },
    { sectionTitle: 'In Progress', status: 'in_progress' },
    { sectionTitle: 'Done', status: 'done' },
  ];

  const initialTasks: Task[] = [
    {
      id: 1,
      title: 'Design Landing Page',
      description: 'Create a mockup design for the landing page.',
      status: 'backlog',
      date: '2024-10-01T10:00:00Z'
    },
    {
      id: 2,
      title: 'Research Competitor Analysis',
      description: 'Analyze top 5 competitors in the market.',
      status: 'backlog',
      date: '2024-10-02T09:00:00Z'
    },
    {
      id: 3,
      title: 'Implement Authentication',
      description: 'Integrate user authentication with OAuth.',
      status: 'todo',
      date: '2024-10-03T14:30:00Z'
    },
    {
      id: 4,
      title: 'Set up Database',
      description: 'Configure the PostgreSQL database.',
      status: 'todo',
      date: '2024-10-03T11:00:00Z'
    },
    {
      id: 5,
      title: 'Develop API Endpoints',
      description: 'Create RESTful API endpoints for the project.',
      status: 'in_progress',
      date: '2024-10-04T12:00:00Z'
    },
    {
      id: 6,
      title: 'UI/UX Design Review',
      description: 'Review the design for the upcoming release.',
      status: 'in_progress',
      date: '2024-10-04T08:30:00Z'
    },
    {
      id: 7,
      title: 'Fix Navbar Bug',
      description: 'Resolve the issue with the responsive navbar.',
      status: 'done',
      date: '2024-10-01T17:00:00Z'
    },
    {
      id: 8,
      title: 'Optimize Page Load Time',
      description: 'Improve page performance by optimizing assets.',
      status: 'done',
      date: '2024-10-02T15:00:00Z'
    }
];

const Index = () => {
    const [sections, setSections] = useState(initialSections);
    const [tasks, setTasks] = useState(initialTasks);
    const [openSectionDialog, setOpenSectionDialog] = useState(false);
    const [openCardDialog, setOpenCardDialog] = useState(false);
    const [newSectionName, setNewSectionName] = useState('');
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [newTaskStatus, setNewTaskStatus] = useState('');
    const [dueDate, setDueDate] = useState<Date | undefined>()

    const addSection = () => {
        setOpenSectionDialog(false)
        const newSection: Section = {
            sectionTitle: newSectionName ?? `New Section ${sections.length + 1}`,
            status: newSectionName?.toLowerCase().replace(/\s+/g, '_') ?? `new_section_${sections.length + 1}`
        };
        setSections([...sections, newSection]);

        setNewSectionName('');
    };

    const addTask = () => {
        setOpenCardDialog(false);
        const newTask: Task = {
            id: tasks.length + 1,
            title: newTaskName || `Task-${tasks.length + 1}`,
            description: newTaskDescription || `Task description for Task-${tasks.length + 1}`,
            status: newTaskStatus ?? sections[0].status,
            date: dueDate?.toISOString() ?? new Date().toISOString()
        };
        setTasks([...tasks, newTask]);
        setNewTaskName('');
        setNewTaskDescription('');
    };

    const handleStatusChange = (value: string) => {
        setNewTaskStatus(value);
    }


    return (
        <div className="flex min-h-screen w-full">
            <div className="w-full flex flex-col">
                <Navbar />
                <div className="px-6 py-4">
                    <div className="w-full flex flex-grow gap-4 justify-start mx-auto my-4">
                        <div className="flex flex-col gap-2">
                            <Button variant="outline" onClick={() => setOpenSectionDialog(true)} className="w-48 flex flex-row items-center justify-center top-0 text-center shadow bg-neutral-200 gap-1 p-3 hover:bg-neutral-200 hover:opacity-80">
                                <Plus size={16} className="text-gray-500 font-bold" />
                                <div className="text-[10px] text-gray-500 font-bold">Create New Section</div>
                            </Button>
                            <Dialog open={openSectionDialog} onOpenChange={setOpenSectionDialog}>
                                <DialogTrigger asChild>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>New Section</DialogTitle>
                                    <DialogDescription>
                                    </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4 justify-start">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-left">
                                                Name/Title
                                            </Label>
                                            <Input
                                                id="name"
                                                className="col-span-3"
                                                onChange={(e) => setNewTaskName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter className="flex items-start">
                                        <Button className="bg-violet-500" type="submit" onClick={addSection} >Submit</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <Button
                                variant="outline"
                                className="w-48 flex flex-row items-center justify-center text-center bg-neutral-200 gap-1 hover:bg-neutral-200 hover:opacity-80"
                                onClick={() => setOpenCardDialog(true)}
                            >
                                <Plus size={16} className="text-gray-500 font-bold" />
                                <div className="text-[10px] text-gray-500 font-bold">Create New Card</div>
                            </Button>
                            <Dialog open={openCardDialog} onOpenChange={setOpenCardDialog}>
                                <DialogTrigger asChild>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>New Task</DialogTitle>
                                    <DialogDescription>
                                    </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4 justify-end">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-left">
                                                Name/Title
                                            </Label>
                                            <Input
                                                id="name"
                                                className="w-full col-span-3"
                                                onChange={(e) => setNewTaskName(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="description" className="text-left">
                                                Description
                                            </Label>
                                            <Textarea
                                                id="description"
                                                className="col-span-3"
                                                onChange={(e) => setNewTaskDescription(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="due_date" className="text-left">
                                                Due Date
                                            </Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "col-span-2 justify-start text-left font-normal",
                                                            !dueDate && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {dueDate ? format(dueDate, "PP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        className="bg-white rounded"
                                                        mode="single"
                                                        selected={dueDate}
                                                        onSelect={setDueDate}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                                </Popover>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="status" className="text-left">
                                                Status
                                            </Label>
                                            <Select name="status" onValueChange={handleStatusChange}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Select a status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {sections.map((section) => (
                                                        <SelectGroup key={section.status}>
                                                            <SelectItem value={section.status}>{section.sectionTitle}</SelectItem>
                                                        </SelectGroup>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <DialogFooter className="flex items-start">
                                        <Button className="bg-violet-500" type="submit" onClick={addTask} >Submit</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className="flex flex-grow gap-4 px-2 min-w-screen-lg min-h-[80vh] overflow-x-auto">
                            {sections.map((section) => {
                                const filteredTasks = tasks.filter((task) => task.status === section.status);
                                return (
                                    <div key={section.sectionTitle} className="flex flex-col gap-3 mb-2">
                                        <SectionTitle name={section.sectionTitle} amount={filteredTasks.length} />
                                        <div className="flex flex-col gap-3 max-h-[68vh] overflow-y-auto pe-2">
                                            {filteredTasks.map((task) => (
                                                <TaskCard
                                                    key={task.id}
                                                    title={task.title}
                                                    description={task.description}
                                                    date={task.date}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index;