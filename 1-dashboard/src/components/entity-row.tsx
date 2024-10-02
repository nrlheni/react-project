import { Badge } from './ui/badge';

interface EntityRowProps {
    logo: React.ReactNode;
    name: string;
    statusName: string;
    statusType: 'success' | 'failed';
}

export const EntityRow: React.FC<EntityRowProps> = ({ logo, name, statusName, statusType }) => (
    <div className="flex flex-row border-b p-2 justify-left items-center gap-4">
        <div className='rounded-full size-8 bg-teal-500 flex items-center justify-center'>
            {logo}
        </div>
        <div className='text-xs font-semibold tracking-wide'>{name}</div>
        <div className="w-auto">
            <Badge variant={`${statusType === 'success' ? 'success' : 'danger'}`} className= "text-xs tracking-wide uppercase">{statusName}</Badge>
        </div>
    </div>
)