<script lang="ts">
  import { siteConfig } from "$lib/utilities/config";
</script>

<section id="section-hero" class="relative md:-mt-[76px] not-prose text-balance">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
    <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
    <div class="py-12 md:py-20">
      <div class="text-center pb-10 md:pb-16 max-w-5xl mx-auto">
        <!-- heading -->
        <div
          class="text-3xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
          <h1 class="text-primary">{siteConfig.title}</h1>
          <div class="inline-flex">
            <h2 class="typing">{siteConfig.description}</h2>
          </div>
        </div>

        <!-- subtitle -->
        <div class="max-w-3xl mx-auto">
          <p class="text-xl text-muted-foreground mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam vel totam repudiandae
            earum modi commodi ab hic itaque voluptatibus, natus repellendus architecto facilis
            eveniet eius expedita adipisci sapiente blanditiis nulla?
          </p>
        </div>

        <!-- subscribe form -->
        <div class="w-full relative max-w-sm flex mx-auto">
          <div
            class="absolute -top-[1.5px] left-4 rounded-full h-full flex items-center justify-center">
            <div class="icon-[heroicons--envelope-open] h-5 w-5 text-muted-foreground" />
          </div>

          <input
            type="email"
            placeholder="hi@email.com"
            class="w-full rounded-full h-12 pl-11 pr-28
                bg-muted text-muted-foreground text-sm font-semibold
                border-[3px] focus:border-primary transition-all hover:bg-muted/90
              " />
          <div class="absolute h-full right-0 p-1.5">
            <button
              class="
                text-sm font-semibold
                bg-primary text-primary-foreground
                rounded-full h-full px-3
                ">Subscribe</button>
          </div>
        </div>
      </div>

      <div class="max-w-3xl mx-auto">
        <enhanced:img
          src="$lib/assets/images/hero-astronaut.webp"
          alt="an astronaut floating in the space" />
      </div>
    </div>
  </div>
</section>
