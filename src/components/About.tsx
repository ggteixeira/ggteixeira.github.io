export default function About({
  numberOfParagraphs,
}: {
  numberOfParagraphs?: number;
}) {
  const textArray = [
    "Software Engineer interested in Front-End Development and Back-End Development",
    "Other topics I am passionate about are Functional Programming, Open-Source, and Security and Privacy.",
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
