<script lang="ts">
  import type { Item } from "$lib/types";
  import Headline from "./headline.svelte";
  import ItemGrid from "./item-grid.svelte";
  import Section from "./section.svelte";

  const {
    title = "What services do we offer?",
    subtitle,
    services
  } = $props<{
    title?: string;
    subtitle?: string;
    services: Array<Item>;
  }>();
</script>

<Section id="services" class="bg-muted/60 flex" containerClass="max-w-7xl mx-auto">
  <Headline {title} {subtitle} tagline="Services" />

  <ItemGrid
    items={services}
    columns={3}
    classes={{
      container: "gap-4 md:gap-6",
      panel: "flex flex-col rounded-lg backdrop-blur border bg-background p-6 items-start",
      icon: "h-20 w-20 mb-5"
    }} />
</Section>
