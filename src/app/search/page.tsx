import { SearchIcon } from "lucide-react";
import Card from "../components/Card";

export default function Search() {
    return (
        <>
            <section className="px-5 py-10 bg-gradient-to-r from-gray-950 to-gray-700 flex justify-center">
                <div className="relative">
                    <input type="search" placeholder="Pesquisar..." className="w-[500px] h-12 rounded pl-5 pr-10 text-gray-700 font-semibold"/>
                    <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-10">
                        <SearchIcon size={25} className="text-gray-700"/>
                    </div>
                </div>
            </section>

            <section className="px-5 my-5">
                <div className="grid grid-cols-6 gap-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </>
    )
}