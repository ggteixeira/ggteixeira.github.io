import { daysSince, formatDate, readingTime } from "@lib/utils";
import type { CollectionEntry } from "astro:content";
import { For } from "solid-js";

type Props = {
  entry: CollectionEntry<"garden"> | CollectionEntry<"projects">;
  pill?: boolean;
  minimal?: boolean;
};

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"
    >
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
      />
      <polyline
        points="12 5 19 12 12 19"
        class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
      />
    </svg>
  );
};

export default function ArrowCard(props: Props) {
  return (
    <a
      href={`/${props.entry.collection}/${props.entry.id}`}
      class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
    >
      <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2">
          {props.pill && (
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">
              {props.entry.collection === "garden" ? "post" : "project"}
            </div>
          )}

          {!props.minimal && (
            <div class="flex justify-between w-full">
              <div class="text-sm uppercase">
                {formatDate(props.entry.data.date)} -{" "}
                {readingTime(props.entry.body ?? "")}
              </div>

              <div class="flex align-middle">
                {props.entry.collection === "garden" &&
                  props.entry.data.updatedDate &&
                  daysSince(props.entry.data.updatedDate) <= 14 && (
                    <div class="text-sm uppercase">
                      updated: {formatDate(props.entry.data.updatedDate)}
                    </div>
                  )}

                {props.entry.collection === "garden" &&
                  daysSince(props.entry.data.date) <= 120 && (
                    <div class="text-sm uppercase">new</div>
                  )}

                <ArrowIcon />
              </div>
            </div>
          )}
        </div>

        <div
          class={`font-semibold ${!props.minimal ? "mt-3" : "mt-0"} text-black dark:text-white`}
        >
          {props.entry.data.title}
        </div>
        {!props.minimal && (
          <div class="text-sm line-clamp-2">{props.entry.data.summary}</div>
        )}
        {!props.minimal && (
          <ul class="flex flex-wrap mt-2 gap-1">
            <For each={props.entry.data.tags}>
              {(tag: string) => (
                <li class="text-xs uppercase py-0.5 px-1 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">
                  {tag}
                </li>
              )}
            </For>
          </ul>
        )}
      </div>
    </a>
  );
}
