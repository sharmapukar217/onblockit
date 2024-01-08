<script lang="ts">
  import { siteConfig } from "$lib/utilities/config";

  // components
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";

  // sections
  import Hero from "$lib/components/hero.svelte";
  import Note from "$lib/components/note.svelte";
  import Features from "$lib/components/features.svelte";
  import Services from "$lib/components/services.svelte";
  import Faq from "$lib/components/faq.svelte";
  import Pricing from "$lib/components/pricing.svelte";
</script>

<svelte:head>
  <title>{siteConfig.title}-{siteConfig.description}</title>
  <meta name="description" content={siteConfig.description} />
</svelte:head>

<Header />

<!-- hero section -->
<Hero />

<!-- note section -->
<Note />

<!-- features section -->
<Features
  title="What you get with {siteConfig.title}?"
  subtitle="One of the most professional and comprehensive digital marketing agency currently on the market..."
  features={[
    {
      title: "Feature 1",
      description: "a short but clear description of feature (1)"
      // icon: "tabler:brand-tailwind"
    },
    {
      title: "Feature 2",
      description: "a short but clear description of feature (2)"
      // icon: "tabler:brand-tailwind"
    },
    {
      title: "Feature 3",
      description: "a short but clear description of feature (3)"
      // icon: "tabler:brand-tailwind"
    },
    {
      title: "Feature 4",
      description: "a short but clear description of feature (4)"
      // icon: "tabler:brand-tailwind"
    },
    {
      title: "Starred by many",
      description:
        "We have been selected as one of the best and mostly starred digtal marketing agent in 2023.",
      icon: "icon-[heroicons--star]"
    }
  ]} />

<!-- services section -->
<Services />

<!-- pricing section -->
<Pricing />

<!-- FAQs -->
<Faq />

<Footer />
