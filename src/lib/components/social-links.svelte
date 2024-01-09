<script>
  import { socialLinks } from "$lib/utilities/config";
</script>

<div class="mt-6 flex justify-center gap-4 lg:justify-start">
  {#each socialLinks.filter((l) => !l.disabled) as link (link.name)}
    <a href={link.href} target="_blank" rel="noreferrer">
      <span class="sr-only"> {link.name} </span>
      <div class={link.icon} />
    </a>
  {/each}
</div>

<style lang="postcss">
  a {
    @apply text-muted-foreground hover:text-foreground transition-all duration-100;
  }

  a:hover > div:nth-child(even) {
    rotate: -20deg;
  }

  a div {
    @apply h-6 w-6;
  }
</style>
