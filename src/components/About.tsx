export default function About({
  numberOfParagraphs,
}: {
  numberOfParagraphs?: number;
}) {
  const textArray = [
    "Software Developer with experience in Front-End Development with React (JavaScript/TypeScript), and also interested in Back-End Development with ASP.NET Core, NodeJS, and Django.",

    `I’ve been working with programming languages like JavaScript, TypeScript, Python, C#, and with frameworks like ReactJS, GatsbyJS, Astro, NodeJS, Django, .NET Core, and spaCy.`,

    "I am also interested in Generative Syntax and Formal Semantics, and I am experienced in NLP (Natural Language Processing)"
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
