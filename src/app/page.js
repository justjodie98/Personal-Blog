import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im"
import { SiCsswizardry } from "react-icons/si"
import About from "./About";

export default function Home() {
  return (
    <main className="flex justify-center my-20 tracking-wide ">
      <section className="w-1/2">
        <h1 className="font-bold text-6xl"><span>J</span>odie <span>K</span>offi</h1>
        <About/>
        <div className="columns-2 font-semibold my-5 text-fuchsia-500">
          <ul>
            <li>
              React
              <FaReact />
            </li>
            <li>
              JavaScript <SiJavascript />
            </li>
            <li>HTML5 <ImHtmlFive2/></li>
            <li>CSS <SiCsswizardry/> </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
