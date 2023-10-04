import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im"
import { SiCsswizardry } from "react-icons/si"
import About from "./About";

export default function Home() {
  return (
    <main className="flex justify-center my-20 tracking-wide">
      <div className="">
        <h1 className="font-bold text-6xl hover:text-indigo-800">Jodie Koffi</h1>
        &nbsp;
        <About/>
        &nbsp;
        <div className="columns-2 font-semibold">
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
      </div>
    </main>
  );
}
