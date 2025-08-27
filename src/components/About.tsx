export default function About({
  numberOfParagraphs,
}: {
  numberOfParagraphs?: number;
}) {
  const yearsOfExperience = new Date().getFullYear() - 2018;

  const textArray = [
    "Software Developer with experience in Front-End Development with React (JavaScript/TypeScript), and also interested in Back-End Development with ASP.NET Core, NodeJS, and Django.",

    `In the last ${yearsOfExperience} years, I’ve been working with programming languages like JavaScript, TypeScript, Python, C#, and with frameworks like ReactJS, GatsbyJS, Astro, NodeJS, Django, .NET Core, and spaCy.`,

    "I am also interested in Functional Programming with Elixir, and I am experienced in NLP (Natural Language Processing), Generative Syntax and Formal Semantics.",
  ];

  return (
    <section class="animate">
      <article>
        {textArray.slice(0, numberOfParagraphs).map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}
