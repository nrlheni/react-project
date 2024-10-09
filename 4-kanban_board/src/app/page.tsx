import { Navbar } from "@/components/navbar";
import { SectionTitle } from "@/components/section-title";
import { TaskCard } from "@/components/task-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SelectGroup } from "@radix-ui/react-select";
import { Plus } from "lucide-react";
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
    const [open, setOpen] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [newTaskStatus, setNewTaskStatus] = useState('');

    const addTask = () => {
        setOpen(false);
        const newTask: Task = {
            id: tasks.length + 1,
            title: newTaskName || `Task-${tasks.length + 1}`,
            description: newTaskDescription || `Task description for Task-${tasks.length + 1}`,
            status: newTaskStatus,
            date: new Date().toISOString()
        };
        setTasks([...tasks, newTask]);
        setNewTaskName('');
        setNewTaskDescription('');
    };

    const handleStatusChange = (value: string) => {
        setNewTaskStatus(value);
    }

    const addSection = () => {
        const newSection: Section = {
            sectionTitle: `New Section ${sections.length + 1}`,
            status: `new_section_${sections.length + 1}`
        };
        setSections([...sections, newSection]);
    };

    return (
        <div className="flex min-h-screen w-full">
            <div className="w-full flex flex-col">
                <Navbar />
                <div className="px-6 py-4">
                    <div className="w-full flex flex-grow gap-2 justify-start min-w-screen-lg min-h-[80vh] overflow-x-auto mx-auto my-4">
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
                        <div className="flex flex-col gap-2">
                            <Button variant="outline" onClick={addSection} className="w-48 flex flex-row items-center justify-center top-0 text-center shadow bg-neutral-200 gap-1 p-3 hover:bg-neutral-200 hover:opacity-80">
                                <Plus size={16} className="text-gray-500 font-bold" />
                                <div className="text-[10px] text-gray-500 font-bold">Create New Section</div>
                            </Button>
                            <Button
                                variant="outline"
                                className="w-48 flex flex-row items-center justify-center text-center bg-neutral-200 gap-1 hover:bg-neutral-200 hover:opacity-80"
                                onClick={() => setOpen(true)}
                            >
                                <Plus size={16} className="text-gray-500 font-bold" />
                                <div className="text-[10px] text-gray-500 font-bold">Create New Card</div>
                            </Button>
                            <Dialog open={open} onOpenChange={setOpen}>
                                <DialogTrigger asChild>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>New Task</DialogTitle>
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
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-left">
                                                Description
                                            </Label>
                                            <Textarea
                                                id="username"
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-left">
                                                Status
                                            </Label>
                                            <Select onValueChange={handleStatusChange}>
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
                                        <Button type="submit" onClick={addTask} >Submit</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index;