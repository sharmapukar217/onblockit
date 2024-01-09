<script lang="ts">
  import type { Item } from "$lib/types";

  import Section from "./section.svelte";
  import Headline from "./headline.svelte";
  import ItemGrid from "./item-grid.svelte";

  const { title, subtitle, features } = $props<{
    title: string;
    subtitle?: string;
    features: Array<Item>;
  }>();
</script>

<Section id="features">
  <Headline {title} {subtitle} tagline="Features" />
  <ItemGrid
    items={features}
    columns={2}
    defaultIcon="icon-[heroicons--server-stack]"
    classes={{
      container: "px-6",
      title: "md:text-[1.3rem]",
      iconWrapper:
        "bg-primary text-primary-foreground rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4 rtl:ml-4 rtl:mr-0"
    }} />
</Section>
