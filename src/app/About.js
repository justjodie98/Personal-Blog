import 'animate.css';

export default function About() {
  return (
    <section>
      <ul className="font-bold">
        <li className="text-3xl my-5 animate-wiggle animate-thrice animate-duration-1000 animate-delay-1000">
          Hi <span>there</span>,
        </li>
        <li className="text-7xl my-5 animate__animated animate__zoomInDown">
          {" "}
          I'm <span>Jodie</span>.
        </li>
        <li className="text-2xl animate-fade-up animate-duration-2000 animate-delay-1000">A Junior Software Developer</li>
      </ul>
      <h1 className="font-semibold text-3xl text-fuchsia-500 my-5 animate-jump-in animate-delay-500">About</h1>
      <h2 className="animate-fade  animate-duration-2000 animate-delay-1000">
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
