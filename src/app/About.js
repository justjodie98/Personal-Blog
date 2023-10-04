import Link from 'next/link';

function Links() {
  return <div> Read <Link href="">this page!</Link></div>;
}

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-3xl">About</h1>
      <h2>
        I'm Jodie from London, United Kingdom. An apprentice JavaScript Engineer
        with 2 years experience in building Responsive React applications.
      </h2>
      <Links/>
    </div>
  );
}
