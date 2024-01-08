<script lang="ts">
  import Headline from "./headline.svelte";
  import ItemGrid from "./item-grid.svelte";
  import Section from "./section.svelte";
</script>

<Section id="services" class="bg-muted/60 flex" containerClass="max-w-7xl mx-auto">
  <Headline title="What services do we offer?" tagline="Services" />

  <ItemGrid
    items={[
      {
        title: "Best Practices",
        description: "Best in the town with best practices of digital maketing.",
        icon: "icon-[flat-color-icons--approval]"
      },
      {
        title: "Call-to-Action",
        description: "Available on service for 24/7, with best class technical support.",
        icon: "icon-[flat-color-icons--advertising]"
      },
      {
        title: "Dummy service",
        description: "Idk what to write, waiting for content managers for the content :-(",
        icon: "icon-[flat-color-icons--like]"
      },
      {
        title: "Pricing",
        description: "Services at reasonable prices, choices await. Can you resist?",
        icon: "icon-[flat-color-icons--currency-exchange]"
      }
    ]}
    columns={3}
    classes={{
      container: "gap-4 md:gap-6",
      panel: "flex flex-col rounded-lg backdrop-blur border bg-background p-6 items-start",
      icon: "h-20 w-20 mb-5"
    }} />
</Section>
