<script lang="ts">
  import Section from "./section.svelte";
  import Headline from "./headline.svelte";
  import ItemGrid from "./item-grid.svelte";
  import { siteConfig } from "$lib/utilities/config";
</script>

<Section id="faq" class="bg-muted/60">
  <Headline title="Frequently Asked Questions" tagline="FAQ" />

  <ItemGrid
    items={[
      {
        title: `Why ${siteConfig.title}?`,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.."
      },
      {
        title: "How can I hire the team?",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse  in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "One more question?",
        description:
          "I'd love to answer the questions, but i need to finish something asap. So rest questions later on :-)"
      }
    ]}
    columns={2}
    defaultIcon="icon-[heroicons--chevron-right]"
    classes={{
      panel: "max-w-none",
      container: "gap-y-8 md:gap-y-12",
      iconWrapper: "flex-shrink-0 mt-1 w-6 h-6 text-primary"
    }} />
</Section>
