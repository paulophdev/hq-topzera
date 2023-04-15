import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Card from "./Card";

interface ICategorie {
    title: String
}

export default function Categories({ title }: ICategorie) {
    return (
        <section className="px-5 my-5">
            <h3 className="flex items-center justify-between mb-5">
                <h4 className="text-xl">{title}</h4>
                <Link href={'/'} className="flex items-center text-gray-400 font-semibold text-xs" >Ver tudo <ArrowRight size={20} /></Link>
            </h3>
            <div className="grid grid-cols-6 gap-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}