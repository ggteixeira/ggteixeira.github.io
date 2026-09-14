import type { CollectionEntry } from "astro:content";
import { For, Show } from "solid-js";
import ArrowCard from "@components/ArrowCard";

type Props = {
  data: CollectionEntry<"notes">[];
  postsLabel: string;
  noResultsLabel: string;
};

export default function Notes(props: Props) {
  return (
    <div class="w-screen relative left-1/2 -translate-x-1/2 px-5">
      <div class="max-w-screen-2xl mx-auto">
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-2">
            SHOWING {props.data.length} OF {props.data.length}{" "}
            {props.postsLabel}
          </div>
          <ul class="columns-1 sm:columns-2 lg:columns-4 gap-3">
            <For each={props.data}>
              {(post) => (
                <li class="break-inside-avoid mb-3">
                  <ArrowCard entry={post} dense />
                </li>
              )}
            </For>
            <Show when={props.data.length === 0}>
              <li class="text-sm text-black/50 dark:text-white/50">
                {props.noResultsLabel}
              </li>
            </Show>
          </ul>
        </div>
      </div>
    </div>
  );
}
