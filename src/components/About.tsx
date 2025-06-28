export default function About({
  numberOfParagraphs,
}: {
  numberOfParagraphs?: number;
}) {
  const textArray = [
    "Software Developer with experience with Python and Front-End Development. Currently interested in Back-End development with .NET and C#.",

    "I am also interested in Generative Syntax, Formal Semantics, Natural Language Processing (NLP) and Analytic Philosophy, since I am also a bachelor in Linguistics.",
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
