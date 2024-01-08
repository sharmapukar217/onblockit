<script lang="ts">
  import Headline from "./headline.svelte";
  import Section from "./section.svelte";
</script>

<Section id="pricing" containerClass="max-w-7xl mx-auto">
  <Headline
    title="How much does our services cost?"
    subtitle="Only pay for what you need and change subscription at any time..."
    tagline="Pricing" />

  <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12"></div>
</Section>
