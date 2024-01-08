<script lang="ts">
  import { prices } from "$lib/utilities/config";
  import { twMerge } from "tailwind-merge";
  import Headline from "./headline.svelte";
  import Section from "./section.svelte";
</script>

<Section id="pricing" containerClass="max-w-7xl mx-auto">
  <Headline
    title="How much does our services cost?"
    subtitle="Only pay for what you need and change subscription at any time..."
    tagline="Pricing" />

  <div class="flex items-stretch justify-center">
    <div class="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {#each prices as { title, subtitle, price, period, items, callToAction, hasRibbon = false, ribbonTitle }}
        <div class="col-span-3 mx-auto flex w-full sm:col-span-1">
          {#if price && period}
            <div
              class="rounded-lg backdrop-blur border bg-background px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center">
              {#if hasRibbon && ribbonTitle}
                <div
                  class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right">
                  <span
                    class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-success text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']">
                    {ribbonTitle}
                  </span>
                </div>
              {/if}
              <div class="px-2 py-0">
                {#if title}
                  <h3
                    class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">
                    {title}
                  </h3>
                {/if}
                {#if subtitle}
                  <p class="font-medium text-muted-foreground">{subtitle}</p>
                {/if}
                <div class="my-8">
                  <div class="flex items-center justify-center text-center mb-1">
                    <span class="text-5xl">$</span>
                    <span class="text-6xl font-extrabold">{price}</span>
                  </div>
                  <span class="text-base leading-6 lowercase text-foreground">{period}</span>
                </div>
                {#if items}
                  <ul role="list" class="my-8 md:my-10 space-y-2 text-left">
                    {#each items as { description, icon }}
                      {#if description}
                        <li class="mb-1.5 flex items-start space-x-3 leading-7">
                          <div
                            class="{icon ??
                              'icon-[flat-color-icons--approval]'} w-5 h-5 font-bold p-1" />
                          <span class="text-sm">{description}</span>
                        </li>
                      {/if}
                    {/each}
                  </ul>
                {/if}
              </div>
              {#if callToAction}
                <div class={`flex justify-center`}>
                  {#if typeof callToAction === "string"}
                    {callToAction}
                  {:else if callToAction && callToAction.href}
                    <a
                      {...callToAction}
                      class={twMerge(
                        `w-full rounded-full h-12
                        flex items-center justify-center font-medium border`,
                        hasRibbon
                          ? "bg-primary text-primary-foreground hover:bg-primary/85"
                          : "bg-muted text-foreground hover:bg-muted/85"
                      )}>
                    </a>
                  {/if}
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</Section>
