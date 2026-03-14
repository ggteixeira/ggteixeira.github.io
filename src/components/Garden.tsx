import type { CollectionEntry } from "astro:content";
import { createMemo, createSignal, For, Show } from "solid-js";
import ArrowCard from "@components/ArrowCard";
import { cn } from "@lib/utils";

type GardenStrings = {
  filter: string;
  gardenTags: string;
  showing: string;
  of: string;
  posts: string;
  noResults: string;
};

type Props = {
  tags: string[];
  gardenTags: string[];
  data: CollectionEntry<"garden">[];
  strings: GardenStrings;
};

export default function Garden(props: Props) {
  const [filter, setFilter] = createSignal(new Set<string>());
  const posts = createMemo(() =>
    props.data.filter((entry) =>
      Array.from(filter()).every((value) =>
        entry.data.tags.some(
          (tag: string) => tag.toLowerCase() === String(value).toLowerCase(),
        ),
      ),
    ),
  );

  function toggleTag(tag: string) {
    setFilter(
      (prev) =>
        new Set(
          prev.has(tag) ? [...prev].filter((t) => t !== tag) : [...prev, tag],
        ),
    );
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <div class="sticky top-24">
          <div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">
            {props.strings.filter}
          </div>
          <ul class="flex flex-wrap sm:flex-col gap-1.5 mb-8">
            <For each={props.tags}>
              {(tag) => (
                <li>
                  <button
                    onClick={() => toggleTag(tag)}
                    class={cn(
                      "w-full px-2 py-1 rounded",
                      "whitespace-nowrap overflow-hidden overflow-ellipsis",
                      "flex gap-2 items-center",
                      "bg-black/5 dark:bg-white/10",
                      "hover:bg-black/10 hover:dark:bg-white/15",
                      "transition-colors duration-300 ease-in-out",
                      filter().has(tag) && "text-black dark:text-white",
                    )}
                  >
                    <svg
                      class={cn(
                        "size-5 fill-black/50 dark:fill-white/50",
                        "transition-colors duration-300 ease-in-out",
                        filter().has(tag) && "fill-black dark:fill-white",
                      )}
                    >
                      <use
                        href={`/ui.svg#square`}
                        class={cn(!filter().has(tag) ? "block" : "hidden")}
                      />
                      <use
                        href={`/ui.svg#square-check`}
                        class={cn(filter().has(tag) ? "block" : "hidden")}
                      />
                    </svg>
                    {tag}
                  </button>
                </li>
              )}
            </For>
          </ul>

          <Show when={props.gardenTags.length > 0}>
            <div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">
              {props.strings.gardenTags}
            </div>

            <ul class="flex flex-wrap sm:flex-col gap-1.5">
              <For each={props.gardenTags}>
                {(tag) => (
                  <li>
                    <button
                      onClick={() => toggleTag(tag)}
                      class={cn(
                        "w-full px-2 py-1 rounded",
                        "whitespace-nowrap overflow-hidden overflow-ellipsis",
                        "flex gap-2 items-center",
                        "bg-black/5 dark:bg-white/10",
                        "hover:bg-black/10 hover:dark:bg-white/15",
                        "transition-colors duration-300 ease-in-out",
                        filter().has(tag) && "text-black dark:text-white",
                      )}
                    >
                      <svg
                        class={cn(
                          "size-5 fill-black/50 dark:fill-white/50",
                          "transition-colors duration-300 ease-in-out",
                          filter().has(tag) && "fill-black dark:fill-white",
                        )}
                      >
                        <use
                          href={`/ui.svg#square`}
                          class={cn(!filter().has(tag) ? "block" : "hidden")}
                        />
                        <use
                          href={`/ui.svg#square-check`}
                          class={cn(filter().has(tag) ? "block" : "hidden")}
                        />
                      </svg>
                      {tag}
                    </button>
                  </li>
                )}
              </For>
            </ul>
          </Show>
        </div>
      </div>
      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-2">
            {props.strings.showing} {posts().length} {props.strings.of}{" "}
            {props.data.length} {props.strings.posts}
          </div>
          <ul class="flex flex-col gap-3">
            <For each={posts()}>
              {(post) => (
                <li>
                  <ArrowCard entry={post} />
                </li>
              )}
            </For>
            <Show when={posts().length === 0}>
              <li class="text-sm text-black/50 dark:text-white/50">
                {props.strings.noResults}
              </li>
            </Show>
          </ul>
        </div>
      </div>
    </div>
  );
}
