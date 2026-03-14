import type { CollectionEntry } from "astro:content";
import { createEffect, createSignal, For } from "solid-js";
import Fuse from "fuse.js";
import ArrowCard from "@components/ArrowCard";

type SearchStrings = {
  placeholder: string;
  results: string;
};

type Props = {
  data: CollectionEntry<"garden">[];
  strings: SearchStrings;
};

export default function Search(props: Props) {
  const [query, setQuery] = createSignal("");
  const [results, setResults] = createSignal<CollectionEntry<"garden">[]>([]);

  const fuse = new Fuse(props.data, {
    keys: ["id", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  });

  createEffect(() => {
    if (query().length < 2) {
      setResults([]);
    } else {
      setResults(fuse.search(query()).map((result) => result.item));
    }
  });

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
  };

  const resultsLabel = () =>
    props.strings.results
      .replace("{count}", String(results().length))
      .replace("{query}", query());

  return (
    <div class="flex flex-col">
      <div class="relative">
        <input
          name="search"
          type="text"
          value={query()}
          onInput={onInput}
          autocomplete="off"
          spellcheck={false}
          placeholder={props.strings.placeholder}
          class="w-full px-2.5 py-1.5 pl-10 rounded outline-none text-black dark:text-white bg-black/5 dark:bg-white/15 border border-black/10 dark:border-white/20 focus:border-black focus:dark:border-white"
        />
        <svg class="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current">
          <use href={`/ui.svg#search`} />
        </svg>
      </div>
      {query().length >= 2 && results().length >= 1 && (
        <div class="mt-12">
          <div class="text-sm uppercase mb-2">{resultsLabel()}</div>
          <ul class="flex flex-col gap-3">
            <For each={results()}>
              {(result) => (
                <li>
                  <ArrowCard entry={result} pill={true} />
                </li>
              )}
            </For>
          </ul>
        </div>
      )}
    </div>
  );
}
