import { ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
    title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
    <div className="flex flex-row p-1 justify-left gap-4">
        <div className='capitalize font-semibold tracking-wide text-xl'>{title}</div>
        <ChevronRight strokeWidth={3} color='#00C9B1' className='my-auto'/>
    </div>
)