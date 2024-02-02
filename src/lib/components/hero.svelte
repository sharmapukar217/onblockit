<script lang="ts">
  import { siteConfig } from "$lib/utilities/config";
  import SubscriptionForm from "./subscription-form.svelte";
</script>

<section id="hero" class="relative md:-mt-[76px] not-prose text-balance">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
    <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
    <div class="py-12 md:py-20">
      <div class="text-center pb-10 md:pb-16 max-w-5xl mx-auto">
        <!-- heading -->
        <div
          class="text-3xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
          <h1 class="text-primary">{siteConfig.title}</h1>
          <div class="inline-flex text-2xl md:text-5xl">
            <h2 class="typing">{siteConfig.description}</h2>
          </div>
        </div>

        <!-- subtitle -->
        <div class="max-w-3xl mx-auto">
          <p class="text-xl text-muted-foreground mb-6">
            {siteConfig.descriptionLong}
          </p>
        </div>

        <!-- subscribe form -->
        <SubscriptionForm />
      </div>

      <!-- <div class="max-w-3xl mx-auto">
        <enhanced:img
          src="$lib/assets/images/hero-astronaut.webp"
          alt="an astronaut floating in the space" />
      </div> -->
    </div>
  </div>
</section>

<style>
  section {
    height: calc(100vh - 76px);
  }
</style>