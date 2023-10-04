import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im"
import { SiCsswizardry } from "react-icons/si"

export default function Skills() {
  return (
    <section>
      <h1 className="font-semibold text-3xl text-fuchsia-500 my-5 animate-jump-in animate-delay-500">Skills</h1>
      <main className="flex justify-between ">
        
        <button className="bg-none border-2 border-fuchsia-500 rounded-full py-2 px-4 cursor-text animate-fade-up animate-duration-2000 animate-delay-1000">React</button>
        <button className="bg-none border-2 border-fuchsia-500 rounded-full py-2 px-4 cursor-text animate-fade-up animate-duration-2000 animate-delay-1000">JavaScript</button>
        <button className="bg-none border-2 border-fuchsia-500 rounded-full py-2 px-4 cursor-text animate-fade-up animate-duration-2000 animate-delay-1000">HTML5</button>
        <button className="bg-none border-2 border-fuchsia-500 rounded-full py-2 px-4 cursor-text animate-fade-up animate-duration-2000 animate-delay-1000">CSS</button>
        </main>
    </section>
  );
}
