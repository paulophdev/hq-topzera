import { ChevronUp, Library } from 'lucide-react';

export default function Footer() {
    return (
        <footer className='p-5 bg-gray-800 flex items-center justify-between'>
            <h1 className="font-semibold text-xl flex items-center">
                <Library size={30} /> <span className='uppercase'>HQTOPZERA</span> <span className='text-xs'>&nbsp;- Todos os direitos reservados</span>
            </h1>
            <div className='flex items-center gap-2'>
                <span className='text-sm'>HQTOPZERA 2023</span>
                <div className='w-10 h-10 bg-gray-950 rounded flex items-center justify-center cursor-pointer'>
                    <ChevronUp size={30} />
                </div>
            </div>
        </footer>
    )
}