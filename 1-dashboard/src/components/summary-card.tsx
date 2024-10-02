import { ArrowRight } from 'lucide-react';
import { Progress } from "@/components/ui/progress"

interface SummaryCardProps {
    title: string;
    value: number;
    type: string;
    maxValue?: number;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, type, maxValue }) => (
    <div className="flex flex-col bg-white min-w-52 max-h-40 px-4 py-2 rounded-lg shadow-lg gap-4">
        <div className="flex flex-row justify-between">
            <div className='rounded-lg p-2 bg-amber-100'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1783 0.271317H2.8217C1.55969 0.271317 0.538603 1.30387 0.538603 2.56589L0.52713 23.2171L5.11628 18.6279H21.1783C22.4403 18.6279 23.4729 17.5954 23.4729 16.3333V2.56589C23.4729 1.30387 22.4403 0.271317 21.1783 0.271317ZM18.8837 14.0388H5.11628V11.7442H18.8837V14.0388ZM18.8837 10.5969H5.11628V8.30233H18.8837V10.5969ZM18.8837 7.15504H5.11628V4.86046H18.8837V7.15504Z" fill="#C69A01"/>
                </svg>
            </div>
            <ArrowRight color='#ADA8A8' size={24} className='my-auto'/>
        </div>
        <div className='uppercase font-extrabold tracking-wider text-sm text-[#00C9B1]'>
            {title}
        </div>
        <Progress value={value} />
        <div className='flex flex-row justify-between capitalize font-normal text-xs tracking-wide'>
            <p className='text-gray-500'>{value} {type}</p>
            {maxValue && (
                <p className='text-black'>/{maxValue}</p>
            )}
        </div>
    </div>
)