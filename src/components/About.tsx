import { For } from "solid-js";

type Props = {
  numberOfParagraphs?: number;
  paragraphs?: string[];
};

const defaultParagraphs = [
  "Software Developer with experience in Front-End Development with React (JavaScript/TypeScript), and also interested in Back-End Development with ASP.NET Core, NodeJS, and Django.",
  `I've been working with programming languages like JavaScript, TypeScript, Python, C#, and with frameworks like ReactJS, GatsbyJS, Astro, NodeJS, Django, .NET Core, and spaCy.`,
  "I am also interested in Generative Syntax and Formal Semantics, and I am experienced in NLP (Natural Language Processing)",
];

export default function About(props: Props) {
  const textArray = props.paragraphs ?? defaultParagraphs;

  return (
    <section class="animate">
      <article>
        <For each={textArray.slice(0, props.numberOfParagraphs)}>
          {(paragraph) => <p>{paragraph}</p>}
        </For>
      </article>
    </section>
  );
}
