<script lang="ts">
  import type { Item } from "$lib/types";
  import Section from "./section.svelte";
  import Headline from "./headline.svelte";
  import ItemGrid from "./item-grid.svelte";

  const {
    title = "Frequently Asked Questions",
    subtitle,
    questions
  } = $props<{
    title?: string;
    subtitle?: string;
    questions: Array<Item>;
  }>();
</script>

<Section id="faq" class="bg-muted/60">
  <Headline title="Frequently Asked Questions" tagline="FAQ" />

  <ItemGrid
    items={questions}
    columns={2}
    defaultIcon="icon-[heroicons--chevron-right]"
    classes={{
      panel: "max-w-none",
      container: "gap-y-8 md:gap-y-12",
      iconWrapper: "flex-shrink-0 mt-1 w-6 h-6 text-primary"
    }} />
</Section>
