<script lang="ts">
  import type { Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";

  const {
    id,
    class: className,
    containerClass
  } = $props<{
    id: string;
    class?: string;
    containerClass?: string;
    children: Snippet;
  }>();
</script>

<section id="section-{id}" class={twMerge("not-prose scroll-mt-[72px]", className)}>
  <div
    class={twMerge(
      "relative mx-auto px-4 md:px-6 py-12 md:py-14 lg:py-16 max-w-5xl",
      containerClass
    )}>
    <slot />
  </div>
</section>
