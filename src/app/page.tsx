import Hero from "./hero/page";
import Menu from "./menu/page";

export default function Home() {
  return (
    <div className="bg-slate-100 overflow-hidden">
      <Hero />
      <Menu />
    </div>
  );
}
