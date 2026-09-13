import { For } from "solid-js";

type Props = {
  numberOfParagraphs?: number;
  paragraphs: string[];
};

export default function About(props: Props) {
  return (
    <section class="animate">
      <article>
        <For each={props.paragraphs.slice(0, props.numberOfParagraphs)}>
          {(paragraph) => <p>{paragraph}</p>}
        </For>
      </article>
    </section>
  );
}
