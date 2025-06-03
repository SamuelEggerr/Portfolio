import Head from 'next/head';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    { id: 1, name: 'Volleyball Simulator', desc: 'Multi-agent system in Java' },
    { id: 2, name: 'Next.js Blog', desc: 'Built with Next.js and Markdown' },
  ];

  return (
    <>
      <Head>
        <title>Projects - Samuel</title>
        <meta name="description" content="Projects by Samuel." />
      </Head>
      <main>
        <h1>My Projects</h1>
        <ul>
          {projects.map(p => (
            <li key={p.id}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </li>
          ))}
        </ul>
        <Link href="/">← Back to Home</Link>
      </main>
    </>
  );
}
