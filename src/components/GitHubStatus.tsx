import { createSignal, onMount, Show } from "solid-js";

type Indicator = "none" | "minor" | "major" | "critical";

type Strings = {
  operational: string;
  degraded: string;
  outage: string;
  loading: string;
};

type Props = {
  strings: Strings;
};

const dotClass: Record<Indicator, string> = {
  none: "bg-green-500",
  minor: "bg-yellow-400",
  major: "bg-orange-500",
  critical: "bg-red-500",
};

const pingClass: Record<Indicator, string> = {
  none: "bg-green-300",
  minor: "bg-yellow-300",
  major: "bg-orange-400",
  critical: "bg-red-400",
};

export default function GitHubStatus(props: Props) {
  const [indicator, setIndicator] = createSignal<Indicator | null>(null);

  onMount(async () => {
    try {
      const res = await fetch(
        "https://www.githubstatus.com/api/v2/status.json",
      );
      const data = await res.json();
      setIndicator(data.status.indicator as Indicator);
    } catch {
      // network failure — leave null (loading state stays)
    }
  });

  const label = () => {
    const ind = indicator();
    if (ind === null) return props.strings.loading;
    if (ind === "none") return props.strings.operational;
    if (ind === "minor") return props.strings.degraded;
    return props.strings.outage;
  };

  return (
    <div class="flex gap-2 justify-center sm:justify-end items-center">
      <Show
        when={indicator() !== null}
        fallback={
          <>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300" />
              <span class="relative inline-flex rounded-full h-3 w-3 bg-gray-400" />
            </span>
            {props.strings.loading}
          </>
        }
      >
        <span class="relative flex h-3 w-3">
          <span
            class={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingClass[indicator()!]}`}
          />
          <span
            class={`relative inline-flex rounded-full h-3 w-3 ${dotClass[indicator()!]}`}
          />
        </span>
        {label()}
      </Show>
    </div>
  );
}
