import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im"
import { SiCsswizardry } from "react-icons/si"

export default function Skills() {
  return (
    <section>
      <h1 className="font-semibold text-3xl text-fuchsia-500 my-5">Skills</h1>
      <main className="flex justify-between ">
        <button className="bg-none border-2 border-fuchsia-500 rounded-full py-2 px-4 cursor-text">React</button>
        <button className="bg-none border-2 border-fuchsia-500 rounded-full py-2 px-4 cursor-text">JavaScript</button>
        <button className="bg-none border-2 border-fuchsia-500 rounded-full py-2 px-4 cursor-text">HTML5</button>
        <button className="bg-none border-2 border-fuchsia-500 rounded-full py-2 px-4 cursor-text">CSS</button>
        </main>
    </section>
  );
}
