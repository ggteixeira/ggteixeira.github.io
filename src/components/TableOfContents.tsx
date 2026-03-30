import { createSignal, createEffect, onCleanup, For, Show } from "solid-js";

type Heading = {
  depth: number;
  slug: string;
  text: string;
};

type Props = {
  headings: Heading[];
  label?: string;
};

export default function TableOfContents(props: Props) {
  const [activeId, setActiveId] = createSignal<string>("");

  const filteredHeadings = () => props.headings.filter((h) => h.depth <= 3);

  createEffect(() => {
    const headingElements = filteredHeadings()
      .map(({ slug }) => document.getElementById(slug))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 },
    );

    headingElements.forEach((el) => observer.observe(el));
    onCleanup(() => observer.disconnect());
  });

  return (
    <Show when={filteredHeadings().length > 0}>
      <nav>
        <p class="text-xs font-semibold uppercase tracking-widest opacity-40 mb-4">
          {props.label}
        </p>
        <ul class="space-y-1.5">
          <For each={filteredHeadings()}>
            {(heading) => (
              <li
                style={{
                  "padding-left": `${(heading.depth - 2) * 14}px`,
                }}
              >
                <a
                  href={`#${heading.slug}`}
                  class={`text-sm leading-snug block py-0.5 transition-all duration-200 ${
                    activeId() === heading.slug
                      ? "text-black dark:text-white font-medium opacity-100"
                      : "opacity-40 hover:opacity-65"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            )}
          </For>
        </ul>
      </nav>
    </Show>
  );
}
