import Categories from "../components/Categories";
import Notify from "./components/Notify";

export default function Notifications() {
    return (
        <>
            <section className="p-5 border-b-2 border-gray-600">
                <div className="grid grid-cols-4 gap-5">
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                </div>
            </section>

            <Categories title={'Super Heróis'}/>
        </>
    )
}