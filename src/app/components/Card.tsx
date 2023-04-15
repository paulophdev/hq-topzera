import { BookOpenCheck, Info, PlusCircle } from "lucide-react";
import Image from "next/image";
import Cover from "../assets/hqs/thor_god_of_thunder/01/cover.jpg";

export default function Card() {
    return (
        <div className="bg-gray-200/10">
            <div><Image src={Cover} alt={'Imagem da Categoria'} className="w-full h-full"/></div>
            <div className="p-2">
                <h1 className="font-semibold">Lorem ipsum dolor sit.</h1>
                <p className="text-xs font-bold text-gray-500 flex gap-1 lowercase select-none mb-4">
                    <span>Marvel</span>
                    <span>-</span>
                    <span>Thor</span>
                    <span>-</span>
                    <span>Odin</span>
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="cursor-pointer" title="Começar a Ler"><BookOpenCheck size={25} /></div>
                        <div className="cursor-pointer" title="Adicionar à Minha Lista"><PlusCircle size={25} /></div>
                    </div>
                    <div>
                        <div className="cursor-pointer" title="Mais Informações"><Info size={25} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}