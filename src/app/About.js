import Link from "next/link";

function Links() {
  return (
    <div>
      <Link href=""></Link>
    </div>
  );
}

export default function About() {
  return (
    <section>
      <h1 className="text-3xl text-fuchsia-500 my-5">About</h1>
      <h2>
        {" "}
        Hi, I'm Jodie based in <span>London</span>, United Kingdom. I am an
        Apprentice <span>JavaScript </span> Engineer Graduate with professional
        experience in writing <span>Clean</span>, <span>Efficient</span> and{" "}
        <span>Robust</span> code. A <span>React</span> Developer passionate
        about building <span>Responsive</span> web applications. I also make
        some cool stuff in <span>CSS</span>.
      </h2>
      <Links />
    </section>
  );
}
