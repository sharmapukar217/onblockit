<script lang="ts">
  import type { ItemGrid } from "$lib/types";

  import { twMerge } from "tailwind-merge";
  const { items, columns, defaultIcon, classes = { icon: "text-primary" } } = $props<ItemGrid>();
</script>

{#if items}
  <div
    class={twMerge(
      "grid mx-auto gap-8 md:gap-y-12",
      columns === 2 && "sm:grid-cols-2 ",
      columns === 3 && "lg:grid-cols-3 sm:grid-cols-2",
      columns === 4 && "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2",
      classes.container
    )}>
    {#each items as item}
      {@const iconClass = item.iconClass ?? defaultIcon}
      <div>
        <div class={twMerge("flex flex-row max-w-md", classes.panel, item.classes?.panel)}>
          <div class="flex justify-center mr-2 rtl:mr-0 rtl:ml-2">
            {#if iconClass || item.icon}
              <div
                class={twMerge(
                  "flex justify-center items-center",
                  classes.iconWrapper,
                  item.classes?.iconWrapper
                )}>
                {#if item.icon}
                  {@html item.icon}
                {:else}
                  <div class={twMerge("w-7 h-7 ", iconClass, classes.icon, item.classes?.icon)} />
                {/if}
              </div>
            {/if}
          </div>

          <div class="mt-0.5">
            {#if item.title}
              <h3 class={twMerge("text-xl font-bold", classes.title, item.classes?.title)}>
                {item.title}
              </h3>
            {/if}
            {#if item.description}
              <div
                class={twMerge(
                  `${item.title ? "mt-3" : ""} text-muted-foreground`,
                  classes.description,
                  item.classes?.description
                )}>
                {@html item.description}
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}
