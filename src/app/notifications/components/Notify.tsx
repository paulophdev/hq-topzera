import { CheckCheck } from "lucide-react";

export default function Notify() {
    return (
        <div className="bg-gray-200/10 rounded">
            <div className="p-2 flex items-center justify-between border-b-2 border-gray-600">
                <h4>Featured</h4>
                <div className="cursor-pointer" title="Marcar como Lido"><CheckCheck size={20} className="text-green-500"/></div>
            </div>
            <div className="p-2">
                <h3 className="mb-2 text-lg font-semibold">Special title treatment</h3>
                <p className="mb-2 font-bold text-xs text-gray-400">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="border-t-2 border-gray-600 p-2">
                <p className="text-center uppercase font-semibold text-sm">2 days ago</p>
            </div>
        </div>
    )
}