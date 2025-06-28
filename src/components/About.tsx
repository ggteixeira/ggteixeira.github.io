export default function About({
  numberOfParagraphs,
}: {
  numberOfParagraphs?: number;
}) {
  const textArray = [
    "Software Developer with experience in front-end systems. Currently interested in back-end development with .NET and C#.",

    "Besides programming I'm also interested in Generative Syntax, Formal Semantics, Natural Language Processing and Analytic Philosophy.",
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
