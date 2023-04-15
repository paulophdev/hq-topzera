import Categories from "./components/Categories";
import Highlights from "./components/Highlights";

export default function Home() {
  return (
    <main>
      <Highlights />

      <Categories title={'Super Heróis'}/>
      <Categories title={'Anti-Heróis'}/>
      <Categories title={'Cósmico'}/>
    </main>
  )
}
