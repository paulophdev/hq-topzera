import { BookOpenCheck, Info } from "lucide-react";
import Cover from "../assets/hqs/thor_god_of_thunder/hero.png";
import Image from "next/image";

export default function Highlights() {
    return (
        <section className="px-5 py-10 bg-gradient-to-r from-gray-950 to-gray-700 relative">
            <h1 className="text-6xl uppercase font-bold">Thor: God of <br />Thunder</h1>
            <div className="flex items-center gap-2 my-5">
                <div className="w-10 h-10 bg-red-500 uppercase font-semibold flex justify-center items-center text-center leading-none">top <br />10</div>
                <p className="font-semibold">Top 1 leituras da semana</p>
            </div>
            <p className="text-gray-400 text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Atque quibusdam dolores consequatur suscipit quod quos <br />ipsa minima dolore sunt corporis.</p>
            <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-gray-200 text-gray-900 px-5 py-3 rounded font-semibold"><BookOpenCheck size={25} /> Ler Agora</button>
                <button className="flex items-center gap-2 bg-gray-200/10 px-5 py-3 rounded font-semibold"><Info size={25}/> Mais Informações</button>
            </div>
            <Image src={Cover} alt={'Background Highlights'} className="w-96 h-full absolute right-0 bottom-0"/>
        </section>
    )
}