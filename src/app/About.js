import 'animate.css';

export default function About() {
  return (
    <section>
      <ul className="font-bold">
        <li className="text-3xl my-5">
          Hi <span>there</span>,
        </li>
        <li className="text-7xl my-5 animate__animated animate__zoomInDown">
          {" "}
          I'm <span>Jodie</span>.
        </li>
        <li className="text-2xl">A Junior Software Developer</li>
      </ul>
      <h1 className="font-semibold text-3xl text-fuchsia-500 my-5">About</h1>
      <h2 className="hover:animate__animated animate__bounce">
        {" "}
        An Apprentice <span>JavaScript </span> Engineer Graduate with
        professional experience in writing <span>Clean</span>,{" "}
        <span>Efficient</span> and <span>Robust</span> code. A{" "}
        <span>React</span> Developer passionate about building{" "}
        <span>Responsive</span> and Visually Pleasing web applications. I also
        make some cool stuff in <span>CSS</span>.
      </h2>
    </section>
  );
}
