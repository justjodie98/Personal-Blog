import About from "./About";
import Skills from "./Skills";
import 'animate.css';

export default function Home() {
  return (
    <main className="flex justify-center my-20 tracking-wide">
      <section className="w-1/2">
        <About />
        <Skills />
      </section>
    </main>
  );
}
