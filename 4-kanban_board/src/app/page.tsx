import { Navbar } from "@/components/navbar";
import { SectionTitle } from "@/components/section-title";
import { TaskCard } from "@/components/task-card";
import { Button } from "@/components/ui/button";
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

    // Function to add a new task to a specific section
    const addTask = (status: string) => {
        const newTask: Task = {
            id: tasks.length + 1,
            title: 'Card Name',
            description: 'Add your description',
            status: status, // Set the status based on the section
            date: new Date().toISOString()
        };
        setTasks([...tasks, newTask]); // Add the new task to the existing tasks
    };

    // Function to add a new section
    const addSection = () => {
        const newSection: Section = {
            sectionTitle: `New Section ${sections.length + 1}`,
            status: `new_section_${sections.length + 1}`
        };
        setSections([...sections, newSection]); // Add the new section to the existing sections
    };

    return (
        <div className="flex min-h-screen w-full">
            <div className="w-full flex flex-col">
                <Navbar />
                <div className="px-6 py-4">
                    <div className="w-full flex flex-grow gap-2 justify-start min-w-screen-lg min-h-[80vh] overflow-x-auto mx-auto my-4">
                        {sections.map((section) => {
                            // Filter tasks based on section status
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
                                    <Button
                                        variant="outline"
                                        className="w-48 flex flex-row items-center justify-center text-center bg-neutral-200 gap-1 mt-auto hover:bg-neutral-200 hover:opacity-80"
                                        onClick={() => addTask(section.status)}
                                    >
                                        <Plus size={16} className="text-gray-500 font-bold" />
                                        <div className="text-[10px] text-gray-500 font-bold">Create New Card</div>
                                    </Button>
                                </div>
                            )
                        })}
                        <Button variant="outline" onClick={addSection} className="w-48 flex flex-row items-center justify-center top-0 text-center shadow bg-neutral-200 gap-1 p-3 hover:bg-neutral-200 hover:opacity-80">
                            <Plus size={16} className="text-gray-500 font-bold" />
                            <div className="text-[10px] text-gray-500 font-bold">Create New Section</div>
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index;