import Link from "next/link";

import { Search, BellRing, User, Library } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="bg-gray-800 flex justify-between items-center h-16 px-5 sticky top-0">
            <div>
                <h1 className="uppercase font-semibold text-xl flex items-center"><Library size={30} /> HQTOPZERA</h1>
            </div>
            <nav className="flex gap-4 text-gray-400 font-semibold">
                <Link href={'/'} className="active">Principal</Link>
                <Link href={'/'}>Marvel</Link>
                <Link href={'/'}>DC</Link>
                <Link href={'/'}>Alternative</Link>
            </nav>
            <div className="flex gap-4 items-center">
                <div>
                    <Link href={'/search'}><Search size={25} /></Link>
                </div>
                <div>
                    <Link href={'/notifications'}><BellRing size={25} /></Link>
                </div>
                <div>
                    <Link href={'/'}><User size={25} /></Link>
                </div>
            </div>
        </div>
    )
}